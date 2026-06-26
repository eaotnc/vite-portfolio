import CompanyName from "./CompanyName";
import "./Experience.scss";
import ProjectBox from "./ProjectBox";
import ooca from "../../assets/company-logo/ooca.png";

const OOCA = () => {
  return (
    <div className="company">
      <CompanyName
        name="Telemedica Co., Ltd."
        link="https://ooca.co"
        title="Oct 2019 - Jun 2020"
        imagePath={ooca}
      />
      <div className="flex">
        <div className="vertical-bar" />
        <div>
          <ProjectBox
            name="OOCA"
            desc="Online mental health consultation platform connecting users with psychologists and psychiatrists."
            child={
              <ul className="project-bullets">
                <li>
                  Diagnosed and resolved complex issues in legacy{" "}
                  <span className="text-amber-300">Vue.js</span> and{" "}
                  <span className="text-amber-300">Node.js</span> applications
                  while improving system performance and code quality.
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver new
                  features and ensure platform stability during high-traffic
                  events.
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OOCA;
