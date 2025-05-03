import PropTypes from "prop-types";
import ImageCarousel from "./ImageCarousel";

const ProjectDetail = ({ cite, sections, images, video }) => (
  <div className="project-detail">
    <div className="left-column">
      {cite && <div className="project-citation">{cite}</div>}
      {sections.map((section, i) => (
        <div key={i}>
          <div className="subheading">{section.heading}</div>
          {section.type === "list" ? (
            <ul>
              {section.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{section.content}</p>
          )}
        </div>
      ))}
    </div>

    <div className="right-column">
      {video && (
        <div className="video-wrapper">
          <video width="600" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {images && images.length > 0 && <ImageCarousel images={images} />}
    </div>
  </div>
);

ProjectDetail.propTypes = {
  cite: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["text", "list"]).isRequired,
      content: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.string),  
    })
  ).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      caption: PropTypes.string,
    })
  ),
  video: PropTypes.string,  
};


export default ProjectDetail;
