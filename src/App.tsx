
import { Header } from "./components/header";
import { Hero } from "./components/section/hero";
import { Usps } from "./components/section/usps";
import { VideoCarousel } from "./components/section/videocarousel";
import "./index.css";

function App() {
  

  return (
    <>
      <Header />
      <main>
        <div className=" bg-background">
        <Hero />
        <Usps />
        </div>
        {/* <div>column layout</div> */}
        <VideoCarousel />
      </main>
    </>
  )
}

export default App
