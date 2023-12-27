import { useRef } from "react";
import "./parallax.scss"; // hieu ung khi scroll trang
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {

  // const ref = useRef(initialValue)
  // initialValue: giá trị ban đầu của thuộc tính DOM.
  // ref: đối tượng có thuộc tính current chứa giá trị hiện tại của thuộc tính DOM.
  const ref = useRef();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I Do?" : "About me"}
      </motion.h1>
      <motion.div className="mountains" />
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"
            })`,
        }}
      />
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
