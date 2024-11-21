import "./Experience.scss";
import ProjectBox from "./ProjectBox";
import wisible from "../../assets/company-logo/wisible.png";
import CompanyName from "./CompanyName";

const Wisible = () => {
  return (
    <>
      <div className="company">
        <CompanyName
          name="WISIBLE.io - fiveloop co.ltd"
          imagePath={wisible}
          link="https://www.bizcuitsolution.com"
          title=" 2018 - 2019 ( 1 year 6 month)"
        />
        <div className="flex">
          <div className="vertical-bar" />
          <div>
            <ProjectBox
              name="Wisible React webApp"
              desc="Sales CRM help sale to less work sheet and sale more."
              descSecond="Be a Full-stack with"
              child={
                <span className="text-amber-300">
                  React- Apollo, semanticUi, scss, and nodejs -graphq, sql, knex
                </span>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wisible;
