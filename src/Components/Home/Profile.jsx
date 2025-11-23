import { ReactTyped } from "react-typed";
import logo from "../../assets/logo.png";
import styles from "../Styles/profile.module.css";
import { motion } from "framer-motion";
const Profile = () => {
  const TitleVar = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: "150",
      },
    },
    exit: {
      opacity: 0,
      y: -100,
    },
  };
  return (
    <div className="center">
      <motion.div
        variants={TitleVar}
        transition={{
          duration: 0.5,
        }}
        className={styles.container}
      >
        <div className={styles.img_box}>
          <img src={logo} alt="Profile Logo" />
        </div>
        <div className={styles.content}>
          <h2>Empire Tech</h2>
          <p><ReactTyped
              strings={[
                "Frontend Web Developer",
                "Frontend Mobile App Developer",
                "Website enthusiast",
                "Website Designer",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            /></p>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
