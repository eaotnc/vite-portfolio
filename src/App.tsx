import "./App.scss";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Certificated from "./components/Certificated/Certificated";
import { useRef } from "react";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const componentsToScrollTo = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  const scrollToComponent = (index: number) => {
    const elementToScrollTo = componentsToScrollTo[index]?.current;
    if (elementToScrollTo) {
      elementToScrollTo.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "#48bdc9",
        }}
        outerStyle={{
          border: "3px solid #48bdc9",
        }}
      />
      <NavBar scrollTo={scrollToComponent} />

      <div className="main-content-layout">
        <Home ref={componentsToScrollTo[0]} />
        <Skills ref={componentsToScrollTo[2]} />
        <AboutMe ref={componentsToScrollTo[1]} />
        <Experience ref={componentsToScrollTo[3]} />
        <Certificated ref={componentsToScrollTo[4]} />
        <div className="text-gray-400 h-10 mt-10 flex justify-between">
          <div>©thanatcha P. website 2023</div>

          <div>
            currently this website made by vite react ant deploy to github page
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
