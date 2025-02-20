import React from 'react';
import Body from '../components/Body';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  return (
    <Body title="My Projects">
      <div className="portfolio">
          <h2>Data </h2>
          <h2>Software </h2>
</div>
      <div className="portfolio">
				<div className="project-container">
          <ProjectCard title="EA-CSF" description="Description for project D1" path="/projects/EACSF"/>
          <ProjectCard title="Glymphatic System" description="Description for project D2" path="/projects/GS"/>
          <ProjectCard title="E4" description="Description for project D3" path="/projects/E4"/>
          <ProjectCard title="Sleep Construct" description="Description for project D4" path="/projects/SleepConstruct"/>
        </div>
				<div className="project-container">
          <ProjectCard title="To Do List" description="Description for project SE1" path="/projects/ToDoList"/>
          <ProjectCard title="Health Tracking" description="Description for project SE2" path="/projects/HealthTracking"/>
          <ProjectCard title="E-commerce" description="Description for project SE3" path="/projects/Ecommerce"/>
        </div>
      </div>
    </Body>
  );
}

export default Portfolio;
