import { Container, Row, Col } from "react-bootstrap";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <h2 className="section-title">Where I’ve worked</h2>

        {/* ===== Anglo American ===== */}
        <Row className="experience-item">
          <Col md={4} className="experience-left">
            <h4>Anglo American</h4>
            <h5 className="experience-role">Software Developer</h5>
            <p className="experience-location">South Africa</p>
            <span className="experience-date">2023 — Present</span>
          </Col>

          <Col md={8} className="experience-right">
            <ul>
              <li>
                Built and maintained internal web applications using
                <strong> ASP.NET Core, JavaScript, and SQL</strong>.
              </li>
              <li>
                Worked on risk-management and compliance systems used across
                multiple business units.
              </li>
              <li>
                Integrated frontend interfaces with backend APIs and Azure
                Logic Apps.
              </li>
              <li>
                Collaborated in Agile teams and participated in code reviews
                and production deployments.
              </li>
            </ul>

            <div className="experience-tech">
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">Azure Logic Apps</span>
              <span className="tech-pill">Html & Css </span>
              <span className="tech-pill">ASP.NET Core</span>
              <span className="tech-pill">SQL</span>
            </div>

          </Col>
        </Row> <br/>

        {/* ===== Moyo ===== */}
        <Row className="experience-item">
          <Col md={4} className="experience-left">
            <h4>Anglo American</h4>
            <h5 className="experience-role">Junior Consultant (Software Development)</h5>
            <p className="experience-location">South Africa</p>
            <span className="experience-date">2023 — Present</span>
          </Col>

          <Col md={8} className="experience-right">
            <ul>
              <li>
                Built and maintained internal web applications using
                <strong> ASP.NET Core, JavaScript, and SQL</strong>.
              </li>
              <li>
                Worked on risk-management and compliance systems used across
                multiple business units.
              </li>
              <li>
                Integrated frontend interfaces with backend APIs and Azure
                Logic Apps.
              </li>
              <li>
                Collaborated in Agile teams and participated in code reviews
                and production deployments.
              </li>
            </ul>

            <div className="experience-tech">
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">Azure Logic Apps</span>
              <span className="tech-pill">Html & Css </span>
              <span className="tech-pill">ASP.NET Core</span>
              <span className="tech-pill">SQL</span>
            </div>

          </Col>
        </Row> <br/>

        {/* ===== JustSolve ===== */}
        <Row className="experience-item">
          <Col md={4} className="experience-left">
            <h4>JustSolve</h4>
            <h5 className="experience-role">Software Developer Intern</h5>
            <p className="experience-location">Remote · South Africa</p>
            <span className="experience-date">Jan 2023 — Oct 2023</span>
          </Col>

          <Col md={8} className="experience-right">
            <ul>
              <li>
                Developed features using <strong>C# and JavaScript</strong> in
                a production environment.
              </li>
              <li>
                Assisted in debugging, testing, and improving existing
                applications.
              </li>
              <li>
                Worked closely with senior developers to understand real-world
                software delivery.
              </li>
            </ul>

            <div className="experience-tech">
              <span className="tech-pill">C#</span>
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">.NET</span>
              <span className="tech-pill">Outsystems</span>
            </div>
          </Col>
        </Row>

        {/* ===== Sand Dollar Design ===== */}
        <Row className="experience-item">
          <Col md={4} className="experience-left">
            <h4>Sand Dollar Design</h4>
            <h5 className="experience-role">UX/UI Design Intern</h5>
            <p className="experience-location">Gauteng, South Africa</p>
            <span className="experience-date">Sep 2022 — Nov 2022</span>
          </Col>

          <Col md={8} className="experience-right">
            <ul>
              <li>
                Conducted UX research and assisted in designing user-centred
                interfaces.
              </li>
              <li>
                Collaborated with designers and strategists on real client
                projects.
              </li>
              <li>
                Gained hands-on experience in usability testing and design
                thinking processes.
              </li>
            </ul>

            <div className="experience-tech">
              <span className="tech-pill">UX Research</span>
              <span className="tech-pill">UI Design</span>
              <span className="tech-pill">Figma</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
