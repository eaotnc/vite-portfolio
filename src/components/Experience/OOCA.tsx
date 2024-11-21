import CompanyName from "./CompanyName";
import "./Experience.scss";
import ProjectBox from "./ProjectBox";
import ooca from "../../assets/company-logo/ooca.png";

const OOCA = () => {
  return (
    <div className="company">
      <CompanyName
        name="OOCA - telemedica co. ltd"
        link="https://ooca.co"
        title="2019- 2020 (9 month)"
        imagePath={ooca}
      />
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
