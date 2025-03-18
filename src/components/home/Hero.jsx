import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section id="home" className="hero d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content">
            <h1 className="display-4 fw-bold mb-3">Freelance Web Developement & Designing</h1>
            <p className="lead mb-4">
              Crafting beautiful, functional websites and applications that drive business growth.
            </p>
            <div className="d-flex gap-3">
              <Link to="/project-request" className="btn btn-primary py-2">
                Need Projects?
              </Link>
              <a href="#portfolio" className="btn btn-outline-dark py-2">
                View Our Work
              </a>
            </div>
          </Col>
          <Col lg={6} className="text-center mt-5 mt-md-0">
            <div className="hero-img-container">
              <img
                src="Hero.png"
                alt="hero_img"
                className="img-fluid hero-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

