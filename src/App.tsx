import "./App.scss";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <div>
        <NavBar />

        <div className="main-content-layout">
          <Home />
          <Skills />
          <div className="flex justify-space-between mt-20">
            {/* <img
              className="mr-20"
              style={{ width: 250, height: 350 }}
              src={profileGrad}
              alt="profileGrad"
            /> */}

            <AboutMe />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
