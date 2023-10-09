import profilepic from "../../assets/profile-big.png";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home flex justify-center ">
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
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>
      <img className="profile-pic ml-8" src={profilepic} alt="profile pic" />
    </div>
  );
};
export default Home;
