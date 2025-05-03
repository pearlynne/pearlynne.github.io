import React from "react";
import Body from "../../components/Body";
import { Link } from "react-router-dom";
import ProjectDetail from "../../components/ProjectDetail";

function ProjectSE03() {
  return (
    <Body title="Personal Portfolio Site - Work In Progress">
      <ProjectDetail
			title="Coming soon!"
        sections={[
          {
            heading: "Overview",
            type: "paragraph",
            content:
              "A responsive portfolio showcasing projects, resume, and skills, hosted on GitHub Pages with a custom domain.",
          },
          {
            heading: "Key Features",
            type: "paragraph",
            content:
              "Project showcase grid, image carousel, embedded Google Docs resume, clean and minimal CSS styling.",
          },
          {
            heading: "Tech Stack",
            type: "list",
            items: [
              "Frontend: Vite, React, React Router, plain CSS, GitHub Pages",
            ],
          },
          {
            heading: "Challenges & Solutions",
            type: "paragraph",
            content:
              "Mastering responsive design and fine-tuning CSS layouts; overcame by iterative testing and layout adjustments.",
          },
          {
            heading: "Future Improvements",
            type: "list",
            items: [
              "Combining Footer with Contact",
							"Smooth transition/scroll on Home page", 
            ],
          },
        ]}
      />
    </Body>
  );
}

export default ProjectSE03;
