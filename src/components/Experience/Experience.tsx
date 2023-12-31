import React from "react";
import AIS from "./AIS";
import BizcuitSolution from "./Bizcuitsolution";
import "./Experience.scss";
import MoomMoong from "./MoomMoong";
import OOCA from "./OOCA";
import Wisible from "./Wisible";
import { Reveal } from "../common/Reveal";
const Experience = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="experience">
      <Reveal>
        <div className="header mb-10">Experience</div>
      </Reveal>
      <Reveal>
        <BizcuitSolution />
      </Reveal>
      <Reveal>
        <AIS />
      </Reveal>
      <Reveal>
        <MoomMoong />
      </Reveal>
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
