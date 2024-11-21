import CompanyName from "./CompanyName";
import "./Experience.scss";
import ProjectBox from "./ProjectBox";
import moomMoong from "../../assets/company-logo/moomMoong.png";

const MoomMoong = () => {
  return (
    <div className="company">
      <CompanyName
        name="MoomMoong R&d co.ltd (partime)"
        link="https://moom-mong.com"
        title="2021 - 2021"
        imagePath={moomMoong}
      />

      <div className="flex">
        <div className="vertical-bar" />
        <div>
          <ProjectBox
            name="MoomMoong Vue website"
            desc="The training platform web site coporate with Department of Mental
            Health ThaiGov. for reruit deep-listener"
            descSecond="- Be a Full-stack developer creating new project using"
            child={
              <span className="text-amber-300">
                Nuxtjs-Vuejs2,VueX, vuetify, semanticUi, firebaseAuth,
                fireStore, fireStorage, firebaseCloundFunction{" "}
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MoomMoong;
