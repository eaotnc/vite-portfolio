import React from "react";
import profilepic from "../../assets/profile-big.png";
import "./Home.scss";
import { SocialIcon } from "react-social-icons";
const Home = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="home flex justify-center flex-wrap">
      <div>
        <h1>Thanatcha </h1>
        <h1>Pitithadakul </h1>
        <h1 className="text-amber-300">--Software Developer</h1>
        <p className="p-6 w-80">
          5-year software developer. strongly work with
          <span className="text-amber-300">
            Reactjs, angular, vuejs, nodejs,
          </span>
          and lately <span className="text-amber-300">Flutter.</span> like to
          make good code quality. love to learn new things. like to work as a
          team. have lovely hobbies as a photographer
        </p>

        <div className="flex">
          <SocialIcon
            className="socialIcon"
            bgColor="#242424"
            url="https://www.linkedin.com/in/thanatcha-pitithadakul-8b19b3137/"
          />
          <SocialIcon
            className="socialIcon"
            bgColor="#242424"
            color=""
            url="https://github.com/eaotnc"
          />
          <SocialIcon
            className="socialIcon"
            bgColor="#242424"
            color=""
            url=" https://www.facebook.com/EaoTnc"
          />
          <SocialIcon
            className="socialIcon"
            bgColor="#242424"
            color=""
            url="https://www.instagram.com/eao.thanatcha/"
          />
        </div>
      </div>
      <img className="profile-pic ml-8" src={profilepic} alt="profile pic" />
    </div>
  );
});
export default Home;
