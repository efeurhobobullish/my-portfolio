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
        "Fox Properties is a modern real estate website I developed using Willow API, HTML, CSS, and JavaScript. It features comprehensive property listings, advanced search functionality, and interactive maps. The user-friendly, responsive design ensures a seamless experience, while real-time data integration offers up-to-date market insights and personalized recommendations.",
      stack: ["HTML", "CSS", "Vanillajs", "Axios"],
      live_link: "https://foxproperties.netlify.app/",
      github: "https://github.com/Gift-Jackson/fox-properties",
    },
    {
      image: project_2,
      title: "SwiftPay",
      description:
        "SwiftPay is a fintech web app I developed using React.js and Tailwind CSS, integrating multiple APIs for robust functionality. With SwiftPay, users can easily pay bills such as cable subscriptions and electricity, purchase airtime and data at competitive rates, and conduct crypto transactions efficiently.",
      stack: ["Reactjs", "Tailwindcss", "Axios"],
      live_link: "https://swiftpay.net.ng",
    },
    {
      image: project_3,
      title: "DevHub",
      description:
        "DevHub is a web app I developed using ReactJS and the Github OAuth API. It allows developers to share job postings, collaborate, and connect with other developers, making networking easier and more efficient.",
      stack: ["Reactjs", "CSS", "Axios", "Zustand"],
      live_link: "https://devnet.name.ng/",
    },
    {
      image: project_4,
      title: "My Portfolio",
      description:
        "My portfolio website, developed using React.js, features a dynamic backend powered by Appwrite. This setup allows me to easily add new projects through a dedicated admin section, ensuring my portfolio stays current and showcases my latest work effectively.",
      stack: ["Reactjs", "CSS", "Appwrite"],
      live_link: "https://empiretech.net.ng/",
      github: "https://github.com/efeurhobobullish/my-portfolio",
    },
    {
      image: project_5,
      title: "Empire Tech VCF Generator",
      description:
        "Empire Tech VCF Generator is a lightweight web tool that allows users to instantly generate personalized VCF contact cards. Built using pure HTML, CSS, and JavaScript, it supports custom contact fields, instant file downloads, and can be used on both Android and iOS, making sharing professional contact information fast and seamless.",
      stack: ["HTML", "CSS", "JavaScript"],
      live_link: "https://vcf.empiretech.net.ng/",
      github: "https://github.com/efeurhobobullish/vcf-generator",
    },

    // PROJECT 6: DOCGEN (README generator)
    {
      image: project_6,
      title: "Docgen – README Generator",
      description:
        "Docgen is an automated README generator that creates professional `README.md` files from templates and dynamic project metadata. Features include customizable sections (Overview, Installation, Usage, API, Contributing, License), badge and screenshot insertion, license selection, and one-click export/download as a Markdown file. Built to speed up project documentation and ensure consistency across repositories.",
      stack: ["Reactjs", "Nodejs", "Tailwindcss", "Appwrite"],
      live_link: "https://docgen.empiretech.net.ng/",
      github: "https://github.com/efeurhobobullish/docgen",
    },
  ];

  return (
    <>
      <ul className={styles.lists}>
        {projects.map((items, index) => (
          <ProjectsCard key={index} {...items} />
        ))}
      </ul>

      <div className="center">
        <a
          className={styles.btn}
          href="https://github.com/efeurhobobullish"
          target="_blank"
        >
          See more on GitHub <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </>
  );
};

export default ProjectWrapper;
