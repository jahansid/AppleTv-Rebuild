
import { Header } from "./components/header";
import { Hero } from "./components/section/hero";
import { Usps } from "./components/section/usps";
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
        <div>column layout</div>
        <div>carousel posters</div>
      </main>
    </>
  )
}

export default App
