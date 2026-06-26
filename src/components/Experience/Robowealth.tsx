import "./Experience.scss";
import ProjectBox from "./ProjectBox";
import robowealth from "../../assets/company-logo/robowealth.png";
import CompanyName from "./CompanyName";

const Robowealth = () => {
  return (
    <div className="company">
      <CompanyName
        name="Robowealth Mutual Fund Co., Ltd. (Contract)"
        link="https://www.robowealth.co.th/"
        imagePath={robowealth}
        title="Feb 2025 - Present"
      />
      <div className="flex">
        <div className="vertical-bar" />
        <div>
          <ProjectBox
            name="FUNDII INVESTMENT APPLICATION"
            desc=""
            child={
              <ul className="project-bullets">
                <li>
                  Built and maintained a mobile investment platform with{" "}
                  <span className="text-amber-300">
                    React Native and Zustand
                  </span>
                  .
                </li>
                <li>
                  Used <span className="text-amber-300">Claude Code</span> for
                  feature development, code reviews, debugging, and migrations.
                </li>
                <li>
                  Implemented Biometric Authentication (Face ID / Touch ID).
                </li>
                <li>
                  Added Deep Linking for marketing campaigns, notifications,
                  and external channels.
                </li>
                <li>
                  Integrated Push Notifications for user engagement.
                </li>
                <li>
                  Improved performance and maintainability via refactoring with{" "}
                  <span className="text-amber-300">SonarQube</span>.
                </li>
                <li>
                  Managed CI/CD pipelines with{" "}
                  <span className="text-amber-300">CircleCI</span>.
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Robowealth;
