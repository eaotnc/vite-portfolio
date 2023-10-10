import "./App.scss";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";

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
          <div className="h-80"></div>
        </div>
      </div>
    </>
  );
}

export default App;
