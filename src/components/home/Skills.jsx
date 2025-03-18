import { Container, Row, Col, Badge } from "react-bootstrap"
import { FaReact, FaServer, FaPaintBrush } from "react-icons/fa"

const Skills = () => {
  return (
    <section id="skills" className="py-5 mb-5">
      <Container>
        <Row className="text-center mb-5">
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
      </Container>
    </section>
  )
}

export default Skills

