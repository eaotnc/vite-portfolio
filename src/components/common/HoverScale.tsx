import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IHoverScale {
  child: ReactNode;
}

const HoverScale: React.FC<IHoverScale> = ({ child }) => {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.5 }}
      transition={{ type: "spring", stiffness: 1000, damping: 100 }}
    >
      {child}
    </motion.div>
  );
};

export default HoverScale;
