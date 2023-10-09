const AboutMe = () => {
  return (
    <div>
      <div className="about-me ">
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
      <div className="about-me mt-10">
        <div className="header">Education</div>
        <div className="content flex">
          <span className="title">2014 - 2018</span>
          <div>
            <div className="font-bold">Computer Engineering</div>
            <div>
              King mongkut's institute of technology ladkrabang GPA: 2.64
            </div>
            <div className="text-bold">TOEIC Score : 640</div>
          </div>
        </div>
        <div className="content flex">
          <span className="title">2008- 2014</span>
          <div>
            <div className="font-bold">Computer Engineering</div>
            <div>
              HIGH SCHOOL Anukoolnaree school kalasin (science) GPA: 3.85
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
