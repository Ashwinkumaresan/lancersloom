import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in ms
      once: true       // whether animation should happen only once
    });
  }, []);
  return (
    <section id="skills" className="p-10">
      {/* <Container>
        <Row className="text-center my-5">
          <Col lg={8} className="mx-auto">
            <h2 className="section-heading">Skills</h2>
            <p className="text-muted">Specialized in modern web technologies and design principles</p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <div className="skill-card">
              <div className="skill-icon">
                <FaReact />
              </div>
              <h3>Frontend Development</h3>
              <div className="skill-tags">
                <Badge bg="primary" className="me-2 mb-2 py-2 px-3 fw-bold">
                  ReactJS
                </Badge>
                <Badge bg="primary" className="me-2 mb-2 py-2 px-3 fw-bold">
                  JavaScript
                </Badge>
                <Badge bg="primary" className="me-2 mb-2 py-2 px-3 fw-bold">
                  HTML5/CSS3
                </Badge>
                <Badge bg="primary" className="me-2 mb-2 py-2 px-3 fw-bold">
                  Bootstrap CSS
                </Badge>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="skill-card">
              <div className="skill-icon">
                <FaServer />
              </div>
              <h3>Backend Development</h3>
              <div className="skill-tags">
                <Badge bg="primary" className="me-2 mb-2 py-2 px-3 fw-bold">
                  Python
                </Badge>
                <Badge bg="primary" className="me-2 mb-2 py-2 px-3 fw-bold">
                  SQL
                </Badge>
                <Badge bg="primary" className="me-2 mb-2 py-2 px-3 fw-bold">
                  Django
                </Badge>
                <Badge bg="primary" className="me-2 mb-2 py-2 px-3 fw-bold">
                  Django REST Framework API
                </Badge>
                <Badge bg="primary" className="me-2 mb-2 py-2 px-3 fw-bold">
                  API Developement
                </Badge>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="skill-card">
              <div className="skill-icon">
                <FaPaintBrush />
              </div>
              <h3>Design</h3>
              <div className="skill-tags">
                <Badge bg="primary" className="me-2 mb-2 py-2 px-3 fw-bold">
                  UI/UX Design
                </Badge>
                <Badge bg="primary" className="me-2 mb-2 py-2 px-3 fw-bold">
                  Figma
                </Badge>
                <Badge bg="primary" className="me-2 mb-2 py-2 px-3 fw-bold">
                  Logo
                </Badge>
                <Badge bg="primary" className="me-2 mb-2 py-2 px-3 fw-bold">
                  Canva
                </Badge>
                <Badge bg="primary" className="me-2 mb-2 py-2 px-3 fw-bold">
                  ibis paint 
                </Badge>
              </div>
            </div>
          </Col>
        </Row>
      </Container> */}
      {/* Skills */}
      <Container
      >
        <h2 className="display-1 fw-bold text-center" data-aos="fade-up">The area's where we are</h2>
        <div className="text-center py-4 d-flex align-items-center justify-content-center gap-4 flex-wrap position-relative" >
          <img src="/skills_bg.png" className="img-fluid position-absolute" alt="" style={{ zIndex: "-1" }} />
          <div className="text-center py-4 d-flex align-items-center justify-content-center gap-4 flex-wrap position-relative" >
            <h2 className="fw-light border rounded fs-5 py-2 px-4 badge_hover" data-aos="fade-up">UI/UX</h2>
            <h2 className="fw-light border rounded fs-5 py-2 px-4 badge_hover" data-aos="fade-up">Figma</h2>
            <h2 className="fw-light border rounded fs-5 py-2 px-4 badge_hover" data-aos="fade-up">Logo/Posters</h2>
            <h2 className="fw-light border rounded fs-5 py-2 px-4 badge_hover" data-aos="fade-up">Html5/Css3</h2>
            <h2 className="fw-light border rounded fs-5 py-2 px-4 badge_hover" data-aos="fade-up">JS</h2>
            <h2 className="fw-light border rounded fs-5 py-2 px-4 badge_hover" data-aos="fade-up">Bootstrap Css</h2>
            <h2 className="fw-light border rounded fs-5 py-2 px-4 badge_hover" data-aos="fade-up">ReactJS</h2>
            <h2 className="fw-light border rounded fs-5 py-2 px-4 badge_hover" data-aos="fade-up">Python</h2>
            <h2 className="fw-light border rounded fs-5 py-2 px-4 badge_hover" data-aos="fade-up">Flask</h2>
            <h2 className="fw-light border rounded fs-5 py-2 px-4 badge_hover" data-aos="fade-up">MangoDB</h2>
            <h2 className="fw-light border rounded fs-5 py-2 px-4 badge_hover" data-aos="fade-up">SQL</h2>
            <h2 className="fw-light border rounded fs-5 py-2 px-4 badge_hover" data-aos="fade-up">Django</h2>
            <h2 className="fw-light border rounded fs-5 py-2 px-4 badge_hover" data-aos="fade-up">Django REST API</h2>
            <h2 className="fw-light border rounded fs-5 py-2 px-4 badge_hover" data-aos="fade-up">API Developement</h2>
          </div>
        </div>

      </Container>
      <Container>
        <h2 className="display-1 fw-bold mt-5 text-center" data-aos="fade-up">Unlimited options give you the ultimate flexibility</h2>

        <Row className="g-4 my-3">
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}  >
            <Card className="shadow-sm p-4" data-aos="fade-up">
              <Card.Body className="d-flex gap-2">
                <Card.Title className="d-flex align-items-center gap-2">
                  <img src="/Icon_tick.png" alt="" data-aos="fade-up"/>
                </Card.Title>
                <Card.Text className="text-muted fs-14">
                  <span className="text-dark fw-bold" data-aos="fade-up">Unlimited Components:</span> Clarity gives you the blocks & components you need to create a website.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}  >
            <Card className="shadow-sm p-4" data-aos="fade-up">
              <Card.Body className="d-flex gap-2">
                <Card.Title className="d-flex align-items-center gap-2">
                  <img src="/Icon_tick.png" alt="" data-aos="fade-up" />
                </Card.Title>
                <Card.Text className="text-muted fs-14">
                  <span className="text-dark fw-bold" data-aos="fade-up">Build Website:</span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}  >
            <Card className="shadow-sm p-4" data-aos="fade-up">
              <Card.Body className="d-flex gap-2">
                <Card.Title className="d-flex align-items-center gap-2">
                  <img src="/Icon_tick.png" alt="" data-aos="fade-up" />
                </Card.Title>
                <Card.Text className="text-muted fs-14">
                  <span className="text-dark fw-bold" data-aos="fade-up">Easy Analytics:</span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}  >
            <Card className="shadow-sm p-4" data-aos="fade-up">
              <Card.Body className="d-flex gap-2">
                <Card.Title className="d-flex align-items-center gap-2">
                  <img src="/Icon_tick.png" alt="" data-aos="fade-up" />
                </Card.Title>
                <Card.Text className="text-muted fs-14">
                  <span className="text-dark fw-bold" data-aos="fade-up">Release Fast:</span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default Skills

