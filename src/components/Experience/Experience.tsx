import React from "react";
import AIS from "./AIS";
import BizcuitSolution from "./Bizcuitsolution";
import "./Experience.scss";
import MoomMoong from "./MoomMoong";
import OOCA from "./OOCA";
import Wisible from "./Wisible";
const Experience = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="experience">
      <div className="header mb-10">Experience</div>
      <BizcuitSolution />
      <AIS />
      <MoomMoong />
      <OOCA />
      <Wisible />
    </div>
  );
});

export default Experience;