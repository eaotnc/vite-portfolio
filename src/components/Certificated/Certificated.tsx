import React from "react";
import "./Certificated.scss";
import reactcert from "../../assets/frontend-libraly.png";
import html from "../../assets/responsive-web-design.png";

const Certificated = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="certificated">
      <div className="">
        <div className="header">Certificate (online)</div>
        <div className="project">
          <div className="project-name">
            Front End Development Libraries (React) - FreeCodeCamp{" "}
          </div>
          <img className="cert-image" src={reactcert} alt="" />
          <a
            href="https://www.freecodecamp.org/certification/fccdc702980-a234-4eb4-afaa-490bda8906a1/front-end-development-libraries"
            target="_blank"
          >
            https://www.freecodecamp.org/certification/fccdc702980-a234-4eb4-afaa-490bda8906a1/front-end-development-libraries
          </a>
        </div>
        <div className="project">
          <div className="project-name">
            Responsive Web Design - FreeCodeCamp
          </div>
          <img className="cert-image" src={html} alt="" />

          <a
            href="https://www.freecodecamp.org/certification/fccdc702980-a234-4eb4-afaa-490bda8906a1/responsive-web-design"
            target="_blank"
          >
            https://www.freecodecamp.org/certification/fccdc702980-a234-4eb4-afaa-490bda8906a1/responsive-web-design
          </a>
        </div>
      </div>
    </div>
  );
});

export default Certificated;
