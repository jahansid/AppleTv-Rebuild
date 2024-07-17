import { Container } from "../container";
import { FadeIn } from "../fadein";

export const Usps = () => {
  return (
    <Container className=" relative z-10 text-3xl text-center md:text-left md:text-4xl font-bold max-w-[692px] space-y-12 py-36 leading-[1.1] text-white">
      <FadeIn>
        <p>New Apple Originals every month — always ad‑free.</p>
      </FadeIn>
      <FadeIn>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
      </FadeIn>
      <FadeIn>
        <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
      </FadeIn>
      <FadeIn>
        <p>Share a single subscription with up to five people.</p>
      </FadeIn>
    </Container>
  );
};
