import "./Experience.scss";
import ProjectBox from "./ProjectBox";
const MoomMoong = () => {
  return (
    <div className="company">
      <div className="company-name">
        <a href="https://moom-mong.com" target="_blank">
          <div className="font-bold text-amber-300">
            MoomMoong R&d co.ltd (partime)
          </div>
          2021 - 2021
        </a>
      </div>
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
