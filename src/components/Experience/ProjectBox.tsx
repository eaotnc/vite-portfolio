import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IProjectBox {
  name: string;
  desc: string;
  descSecond?: string;
  child: ReactNode;
}

const ProjectBox: React.FC<IProjectBox> = ({
  name,
  desc,
  descSecond,
  child,
}) => {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 1000, damping: 100 }}
    >
      <div className="project">
        <div className="project-name">{name}</div>
        <div>{desc}</div>
        <div>{descSecond}</div>
        {child}
      </div>
    </motion.div>
  );
};

export default ProjectBox;
