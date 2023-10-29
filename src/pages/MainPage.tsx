import NavBar from "../components/Navbar/Navbar";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Certificated from "../components/Certificated/Certificated";
import { useRef } from "react";
import Footer from "../components/common/Footer";

const MainPage = () => {
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
    <>
      <NavBar scrollTo={scrollToComponent} />
      <div className="main-content-layout">
        <Home ref={componentsToScrollTo[0]} />
        <Skills ref={componentsToScrollTo[2]} />
        <AboutMe ref={componentsToScrollTo[1]} />
        <Experience ref={componentsToScrollTo[3]} />
        <Certificated ref={componentsToScrollTo[4]} />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
