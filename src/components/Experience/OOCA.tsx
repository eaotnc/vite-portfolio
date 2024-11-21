import "./Experience.scss";
import ProjectBox from "./ProjectBox";
const OOCA = () => {
  return (
    <div className="company">
      <div className="company-name">
        <a href="https://ooca.co" target="_blank">
          <div className="font-bold text-amber-300">
            OOCA - telemedica co. ltd
          </div>
          2019- 2020 (9 month)
        </a>
      </div>
      <div className="flex">
        <div className="vertical-bar" />
        <div>
          <ProjectBox
            name="OOCA Vue webApplication"
            desc="Online video call platform to connect with psychologists and
            psychiatrists."
            descSecond="- Be a Full-stack developer and maintainer, and fixing issue from
            legaxy code with"
            child={
              <span className="text-amber-300">
                Vuejs2-VueX, vuetify, Nodejs, Reactjs
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OOCA;
