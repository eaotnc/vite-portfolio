import "./Experience.scss";
import ProjectBox from "./ProjectBox";
import ais from "../../assets/company-logo/ais.png";
import CompanyName from "./CompanyName";

const AIS = () => {
  return (
    <div className="company">
      <div className="company-name">
        <CompanyName
          name="Advanced Info Services Plc. (Outsource)"
          link="https://www.ais.th"
          imagePath={ais}
          title="Jun 2020 - Sep 2021"
        />
      </div>
      <div className="flex">
        <div className="vertical-bar" />
        <div>
          <ProjectBox
            name="KUBOTA FARM"
            desc="Digital farming platform developed by AIS and government partners."
            child={
              <ul className="project-bullets">
                <li>
                  Maintained and enhanced frontend applications using{" "}
                  <span className="text-amber-300">Angular</span> and{" "}
                  <span className="text-amber-300">RxJS</span>.
                </li>
                <li>
                  Built business intelligence dashboards using{" "}
                  <span className="text-amber-300">Metabase</span>.
                </li>
                <li>
                  Delivered data visualization tools to support farming
                  analysis and decision-making using{" "}
                  <span className="text-amber-300">Leafletjs</span>.
                </li>
              </ul>
            }
          />

          <ProjectBox
            name="BLOCKCHAIN AS A SERVICE"
            desc="Proof-of-concept platform for blockchain network provisioning using Hyperledger."
            child={
              <ul className="project-bullets">
                <li>
                  Developed frontend applications using{" "}
                  <span className="text-amber-300">
                    React, TypeScript, and Redux Toolkit
                  </span>
                  .
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AIS;
