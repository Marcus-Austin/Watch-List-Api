import {prisma} from "../config/db.js";

const addToWatchList = async (req,res)=>{
    const {movieId, status, rating, notes, userId}= req.body;

    //verify if movie exists
    const movie = await prisma.movie.findUnique({
        where:{id: movieId}
    });

    if (!movie) {
        return res.status(404).json({ error: "Movie not found" });
    }
    //check if movie is already in the watchlist
    const existingInWatchlist = await prisma.watchlistItem.findUnique({
        where:{userId_movieId:{
            userId: userId,
             movieId: movieId
        },},
    });
    
    if(existingInWatchlist){
        return res.status(400).json({error: "Movie already in watchlist"});
    }

    const watchListItem = await prisma.watchListItem.create({
        data:{
            userId,
            movieId,
            status: status || "PLANNED",
            rating,
            notes,
        },
    });

res.status(201).json(
    {
        status: "success",
        data:{watchListItem},
    });
};
export {addToWatchList};