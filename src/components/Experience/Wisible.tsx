import "./Experience.scss";
import ProjectBox from "./ProjectBox";
import wisible from "../../assets/company-logo/wisible.png";
import CompanyName from "./CompanyName";

const Wisible = () => {
  return (
    <div className="company">
      <CompanyName
        name="Wisible Co., Ltd"
        imagePath={wisible}
        link="https://wisible.com"
        title="May 2018 - Oct 2019"
      />
      <div className="flex">
        <div className="vertical-bar" />
        <div>
          <ProjectBox
            name="WISIBLE"
            desc="Sales CRM platform designed to improve sales productivity and customer management."
            child={
              <ul className="project-bullets">
                <li>
                  Developed frontend applications using{" "}
                  <span className="text-amber-300">
                    React, Apollo GraphQL, and Semantic UI
                  </span>
                  .
                </li>
                <li>
                  Developed backend services using{" "}
                  <span className="text-amber-300">Node.js</span> and{" "}
                  <span className="text-amber-300">GraphQL</span>.
                </li>
                <li>
                  Designed and implemented database solutions using{" "}
                  <span className="text-amber-300">MySQL</span> and{" "}
                  <span className="text-amber-300">Knex</span>.
                </li>
                <li>
                  Delivered platform enhancements in an agile development
                  environment.
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Wisible;
