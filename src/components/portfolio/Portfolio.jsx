import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "ECommerc Platform",
    img: "/ecommerc.png",
    desc: "This project is a simple e-commerce website for selling cosmetics. The website will allow users to browse a variety of cosmetics products, including makeup, skincare, and haircare. Users can also add products to their cart and checkout.",
  },
  {
    id: 2,
    title: "IELTS practice test website",
    img: "/youpass.png",
    desc: "YouPass is a valuable resource for any IELTS learner. The website offers a comprehensive range of practice tests and learning materials to help students improve their IELTS scores.",
  },
  {
    id: 3,
    title: "ICANKid",
    img: "/icankid.png",
    desc: "ICANKid is a learning web app for children from 2 to 6 years old.It is designed to help children learn through play.The app offers a variety of activities, including games, songs, and stories.",
  },
  {
    id: 4,
    title: "Email Interfaces",
    img: "/email.png",
    desc: "The Galaxy Education Gmail notification interface is a new feature that allows Galaxy Education students to receive notifications about their Gmail accounts directly in the Galaxy Education app. This feature is designed to make it easier for students to stay organized and on top of their email.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
