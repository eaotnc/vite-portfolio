import "./Certificated.scss";

const Certificated = () => {
  return (
    <div className="certificated">
      <div className="">
        <div className="header">Certificate (online)</div>
        <div className="flex justify-center flex-wrap">
          <div className="project">
            <div className="project-name">
              Front End Development Libraries (React) - FreeCodeCamp{" "}
            </div>
            <a
              href="https://www.freecodecamp.org/certification/fccdc702980-a234-4eb4-afaa-490bda8906a1/front-end-development-libraries"
              target="_blank"
            >
              https://www.freecodecamp.org/certification/fccdc702980-a234-4eb4-afaa-490bda8906a1/front-end-development-libraries
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-wrap">
          <div className="project">
            <div className="project-name">
              Responsive Web Design - FreeCodeCamp
            </div>
            <a
              href="https://www.freecodecamp.org/certification/fccdc702980-a234-4eb4-afaa-490bda8906a1/responsive-web-design"
              target="_blank"
            >
              https://www.freecodecamp.org/certification/fccdc702980-a234-4eb4-afaa-490bda8906a1/responsive-web-design
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificated;
