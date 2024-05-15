import { FaApple } from "react-icons/fa";
import { Container } from "./container";

export const Header = () => {
  return (
    <>
      <header className=" font-noto bg-bgHighlight text-white ">
        <Container className= "flex items-center  min-h-11"><a href="/" className=" h-11 flex items-center px-6 -ml-6">
          <FaApple style={{ width: "20px", height: "20px" }} />
          <span className=" sr-only"> Go to Homepage</span>
        </a></Container>
      </header>
      <div className=" font-noto sticky top-0 bg-bgHighlight text-white">
       <Container className="flex items-center min-h-11"> Apple TV + </Container>
      </div>
    </>
  );
};
