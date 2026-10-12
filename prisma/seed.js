import { prisma } from "../src/config/db.js";

const userId = "26576b3f-ae20-4b2a-9581-9622d8dfc123";

const movies = [
  {
    title: "The Matrix",
    overview: "A computer hacker learns about the true nature of reality.",
    relaseYear: 1999,
    genres: ["Action", "Sci-Fi"],
    runtime: 136,
    posterUrl: "https://example.com/matrix.jpg",
    createBy: userId,
  },
  {
    title: "Inception",
    overview:
      "A thief who steals corporate secrets through dream-sharing technology.",
    relaseYear: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    runtime: 148,
    posterUrl: "https://example.com/inception.jpg",
    createBy: userId,
  },
  {
    title: "The Dark Knight",
    overview: "Batman faces the Joker in a battle for Gotham's soul.",
    relaseYear: 2008,
    genres: ["Action", "Crime", "Drama"],
    runtime: 152,
    posterUrl: "https://example.com/darkknight.jpg",
    createBy: userId,
  },
  {
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, and others intertwine.",
    relaseYear: 1994,
    genres: ["Crime", "Drama"],
    runtime: 154,
    posterUrl: "https://example.com/pulpfiction.jpg",
    createBy: userId,
  },
  {
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space.",
    relaseYear: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    runtime: 169,
    posterUrl: "https://example.com/interstellar.jpg",
    createBy: userId,
  },
  {
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years.",
    relaseYear: 1994,
    genres: ["Drama"],
    runtime: 142,
    posterUrl: "https://example.com/shawshank.jpg",
    createBy: userId,
  },
  {
    title: "Fight Club",
    overview:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club.",
    relaseYear: 1999,
    genres: ["Drama"],
    runtime: 139,
    posterUrl: "https://example.com/fightclub.jpg",
    createBy: userId,
  },
  {
    title: "Forrest Gump",
    overview:
      "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man.",
    relaseYear: 1994,
    genres: ["Drama", "Romance"],
    runtime: 142,
    posterUrl: "https://example.com/forrestgump.jpg",
    createBy: userId,
  },
  {
    title: "The Godfather",
    overview:
      "The aging patriarch of an organized crime dynasty transfers control to his son.",
    relaseYear: 1972,
    genres: ["Crime", "Drama"],
    runtime: 175,
    posterUrl: "https://example.com/godfather.jpg",
    createBy: userId,
  },
  {
    title: "Goodfellas",
    overview: "The story of Henry Hill and his life in the mob.",
    relaseYear: 1990,
    genres: ["Biography", "Crime", "Drama"],
    runtime: 146,
    posterUrl: "https://example.com/goodfellas.jpg",
    createBy: userId,
  },  
];

const main = async () => {
    console.log("Seeding movies...");
    for(const movie of movies){
        await prisma.movie.create({
            data: movie
        });
        console.log(`Created movie: ${movie.title}`);
    };
    console.log("Seeding completed.");
};


main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });