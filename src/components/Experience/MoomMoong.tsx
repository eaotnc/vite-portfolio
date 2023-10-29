import "./Experience.scss";
const MoomMoong = () => {
  return (
    <div className="company">
      <div className="company-name">
        <div className="font-bold text-amber-300">
          MoomMoong R&d co.ltd (partime)
        </div>
        2021- 2021
        <a className="p-2" href="https://moom-mong.com" target="_blank">
          https://moom-mong.com
        </a>
        <div></div>
      </div>
      <div className="flex">
        <div className="vertical-bar" />
        <div>
          <div className="project">
            <div className="project-name"> MoomMoong Vue website </div>
            <div>
              The training platform web site coporate with Department of Mental
              Health ThaiGov. for reruit deep-listener
            </div>
            <div>- Be a Full-stack developer creating new project using</div>
            <span className="text-amber-300">
              Nuxtjs-Vuejs2,VueX, vuetify, semanticUi, firebaseAuth, fireStore,
              fireStorage, firebaseCloundFunction
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoomMoong;
