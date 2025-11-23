import styles from "../Styles/hero.module.css";
import { data } from "../../Constants/data";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3>
            <i className="fa-regular fa-address-card"></i>&nbsp; Profile
          </h3>
          <p>
            I like to craft solid and scalable frontend products with great user
            experiences and dynamic functionalities from the backend if i&apos;m
            prompted to.😇
          </p>
          <div className={styles.btns}>
            <a href="https://drive.google.com/file/d/1iPY0AZ0pZzZEp0r2FaXGNldfN2deJsOl/view?usp=sharing" target="_blank" download>
              <button className={styles.btn_2}>
                <i className="fa-solid fa-file-pdf"></i> &nbsp; View CV
              </button>
            </a>

            <a href="https://github.com/efeurhobobullish" target="_blank">
              <button className={styles.btn_1}>
                <span>See Github</span> &nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </a>
          </div>
        </div>
        <div className={styles.wrapper}>
          <ul>
            {data.map((item, index) => (
              <motion.li className={styles.item} key={index}>
                <div>{item.count}</div>
                <div>{item.title} </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
