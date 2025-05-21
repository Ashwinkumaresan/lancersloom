import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
// import Aos from "aos";

const Hero = () => {
  // Aos.init({
  //   duration: 1000,   // Animation duration in milliseconds
  //   offset: 300,      // Offset from the original trigger point
  //   delay: 100,       // Delay before animation starts
  //   once: true        // Whether the animation should happen only once
  // });
  
  return (
    <section id="home" className="hero d-flex align-items-center" style={{minHeight:"100vh"}}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center mb-5 mt-md-0 d-block d-md-none"  >
            <div className="hero-img-container">
              <img
                src="Hero.png"
                alt="hero_img"
                className="img-fluid hero-img"
              />
            </div>
          </Col>
          <Col lg={6} >
            <h1 className="display-3 fw-bold mb-3"><span className="text-primary">Fullstack</span> Web Designing & Developement</h1>
            <p className="lead mb-4 fs-6">
              Crafting beautiful, functional websites and applications that drive business growth.
            </p>
            <div className="d-flex gap-3 row p-2 p-md-0">
              <Link to="/project-request" className="col-12 col-lg-6 btn btn-primary py-2">
                Need Projects?
              </Link>
              <a href="#portfolio" className="col btn btn-outline-dark py-2">
                View Our Work
              </a>
            </div>
          </Col>
          <Col lg={6} className="text-center mt-5 mt-md-0 d-none d-md-block"  >
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

