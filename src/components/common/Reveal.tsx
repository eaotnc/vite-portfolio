import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}
export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    } else {
      mainControl.start("hidden");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
