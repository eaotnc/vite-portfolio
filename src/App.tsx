import "./App.scss";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Certificated from "./components/Certificated/Certificated";

function App() {
  return (
    <>
      <div>
        <NavBar />

        <div className="main-content-layout">
          <Home />
          <Skills />
          <AboutMe />
          <Experience />
          <Certificated />
        </div>
      </div>
    </>
  );
}

export default App;
