import { Container, Row, Col, Card } from "react-bootstrap";
import { FaReact, FaServer, FaPaintBrush } from "react-icons/fa"

const Skills = () => {
  return (
    <section id="skills" className="py-5">
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
      <Container className="my-5" style={{
  backgroundImage: 'url("/skills_bg.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
}}
>
        <h2 className="display-5 text-center">The area's where we are</h2>
        <div className="text-center py-4 m-5 d-flex align-items-center justify-content-center gap-4 flex-wrap" >
        <h2>UI/UX</h2>
        <h2>Figma</h2>
        <h2>Logo/Posters</h2>
        <h2>Html5/Css3</h2>
        <h2>JS</h2>
        <h2>Bootstrap Css</h2>
        <h2>ReactJS</h2>
        <h2>Python</h2>
        <h2>Flask</h2>
        <h2>MangoDB</h2>
        <h2>SQL</h2>
        <h2>Django</h2>
        <h2>Django REST API</h2>
        <h2>API Developement</h2>
        </div>

      </Container>
      <Container className="mt-5 py-5">
        <h2 className="display-5 text-center">Unlimited options give you the ultimate flexibility</h2>

        <Row className="g-4 my-3">
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}  >
            <Card className="shadow-sm p-4">
              <Card.Body className="d-flex gap-2">
                <Card.Title className="d-flex align-items-center gap-2">
                  <img src="/Icon_tick.png" alt="" />
                </Card.Title>
                <Card.Text className="text-muted fs-14">
                  <span className="text-dark fw-bold">Unlimited Components:</span> Clarity gives you the blocks & components you need to create a website.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}  >
            <Card className="shadow-sm p-4">
              <Card.Body className="d-flex gap-2">
                <Card.Title className="d-flex align-items-center gap-2">
                  <img src="/Icon_tick.png" alt="" />
                </Card.Title>
                <Card.Text className="text-muted fs-14">
                  <span className="text-dark fw-bold">Build Website:</span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}  >
            <Card className="shadow-sm p-4">
              <Card.Body className="d-flex gap-2">
                <Card.Title className="d-flex align-items-center gap-2">
                  <img src="/Icon_tick.png" alt="" />
                </Card.Title>
                <Card.Text className="text-muted fs-14">
                  <span className="text-dark fw-bold">Easy Analytics:</span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}  >
            <Card className="shadow-sm p-4">
              <Card.Body className="d-flex gap-2">
                <Card.Title className="d-flex align-items-center gap-2">
                  <img src="/Icon_tick.png" alt="" />
                </Card.Title>
                <Card.Text className="text-muted fs-14">
                  <span className="text-dark fw-bold">Release Fast:</span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
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

