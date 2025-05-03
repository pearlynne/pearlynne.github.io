import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function ProjectCard({ title, description, image, path }) {
  return (
    <div className="project-card">
      <Link to={path}>
        <img src={image} alt={title} />
        <div className="overlay">
          <div
            className="subheading"
            style={{
              color: "white",
            }}
          >
            {title}
          </div>
          <p
            style={{
              color: "white",
            }}
          >
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};