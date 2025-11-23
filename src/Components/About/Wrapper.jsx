import styles from "../Styles/wrapper.module.css";
import html from "../../assets/html.png";
import tailwind from "../../assets/Tailwind_CSS_Logo.svg.png";
import css from "../../assets/css.png";
import javascript from "../../assets/js.png";
import react from "../../assets/atom.png";
import node from "../../assets/nodejs.svg";
import figma from "../../assets/figma.png";
import appwrite from "../../assets/appwrite.png";
import firebase from "../../assets/firebase.png";
import ts from "../../assets/ts.png"
import vs from "../../assets/Visual_Studio_Code_1.35_icon.svg.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Wrapper = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3>
            <i className="fa-solid fa-code"></i>&nbsp; The Gist
          </h3>
          <p>
            Hello, I&apos;m Empire Tech, a passionate and dedicated Frontend
            Developer with over 2 years of experience. With a strong foundation
            in HTML, CSS, and JavaScript, I specialize in creating dynamic and
            responsive web applications. <br /> <br /> My expertise extends to
            modern technologies and frameworks, ensuring that I can deliver
            cutting-edge solutions that meet the needs of today&apos;s digital
            landscape. I&apos;m currently learning Nextjs with best practices.🤧
          </p>

          <p className={styles.edu}>Education: B.Tech. in Petroleum Engineering</p>

          <Link to="/contacts">
            <button className={styles.btn}>
              Let&apos;s Connect &nbsp;{" "}
              <i className="fa-solid fa-people-arrows"></i>
            </button>
          </Link>
        </div>

        <div className={styles.wrapper}>
          <h3>
            <i className="fa-brands fa-stack-overflow"></i> &nbsp;Skills, Stack
            & Softwares
          </h3>
          <div className={styles.grid}>
            <div>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={html}
                height={50}
                alt="html logo"
              />
              <p>HTML5</p>
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={css}
                height={50}
                alt="css logo"
              />
              <p>CSS3</p>
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={javascript}
                height={50}
                alt="javascript logo"
              />
              <p>JavaScript </p>
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={react}
                height={50}
                alt="react logo"
              />
              <p>Reactjs</p>
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={ts}
                height={50}
                alt="TypeScript logo"
              />
              <p>TypeScript</p>
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={tailwind}
                height={40}
                alt="tailwind logo"
              />
              <p>TailwindCSS</p>
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={node}
                height={50}
                alt="Nodejs logo"
              />
              <p>Nodejs</p>
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={vs}
                height={50}
                alt="vs code logo"
              />
              <p>VS Code</p>
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={figma}
                height={50}
                alt="Figma logo"
              />
              <p>Figma</p>
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={appwrite}
                height={50}
                alt="AppWrite logo"
              />
              <p>AppWrite</p>
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={firebase}
                height={50}
                alt="Firebase logo"
              />
              <p>Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
