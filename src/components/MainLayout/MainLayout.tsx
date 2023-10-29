import AnimatedCursor from "react-animated-cursor";
import { motion, useScroll } from "framer-motion";

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "#48bdc9",
        }}
        outerStyle={{
          border: "3px solid #48bdc9",
        }}
      />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
