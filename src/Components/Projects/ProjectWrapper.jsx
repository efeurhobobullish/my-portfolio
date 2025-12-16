import styles from "../Styles/projects.module.css";
import ProjectsCard from "./ProjectsCard";

import project_1 from "../../assets/project-1.png";
import project_2 from "../../assets/project-2.png";
import project_3 from "../../assets/project-3.png";
import project_4 from "../../assets/project-4.png";
import project_5 from "../../assets/project-5.png";
import project_6 from "../../assets/project-6.png";

const ProjectWrapper = () => {
  const projects = [
    {
      image: project_1,
      title: "Fox Properties",
      description:
        "Fox Properties is a modern real estate website I developed using Willow API, HTML, CSS, and JavaScript.",
      stack: ["HTML", "CSS", "Vanillajs", "Axios"],
      live_link: "https://foxproperties.netlify.app/",
      github: "https://github.com/Gift-Jackson/fox-properties",
    },
    {
      image: project_2,
      title: "SwiftPay",
      description:
        "SwiftPay is a fintech web app built with React and Tailwind CSS for airtime, data, bills, and crypto transactions.",
      stack: ["Reactjs", "Tailwindcss", "Axios"],
      live_link: "https://swiftpay.net.ng",
    },
    {
      image: project_3,
      title: "DevHub",
      description:
        "DevHub is a developer-focused platform using GitHub OAuth for networking and job sharing.",
      stack: ["Reactjs", "CSS", "Axios", "Zustand"],
      live_link: "https://devnet.name.ng/",
    },
    {
      image: project_4,
      title: "My Portfolio",
      description:
        "A React-based portfolio powered by Appwrite with an admin panel for managing projects.",
      stack: ["Reactjs", "CSS", "Appwrite"],
      live_link: "https://empiretech.net.ng/",
      github: "https://github.com/efeurhobobullish/my-portfolio",
    },
    {
      image: project_5,
      title: "Empire Tech VCF Generator",
      description:
        "A lightweight tool for generating downloadable VCF contact cards using pure HTML, CSS, and JavaScript.",
      stack: ["HTML", "CSS", "JavaScript"],
      live_link: "https://vcf.empiretech.net.ng/",
      github: "https://github.com/efeurhobobullish/vcf-generator",
    },
    {
      image: project_6,
      title: "Docgen – README Generator",
      description:
        "An automated README generator with templates, badges, and Markdown export.",
      stack: ["Reactjs", "Nodejs", "Tailwindcss", "Appwrite"],
      live_link: "https://docgen.empiretech.net.ng/",
      github: "https://github.com/efeurhobobullish/docgen",
    },
  ];

  return (
    <>
      <ul className={styles.lists}>
        {projects.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </ul>

      <div className={styles.center}>
        <a
          className={styles.btn}
          href="https://github.com/efeurhobobullish"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more on GitHub <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </>
  );
};

export default ProjectWrapper;