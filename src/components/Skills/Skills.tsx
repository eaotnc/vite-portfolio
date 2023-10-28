import "./Skills.scss";
import React from "react";
import reactLogo from "../../assets/react.svg";
import vueLogo from "../../assets/vuejs.png";
import angular from "../../assets/angular.svg";
import antdLogo from "../../assets/antd.png";
import tailwindLogo from "../../assets/tailwind.png";
import nodejsLog from "../../assets/nodejs.png";
import firebase from "../../assets/firebase.png";
import flutter from "../../assets/flutter-logo.png";
import bloC from "../../assets/bloc_logo.png";
import nest from "../../assets/NestJS.svg";
import docker from "../../assets/dockerlogo.png";

const Skills = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="skills">
      <div className="header"> Programming Skills</div>
      <div className="flex flex-wrap justify-between">
        <div className="skill-item">
          <div className="skill-title">Front end</div>
          <div>
            <div className="flex justify-start flex-wrap">
              <img className="logo" src={reactLogo} alt="react" />
              <img className="logo" src={vueLogo} alt="vueLogo" />
              <img className="logo" src={angular} alt="angular" />
              <img className="logo" src={antdLogo} alt="antdLogo" />
              <img
                className="logo"
                src={tailwindLogo}
                alt="tailwindLogo"
                style={{ width: 80 }}
              />
            </div>
            <div>
              <span className="text-amber-300">Reactjs (18.0.2 ),</span> NextJs,
              Vite, gasbyJs, redux, redux-toolkit, <br />
              Zustand, SemanticUi, Antdesign, tailwindcss, reactStoryBook
            </div>
            <div>
              <span className="text-amber-300"> Vue2 </span>
              Nuxtjs, VueX, vuetify,
            </div>
            <div>
              <span className="text-amber-300"> Angular8 </span>
              RxJS, bootstrap
            </div>
          </div>
        </div>

        <div className="skill-item">
          <div className="skill-title">Server-side</div>
          <div>
            <div className="flex justify-start flex-wrap">
              <img
                className="logo"
                src={nodejsLog}
                alt="nodejsLog"
                style={{ width: 180 }}
              />
              <img className="logo" src={nest} alt="nest" />
              <img className="logo" src={firebase} alt="firebase" />
              <img className="logo" src={docker} alt="docker" />
            </div>

            <div>
              <span className="text-amber-300">Nodejs, Nestjs</span> Expressjs,
              SQL, Mongodb, Graphql
            </div>

            <div>
              <span className="text-amber-300">FireBase</span> FireBaseAuthen,
              fireStore, fireStorage, firebaceCloundFunction
            </div>
            <div>
              <span className="text-amber-300"> Devops</span> k8s, lens, Helm
              chart , prometheus, grafana, loki
            </div>
          </div>
        </div>

        <div className="skill-item">
          <div className="skill-title">Mobile Cross PlatForm</div>
          <div className="flex justify-start flex-wrap">
            <img className="logo" src={flutter} alt="flutter" />
            <img className="logo" src={bloC} alt="bloC" />
          </div>
          <div>
            <div>
              <span className="text-amber-300"> Flutter (3.0.2)</span> Flutter
              Provider, BloC
            </div>
          </div>
          <div className="skill-title">Devops</div>
          <div>
            <div>lens, Helm chart , prometheus, grafana, loki</div>
          </div>
          <div className="skill-title">Others</div>
          <div>
            <div>
              Enzyme, Mocha, jest METABASE, Wordpress,
              <br /> cypress, C, java, javaScript, python, matlab
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Skills;
