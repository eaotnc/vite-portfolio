import "./Experience.scss";
const BizcuitSolution = () => {
  return (
    <div className="company">
      <div className="company-name">
        <div className="font-bold text-amber-300">Bizcuitsolution co., ltd</div>
        2021- present (2 year) doing a 4 project as follows
      </div>
      <div className="flex">
        <div className="vertical-bar" />
        <div>
          <div className="project">
            <div className="project-name">BRAND-MARCH </div>
            <div>
              The project help sale contact customer and increase revenue Be a
              Flutter developer. making a both IOS, android mobileApp using
            </div>
            <span className="text-amber-300">
              Flutter 3.0.2 , Flutter provider, Flutter BLoC as state management
            </span>
          </div>

          <div className="project">
            <div className="project-name"> CORE-REPORT</div>
            <div>
              The project is similar to BI but specific to internal product
            </div>
            Be a Fullstack engineer. making a Frontend, backend, DevOps using
            <span className="text-amber-300">
              Nestjs, Nextjs, k8s cluster aws, clickhouse,
            </span>
            applied with Hexagonal design
          </div>

          <div className="project">
            <div className="project-name"> ARGUS</div>
            <div>
              The project that social network scrapper for the interested topic
              and uses AI to analyze the data
            </div>
            Be a Fullstack engineer, using{" "}
            <span className="text-amber-300">
              Nodejs, nestjs, bitbucket Pipeline, ReactNextjs ,k8s, docker{" "}
            </span>
          </div>

          <div className="project">
            <div className="project-name"> BIZCUIT VISION ANALYTIC (BVA)</div>
            <div>
              The project uses AI to empower business through CCTV video
            </div>
            Making a web admin frontend with{" "}
            <span className="text-amber-300">ReactTypesScrip </span> to create a
            Frame boundary to detect objects in that boundary
          </div>
        </div>
      </div>
    </div>
  );
};

export default BizcuitSolution;
