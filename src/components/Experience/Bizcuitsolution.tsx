import CompanyName from "./CompanyName";
import "./Experience.scss";
import ProjectBox from "./ProjectBox";
import bizcuitSolution from "../../assets/company-logo/bizcuitsolution.png";

const BizcuitSolution = () => {
  return (
    <div className="company">
      <CompanyName
        name="Bizcuit Solution Co., Ltd"
        imagePath={bizcuitSolution}
        link="https://www.bizcuitsolution.com"
        title="Sep 2021 - Dec 2023"
      />
      <div className="flex">
        <div className="vertical-bar" />
        <div>
          <ProjectBox
            name="BRAND-MARCH"
            desc="Sales engagement platform."
            child={
              <ul className="project-bullets">
                <li>
                  Developed cross-platform mobile applications using{" "}
                  <span className="text-amber-300">Flutter</span>.
                </li>
                <li>
                  Implemented state management using{" "}
                  <span className="text-amber-300">Provider</span> and{" "}
                  <span className="text-amber-300">BLoC</span>.
                </li>
                <li>Delivered both iOS and Android applications.</li>
                <li>Successfully learned and adopted Flutter for production use.</li>
              </ul>
            }
          />

          <ProjectBox
            name="CORE-REPORT"
            desc="Business Intelligence platform for internal product analytics."
            child={
              <ul className="project-bullets">
                <li>
                  Developed highly customizable dashboards and reporting
                  systems using{" "}
                  <span className="text-amber-300">
                    Nodejs, Nestjs, Nextjs
                  </span>
                  .
                </li>
                <li>
                  Built reusable frontend components and data visualization
                  modules.
                </li>
                <li>
                  Collaborated with stakeholders to deliver actionable business
                  insights.
                </li>
              </ul>
            }
          />

          <ProjectBox
            name="ARGUS"
            desc="Social media monitoring and AI analytics platform."
            child={
              <ul className="project-bullets">
                <li>
                  Developed web administration tools using{" "}
                  <span className="text-amber-300">React</span> and{" "}
                  <span className="text-amber-300">TypeScript</span>.
                </li>
                <li>
                  Implemented interactive canvas-based area selection and
                  object detection interfaces.
                </li>
                <li>
                  Built a reusable frontend architecture for analytics
                  visualization.
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BizcuitSolution;
