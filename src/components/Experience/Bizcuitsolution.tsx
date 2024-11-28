import CompanyName from "./CompanyName";
import "./Experience.scss";
import ProjectBox from "./ProjectBox";
import bizcuitSolution from "../../assets/company-logo/bizcuitsolution.png";

const BizcuitSolution = () => {
  return (
    <div className="company">
      <CompanyName
        name="Bizcuit Solution"
        imagePath={bizcuitSolution}
        link="https://www.bizcuitsolution.com"
        title="2021 - 2023 (2 YEAR 2 MONTH)"
      />
      <div className="flex">
        <div className="vertical-bar" />
        <div>
          <ProjectBox
            name="BRAND-MARCH"
            desc={`The project help sale contact customer and increase revenue `}
            descSecond="Be a
          Flutter developer. making a both IOS, android mobileApp using"
            child={
              <span className="text-amber-300">
                Flutter 3.0.2 , Flutter provider, Flutter BLoC as state
                management
              </span>
            }
          />

          <ProjectBox
            name="CORE-REPORT"
            desc={`The project is similar to BI but specific to internal product  `}
            descSecond="Be a Fullstack engineer. making a Frontend, backend, DevOps using"
            child={
              <>
                <span className="text-amber-300">
                  Nestjs, Nextjs, k8s cluster aws, clickhouse,
                </span>
                applied with Hexagonal design
              </>
            }
          />
          <ProjectBox
            name="ARGUS"
            desc={`   The project that social network scrapper for the interested
            topic `}
            descSecond="and uses AI to analyze the data Be a Fullstack engineer, using"
            child={
              <span className="text-amber-300">
                Nodejs, nestjs, bitbucket Pipeline, ReactNextjs ,k8s, docker
              </span>
            }
          />
          <ProjectBox
            name="BIZCUIT VISION ANALYTIC (BVA)"
            desc={` The project uses AI to empower business through CCTV `}
            descSecond="video Making a web admin frontend with"
            child={
              <>
                <span className="text-amber-300">ReactTypesScrip </span> to
                create a Frame boundary to detect objects in that boundary
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BizcuitSolution;
