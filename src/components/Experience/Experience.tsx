import AIS from "./AIS";
import BizcuitSolution from "./Bizcuitsolution";
import "./Experience.scss";
import MoomMoong from "./MoomMoong";
import OOCA from "./OOCA";
import Wisible from "./Wisible";
const Experience = () => {
  return (
    <div className="experience">
      <div className="header">Experience</div>
      <BizcuitSolution />
      <AIS />
      <MoomMoong />
      <OOCA />
      <Wisible />
    </div>
  );
};

export default Experience;
