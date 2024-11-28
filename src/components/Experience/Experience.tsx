import React from "react";
import { Reveal } from "../common/Reveal";

import AIS from "./AIS";
import BizcuitSolution from "./Bizcuitsolution";
import "./Experience.scss";
import OOCA from "./OOCA";
import Wisible from "./Wisible";
import TechCombine from "./TechCombine";

const Experience = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="experience">
      <Reveal>
        <div className="header mb-10">Experience</div>
      </Reveal>
      <Reveal>
        <TechCombine />
      </Reveal>
      <Reveal>
        <BizcuitSolution />
      </Reveal>
      <Reveal>
        <AIS />
      </Reveal>
      {/* <Reveal>
        <MoomMoong />
      </Reveal> */}
      <Reveal>
        <OOCA />
      </Reveal>
      <Reveal>
        <Wisible />
      </Reveal>
    </div>
  );
});

export default Experience;
