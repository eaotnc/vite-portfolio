import "./App.scss";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Certificated from "./components/Certificated/Certificated";
import { useEffect, useRef, useState } from "react";
import { toggleDarkMode } from "./helper";
import { Switch } from "antd";

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
      <NavBar scrollTo={scrollToComponent} />

      <div className="main-content-layout">
        <Home ref={componentsToScrollTo[0]} />
        <Skills ref={componentsToScrollTo[1]} />
        <AboutMe ref={componentsToScrollTo[2]} />
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
