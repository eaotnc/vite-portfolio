import "./Experience.scss";
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
            <div className="project">
              <div className="project-name"> Wisible React webApp </div>
              <div>Sales CRM help sale to less work sheet and sale more.</div>
              <div>Be a Full-stack with</div>
              <span className="text-amber-300">
                React- Apollo, semanticUi, scss, and nodejs -graphq, sql, knex
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wisible;
