import PropTypes from "prop-types";
import styles from "../Styles/projects.module.css";
import { motion } from "framer-motion";

const ProjectsCard = ({
  image,
  title,
  description,
  stack,
  live_link,
  github,
}) => {
  return (
    <motion.li
      className={styles.item}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <img src={image} alt={title} />

      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>

        <ul>
          {stack.map((tech, index) => (
            <li key={index}>#{tech}</li>
          ))}
        </ul>
      </div>

      <div className={styles.btns}>
        {live_link && (
          <a
            href={live_link}
            className={styles.btn_1}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        )}

        {github && (
          <a
            href={github}
            className={styles.btn_2}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <i className="fa-brands fa-github"></i>
          </a>
        )}
      </div>
    </motion.li>
  );
};

ProjectsCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  live_link: PropTypes.string,
  github: PropTypes.string,
};

export default ProjectsCard;