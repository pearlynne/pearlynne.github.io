import React from "react";
import Body from "../components/Body";
import ProjectCard from "../components/ProjectCard";

import DS01 from "@/assets/DS01_EACSF_1.png";
import GS from "@/assets/DS02_GS_1.jpeg";
import E4 from "@/assets/DS03_E4_1.png";
import SleepCons from "@/assets/DS04_SleepCons.png";
import Webscrape from "@/assets/DS05_Webscrape.png";

import ToDo from "@/assets/SE01_To-do-list.png";
import HealthAPI from "@/assets/SE02_HealthAPI_4.png";
import Ecommerce from "@/assets/SE03_Ecommerce.png";
import PortfolioImg from "@/assets/SE04_Portfolio.png";

const projects = {
  data: [
    {
      title: "EA-CSF and Sleep",
      description: "Latent growth curve modeling on neuroimaging data.",
      image: DS01,
      path: "/projects/EACSF",
    },
    {
      title: "Glymphatic System",
      description: "Correlation analysis of sleep, CSF, glymphatic system.",
      image: GS,
      path: "/projects/GS",
    },
    {
      title: "E4 Data",
      description: "Time-series EDA and feature extraction on health data in children.",
      image: E4,
      path: "/projects/E4",
    },
    {
      title: "Developing a Sleep Construct",
      description: "Latent growth modeling of childhood sleep trajectories",
      image: SleepCons,
      path: "/projects/SleepConstruct",
    },
    {
      title: "Webscraping Metal Prices (In progress)",
      description: "Pricing calculator",
      image: Webscrape,
      path: "/projects/WebscrapePrice",
    },
  ],
  software: [
    {
      title: "To-Do App",
      description: "JavaScript to-do app with local storage rewards.",
      image: ToDo,
      path: "/projects/ToDoList",
    },
    {
      title: "Health Tracking App",
      description: "Express API for mental health tracking platform.",
      image: HealthAPI,
      path: "/projects/HealthTracking",
    },
    {
      title: "E-commerce",
      description: "React and Firebase e-commerce storefront app.",
      image: Ecommerce,
      path: "/projects/Ecommerce",
    },
    {
      title: "Portfolio",
      description: "Interactive portfolio for resume and projects.",
      image: PortfolioImg,
      path: "/projects/Portfolio",
    },
  ],
};


const Portfolio = () => {
  return (
    <Body title="Projects">
			<div className="portfolio-container">
				<div className="projects-grid">
					<div>
						<div className="subheading">Data</div>
						<div className="projects-column">
							{projects.data.map((project, index) => (
								<ProjectCard key={index} {...project} />
							))}
						</div>
					</div>
					<div>
						<div className="subheading">Software</div>
						<div className="projects-column">
							{projects.software.map((project, index) => (
								<ProjectCard key={index} {...project} />
							))}
						</div>
					</div>
				</div>
			</div>
		</Body>
  );
};

export default Portfolio;
