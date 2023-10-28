import React from "react";
import "./Certificated.scss";
import reactcert from "../../assets/frontend-libraly.png";
import html from "../../assets/responsive-web-design.png";
import { Reveal } from "../common/Reveal";

const Certificated = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="certificated">
      <Reveal>
        <div className="header">Certificate (online)</div>
      </Reveal>
      <Reveal>
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
      </Reveal>
      <Reveal>
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
      </Reveal>
    </div>
  );
});

export default Certificated;
