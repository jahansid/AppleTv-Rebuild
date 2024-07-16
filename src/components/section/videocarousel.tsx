import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "../../movies";
import { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import { Button } from "../button";

export const VideoCarousel = () => {
  const { width, height } = useWindowSize();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });
  const maxScale = useMemo(() => {
    const windowYratio = height / width;
    const xScale = 1.6667;
    const yScale = windowYratio * xScale * (16 / 9);
    return Math.max(xScale, yScale);
  }, [width, height]);
  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maxScale * 1.1, maxScale, 1]
  );

  const posterOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );

  const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">(
    "inactive"
  );
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  return (
    <motion.div
      animate={carouselVariant}
      className=" bg-background text-white pb-8"
    >
      <div ref={wrapperRef} className="overflow-clip mt-[-100vh] h-[300vh]">
        <div className=" sticky top-0 h-screen flex items-center">
          <div className=" flex relative gap-5 mb-5 left-1/2 -translate-x-1/2">
            <motion.div
              style={{ opacity: posterOpacity, x: posterTranslateXLeft }}
              className=" w-[60vw] aspect-video shrink-0 overflow-clip rounded-2xl"
            >
              <img
                className=" w-full h-full object-cover"
                src={movies[0].poster}
                alt={movies[0].name}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className=" relative w-[60vw] aspect-video shrink-0 overflow-clip rounded-2xl"
            >
              <img
                className=" w-full h-full object-cover"
                src={movies[1].poster}
                alt={movies[1].name}
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute bottom-0 left-0 flex w-full items-center justify-between p-5 text-lg"
              >
                <p>Video title demo</p>
                <Button>Watch now</Button>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ opacity: posterOpacity, x: posterTranslateXRight }}
              className=" w-[60vw] aspect-video shrink-0 overflow-clip rounded-2xl"
            >
              <img
                className=" w-full h-full object-cover"
                src={movies[2].poster}
                alt={movies[2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className=" -mt-[calc((100vh-(60vw*(9/16)))/2)] pt-4 space-y-3">
        <SmallMoviesCarousel movies={randomMoviesSet1} />
        <div className="[--duration:74s] [--carousel-offset:-32px]">
          <SmallMoviesCarousel movies={randomMoviesSet2} />
        </div>
      </div>
    </motion.div>
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
