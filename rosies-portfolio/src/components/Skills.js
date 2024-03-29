import { Container,Col,Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/per1.svg";
import meter2 from "../assets/img/soft.svg";
import meter3 from "../assets/img/per3.svg";
import colorSharp from "../assets/img/banner-bg.png"

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>My skill sets lie within the following categories</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider"> 

                        <div className="item">
                            <img src={meter3} alt="Image1"/>
                            <h5>Web Development</h5>
                        </div>

                        <div className="item">
                            <img src={meter1} alt="Image1"/>
                            <h5>Software Development</h5>
                        </div>

                        <div className="item">
                            <img src={meter1} alt="Image2"/>
                            <h5>UX/UI Design & Development</h5>
                        </div>

                        <div className="item">
                            <img src={meter1} alt="Image1"/>
                            <h5>SQL</h5>
                        </div>

                        <div className="item">
                            <img src={meter2} alt="Image1"/>
                            <h5>R</h5>
                        </div>

                        <div className="item">
                            <img src={meter1} alt="Image1"/>
                            <h5>C#</h5>
                        </div>

                        <div className="item">
                            <img src={meter1} alt="Image1"/>
                            <h5>Typescript</h5>
                        </div>

                        <div className="item">
                            <img src={meter2} alt="Image1"/>
                            <h5>Javascript</h5>
                        </div>

                        <div className="item">
                            <img src={meter1} alt="Image1"/>
                            <h5>Outsystems</h5>
                        </div>


                        <div className="item">
                            <img src={meter2} alt="Image1"/>
                            <h5>Agile Methodologies</h5>
                        </div>

                        <div className="item">
                            <img src={meter1} alt="Image3"/>
                            <h5>Data Analysis</h5>
                        </div>
                        
                        </Carousel>

                    </div>
                    </Col>
                </Row>
            </Container>

        </section>
      )
}