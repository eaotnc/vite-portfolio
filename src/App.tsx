import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Home />
        <div className="main-content-layout">
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
