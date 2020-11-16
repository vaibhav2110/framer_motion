import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./App.css";

export default function App() {
  useEffect(() => {
    async function sequence() {
      loadingTextController.start("visible");
      loadingBoxController.start("visible");
      heroTextController.start("visible");
      bgImageController.start("visible");
      leftContentController.start("visible");
      navController.start("visible");
      socialController.start("visible");
      downArrowController.start("visible");
      heroParaController.start("visible");
    }
    sequence();
  }, []);

  const loadingTextVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: [null, 1, 0],
      y: [null, 0, -20],
      transition: {
        ease: "easeInOut",
        duration: "2",
        times: [0, 0.6, 1],
      },
    },
  };

  const loadingBoxVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: [0, 1, 1],
      x: [0, 0, 500],
      transition: {
        ease: "easeInOut",
        duration: 2,
        delay: 1.1,
        times: [0.1, 0.8, 1],
      },
    },
  };

  const heroTextVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: [0, 1, 1],
      y: [0, 0, -30],
      transition: {
        ease: "easeOut",
        duration: 2.8,
        delay: 2.5,
        times: [0, 0.5, 0.8],
      },
    },
  };

  const heroParaVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 2.8,
        delay: 3,
      },
    },
  };

  const bgImageVariant = {
    initial: {
      scale: 1.6,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 1.5,
      },
    },
  };

  const leftContentVariant = {
    hidden: {
      width: "0%",
    },
    visible: {
      width: "50vw",
      transition: {
        ease: "easeInOut",
        duration: 0.7,
        delay: 3.2,
      },
    },
  };

  const navVariant = {
    hidden: {
      opacity: 0,
      y: -100,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 4,
      },
    },
  };

  const socialVariant = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 4,
      },
    },
  };

  const downArrowVariant = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 4,
      },
    },
  };

  const loadingTextController = useAnimation();
  const loadingBoxController = useAnimation();
  const heroTextController = useAnimation();
  const bgImageController = useAnimation();
  const leftContentController = useAnimation();
  const navController = useAnimation();
  const socialController = useAnimation();
  const downArrowController = useAnimation();
  const heroParaController = useAnimation();

  return (
    <div className="container">
      <motion.div
        className="nav"
        animate={navController}
        variants={navVariant}
        initial="hidden"
      >
        <h2>Startpoint</h2>
        <div className="links">
          <ul>
            <li>Homepage</li>
            <li>Pages</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="nav-btn">Call to action</div>
      </motion.div>
      <motion.div
        variants={loadingTextVariant}
        animate={loadingTextController}
        initial="hidden"
        className="loading-text"
      >
        <p>StartPoint</p>
      </motion.div>
      <div className="loading-box-wrapper">
        <motion.div
          variants={loadingBoxVariant}
          initial="hidden"
          animate={loadingBoxController}
          className="loading-box"
        ></motion.div>
      </div>
      <motion.div
        variants={heroTextVariant}
        initial="hidden"
        animate={heroTextController}
        className="hero-text"
      >
        <h2>StartPoint</h2>
        <motion.p
          variants={heroParaVariant}
          initial="hidden"
          animate={heroParaController}
        >
          Here's a sample description for the same thing thats mentioned above
        </motion.p>
      </motion.div>
      <div>
        <motion.img
          variants={bgImageVariant}
          initial="initial"
          animate={bgImageController}
          className="bg-img"
          src={require("./img/bg.jpg")}
        />
      </div>
      <motion.div
        variants={leftContentVariant}
        initial="hidden"
        animate={leftContentController}
        className="left-content"
      ></motion.div>
      <motion.div
        className="down-arrow"
        variants={downArrowVariant}
        animate={downArrowController}
        initial="hidden"
      >
        <i class="fa fa-arrow-down" aria-hidden="true"></i>
      </motion.div>
      <motion.div
        className="cookies"
        variants={downArrowVariant}
        animate={downArrowController}
        initial="hidden"
      >
        <motion.p>
          We use <span>cookies</span> to improve your experience on our site
        </motion.p>
        <div className="accept-btn">Accept</div>
      </motion.div>
      <motion.div
        className="social"
        variants={socialVariant}
        animate={socialController}
        initial="hidden"
      >
        <ul>
          <li>
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </li>
          <li>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </li>
          <li>
            <i class="fa fa-youtube" aria-hidden="true"></i>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
