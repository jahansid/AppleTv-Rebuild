import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "../../movies";

export const VideoCarousel = () => {
  return (
    <div className=" bg-background text-white pb-8">
      <div className="overflow-clip">
        <div className=" flex gap-5 mb-5 left-1/2 -translate-x-1/2">
          <div className=" w-[60vw] aspect-video shrink-0 overflow-clip rounded-2xl">
            <img
              className=" w-full h-full object-cover"
              src={movies[0].poster}
              alt={movies[0].name}
            />
          </div>
          <div className=" w-[60vw] aspect-video shrink-0 overflow-clip rounded-2xl">
            <img
              className=" w-full h-full object-cover"
              src={movies[1].poster}
              alt={movies[1].name}
            />
          </div>
          <div className=" w-[60vw] aspect-video shrink-0 overflow-clip rounded-2xl">
            <img
              className=" w-full h-full object-cover"
              src={movies[2].poster}
              alt={movies[2].name}
            />
          </div>
        </div>
      </div>
      <div className=" space-y-3">
        <SmallMoviesCarousel movies={randomMoviesSet1} />
        <div className="[--duration:74s] [--carousel-offset:-32px]">
        <SmallMoviesCarousel movies={randomMoviesSet2} />
        </div>
      </div>
    </div>
  );
};

const SmallMoviesCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className=" overflow-clip">
    <div className=" flex gap-3 animate-carousel-move relative left-[var(--carousel-offset, 0px)]">
      {movies.map((movie, index) => (
        <div
          key={`${movie.name} - ${index}`}
          className=" w-[23vw] aspect-video shrink-0"
        >
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={movie.poster}
            alt={movie.name}
          />
        </div>
      ))}
    </div>
    </div>
  );
};
