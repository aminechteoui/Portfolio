import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";


const Hero = () => {
  const lottieRef = useRef();

  return (
    <section id="Hero" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./mmm.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software Engineering Student And MERN Stack Developer.
        </motion.h1>

        <p className="sub-title">
          I am Amine Chteoui, a final-year Software Engineering student and a developer specializing in the MERN Stack (MongoDB, Express.js, React, Node.js).
          Passionate about web development, I create modern, high-performance solutions tailored to users' needs. My expertise includes building dynamic, scalable, and secure web applications.
          Explore my portfolio to discover my projects, background, and technical skills. Feel free to contact me to discuss collaborations or learn more about my work!
        </p>

        <div id="Speaking" className="all-icons flex">
          <a href="https://www.facebook.com/aammiin/" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-facebook2"></div>
          </a>
          <a href="https://www.instagram.com/amine.chtiouiii/" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-instagram"></div>
          </a>
          <a href="https://github.com/aminechteoui" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://www.linkedin.com/in/amine-chteoui-5372bb202/" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            if (lottieRef.current) {
              lottieRef.current.setSpeed(0.5);
            }
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
