import { Button } from "../button";
import { Container } from "../container";

export const Hero = () => {
  return (
    <div className=" relative h-[300vh] bg-background text-white">
      <div className="absolute -top-[--header-height]  left-0 h-[200vh] w-full">
        <img
          className="sticky top-0 h-screen w-full object-cover"
          src="/posters/movie-3d.webp"
        />
      </div>
      <Container className="relative z-10 pb-7 min-h-[--hero-height] flex flex-col justify-end items-start">
        <h1 className=" mb-10 text-5xl font-bold leading-[1.05]">
          All Apple Originals. <br />
          Only on Apple TV+.
        </h1>
        <Button className="mb-16" size="large">
          Stream now
        </Button>
        <p className=" text-lg font-semibold leading-[1.21]">
          Watch on the 📺 app.
        </p>
      </Container>
    </div>
  );
};
