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
                  Developed and maintained a mobile investment platform for
                  retail investors using{" "}
                  <span className="text-amber-300">
                    React Native, and Zustand
                  </span>{" "}
                  for state management
                </li>
                <li>
                  Integrated AI-assisted development workflows using{" "}
                  <span className="text-amber-300">Claude Code</span> for
                  feature development, code reviews, debugging, migration
                  tasks, and technical documentation.
                </li>
                <li>
                  Implemented secure Biometric Authentication (Face ID / Touch
                  ID) to improve user login experience and account security.
                </li>
                <li>
                  Developed Deep Linking capabilities to support seamless
                  navigation from marketing campaigns, notifications, and
                  external channels.
                </li>
                <li>
                  Integrated Push Notification services to enhance user
                  engagement and investment-related communications.
                </li>
                <li>
                  Improved application performance, stability, and
                  maintainability through code optimization and refactoring by
                  using <span className="text-amber-300">SonarQube</span>.
                </li>
                <li>
                  Managed and maintained CI/CD pipelines using{" "}
                  <span className="text-amber-300">CircleCI</span> to
                  streamline automated build, testing, and deployment
                  processes.
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
