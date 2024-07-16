export type Movie = {
    poster: string;
    name: string;
}

export const movies = [
  { poster: "/posters/bw-tree.jpeg", name: "Tree" },
  { poster: "/posters/dog.jpeg", name: "Dog" },
  { poster: "/posters/movie-3d.webp", name: "Movie3D" },
  { poster: "/posters/person-dark.webp", name: "Person" },
  { poster: "/posters/work-dark.webp", name: "Work" },
  { poster: "/posters/landscape.jpeg", name: "Landscape" },
  { poster: "/posters/cinema-capture.webp", name: "Cinema" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
