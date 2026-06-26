import React from "react";
import profilepic from "../../assets/profile-big.png";
import "./Home.scss";
import { SocialIcon } from "react-social-icons";
import { TextReveal } from "../common/TextReveal";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Senior Software Engineer",
  "Web Developer",
  "Mobile Developer",
  "BackEnd Developer",
  "AI-Assisted Developer",
  "Photographer",
  "Traveler",
  "Coffee Maker",
  "Biker",
  "Cactus cultivator",
  "Gamer",
];

const Home = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div ref={ref} className="home flex justify-center flex-wrap">
      <div>
        <TextReveal>
          <div className="w-100">
            <h1>Hi I'm Eao </h1>
            <h1>Thanatcha Pitithadakul </h1>
            <div className="text-xl">I'm a </div>

            <TextTransition springConfig={presets.stiff}>
              <h1 className="text-amber-300">{TEXTS[index % TEXTS.length]}</h1>
            </TextTransition>
          </div>
        </TextReveal>

        <TextReveal>
          <p className="p-6 w-80">
            Senior Software Engineer with 8+ years of experience.
            <br />
            Strongly work with{" "}
            <span className="text-amber-300">
              Reactjs, React Native, Nextjs, Nodejs, NestJS, PostgreSQL, Docker,
              Kubernetes,
            </span>{" "}
            and CI/CD automation.
            <br />
            Actively leveraging AI-assisted tools such as{" "}
            <span className="text-amber-300">Claude Code</span> to improve
            delivery speed, code quality, and engineering productivity.
          </p>
        </TextReveal>

        <TextReveal>
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
        </TextReveal>

        <section></section>
      </div>
      <TextReveal>
        <img className="profile-pic ml-8" src={profilepic} alt="profile pic" />
      </TextReveal>
    </div>
  );
});
export default Home;
