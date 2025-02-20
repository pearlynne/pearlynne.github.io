import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ title, description, path }) {
  return (
    <div className="project-card">
      <Link to={path}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default ProjectCard;
