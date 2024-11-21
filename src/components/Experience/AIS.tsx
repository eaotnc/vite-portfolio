import "./Experience.scss";
import ProjectBox from "./ProjectBox";
import ais from "../../assets/company-logo/ais.png";
import CompanyName from "./CompanyName";

const AIS = () => {
  return (
    <div className="company">
      <div className="company-name">
        <CompanyName
          name="Advanced Info Services Plc. (outsource)"
          link="https://www.ais.th"
          imagePath={ais}
          title="2020- 2021 (1 year 6 month) 3 project "
        />
      </div>
      <div className="flex">
        <div className="vertical-bar" />
        <div>
          <ProjectBox
            name="AIS I farm"
            desc="The website that corporate with AIS and Thai government for online
              farming platform"
            descSecond="my job is create a business intelligent tools with"
            child={
              <>
                <span className="text-amber-300">METABASE </span>for helping
                user analysis farm
              </>
            }
          />

          <ProjectBox
            name="Kubota farm"
            desc="The website that corporate with AIS and KUBOTA for online farming platform"
            descSecond="Be a Front-end maintainer, and fixing issue from legacy code using"
            child={
              <span className="text-amber-300">Angular8, RxJS, leafletjs,</span>
            }
          />

          <ProjectBox
            name="Blockchain as a service"
            desc="The POC website for create new network of blockchian with hyperledger"
            descSecond="Be a Front-end developer with"
            child={
              <span className="text-amber-300">
                React- typeScript , Redux-toolkit,
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AIS;
