import React from "react";
import Body from "../../components/Body";
import { Link } from "react-router-dom";
import ProjectDetail from "../../components/ProjectDetail";

function ProjectDS05() {
  return (
    <Body title="Webscraping prices for Jewelry - Work In Progress">
     <ProjectDetail
					title="Coming soon!"
					sections={[
						{
							heading: "Overview",
							type: "paragraph",
							content:
								"Creating a pricing calculator after scraping the web for updated precious metal prices",
						},]}
					/>
    </Body>
  );
}

export default ProjectDS05;
