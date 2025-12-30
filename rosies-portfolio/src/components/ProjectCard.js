import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col md={6} className="project-card">
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-link"
      >
        <div className="project-card-inner">
          <div className="project-image">
            <img src={imgUrl} alt={title} />
          </div>

          <div className="project-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="project-cta">View project →</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
