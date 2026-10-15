import jwt from 'jsonwebtoken';
import { prisma } from '../config/db.js';

export const authMiddleware = async (req,res,next) =>{//read token and verify it's valid for request
console.log('authMiddleware reached');
let token

if(
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
){
    token = req.headers.authorization.split(' ')[1]
}else if(req.cookies?.jwt){
    token = req.cookies.jwt
}
if(!token){
    return res.status(401).json({error:'Not authorized, no token provided'});
}
try{//verify token and extract user id from it
 const decoded = jwt.verify(token,process.env.JWT_SECRET);

 const user = await prisma.user.findUnique({
    where:{id:decoded.id},
 });
 if(!user){
    return res.status(401)
    .json({error:'User no longer exists'});
 }
 req.user = user;
 next();
}catch(err){
 return res.status(401)
    .json({error: "Not authorized, token failed"});
}

}