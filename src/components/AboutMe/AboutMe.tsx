import "./AboutMe.scss";
import profileGrad from "../../assets/profile-gradx.jpg";
import React from "react";
import { Reveal } from "../common/Reveal";

const AboutMe = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="about-me flex flex-wrap justify-space-between mt-20"
    >
      <Reveal>
        <img
          className="mr-20"
          style={{ width: 250, height: 350 }}
          src={profileGrad}
          alt="profileGrad"
        />
      </Reveal>

      <Reveal>
        <div>
          <div className="about-me mt-10">
            <div className="header">Education</div>
            <div className="content flex">
              <span className="title">2014 - 2018</span>
              <div>
                <div className="font-bold">Computer Engineering</div>
                <div>King mongkut's institute of technology ladkrabang</div>
              </div>
            </div>
            <div className="content flex">
              <span className="title">2008- 2014</span>
              <div>
                <div className="font-bold">Computer Engineering</div>
                <div>HIGH SCHOOL Anukoolnaree school kalasin (science)</div>
              </div>
            </div>
          </div>
          <div className="header">Contact Info</div>
          <div className="content">
            <div>
              <span className="title">Phone:</span> 089-9403115
            </div>
            <div>
              <span className="title">Email:</span> Thanatcha.eao@gmail.com,
              bonsai.eao@gmail.com
            </div>
            <div>
              <span className="title">Address:</span> Bangkok Jatujak district
            </div>
            <div>
              <span className="title">Github:</span>
              <a href="https://github.com/eaotnc" target="_blank">
                https://github.com/eaotnc
              </a>
            </div>
            <div>
              <span className="title">linkedin:</span>
              <a
                href="https://www.linkedin.com/in/thanatcha-sangphet-8b19b3137"
                target="_blank"
              >
                https://www.linkedin.com/in/thanatcha-sangphet-8b19b3137
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
});

export default AboutMe;
