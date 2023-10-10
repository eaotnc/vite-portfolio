import "./Experience.scss";
const AIS = () => {
  return (
    <div className="company">
      <div className="company-name">
        <div className="font-bold text-amber-300">
          Advanced Info Services Plc. (outsource){" "}
        </div>
        2020- 2021 (1 year 6 month) doing a 3 project as follows
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="project">
          <div className="project-name"> AIS I farm </div>
          <div>
            The website that coporate with AIS and Thai goverment for online
            farming platform
          </div>
          my job is create a business intelligent tools with{" "}
          <span className="text-amber-300">METABASE </span>for helping user
          analysis farm
        </div>

        <div className="project">
          <div className="project-name"> Kubota farm </div>
          <div>
            The website that coporate with AIS and KUBOTA for online farming
            platform
          </div>
          Be a Front-end maintainer, and fixing issue from legaxy code using
          <span className="text-amber-300">Angular8, RxJS, leafletjs,</span>
        </div>

        <div className="project">
          <div className="project-name"> Blockchain as a service </div>
          <div>
            The POC website for create new network of blockchian with
            hyperledger.
          </div>
          Be a Front-end developer with
          <span className="text-amber-300">
            React- typeScript , Redux-toolkit,
          </span>
        </div>
      </div>
    </div>
  );
};

export default AIS;
