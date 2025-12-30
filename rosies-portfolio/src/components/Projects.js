import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Happy.png";
import projImg2 from "../assets/img/car.png";
import projImg3 from "../assets/img/level.png";
import projImg4 from "../assets/img/Freecode.png";
import projImg5 from "../assets/img/pac.png";
import TrackVisibility from 'react-on-screen';


export const  Projects = () =>{

  

    /*Array to call all my projects*/
    const projects = [
        {
          title: "Happy Feast Website, POS & Inventory",
          description: "Design & Development",
          imgUrl: projImg1,
          linkUrl: "https://www.youtube.com/watch?v=mLOmuH0Pcbo",
        },
        {
          title: "BMW ITHub Supercar Analysis Project",
          description: "Data Analysis",
          imgUrl: projImg2,
          linkUrl: "https://drive.google.com/file/d/14WZlbl5nP4nwy7aGxWPqkaWBMLIC7V-a/view?usp=sharing",
        },
        {
          title: "Level UP Startup",
          description: "Design",
          imgUrl: projImg3,
          linkUrl: "https://www.figma.com/proto/LA1q3i6sGamepjv6rp3iuz/Level-Up-Wireframes?node-id=33%3A1527&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=33%3A1527",
        },
        {
          title: "Pacman",
          description: "Development",
          imgUrl: projImg5,
          linkUrl: "https://github.com/RoseIyera/Rosie-Pacman",
        },
       
      ];

      return (
        <section className="projects" id="projects">
          <Container>
            <h2 className="section-title">Some things I’ve built</h2>

            <Row>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
          </Container>
        </section>

      )
}