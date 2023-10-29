import "./Experience.scss";
import ProjectBox from "./ProjectBox";
const Wisible = () => {
  return (
    <>
      <div className="company">
        <div className="company-name">
          <div className="font-bold text-amber-300">
            WISIBLE.io - fiveloop co.ltd
          </div>
          2018 - 2019 ( 1 year 6 month)
          <a className="p-2" href="https://www.wisible.com" target="_blank">
            https://www.wisible.com
          </a>
        </div>
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
