import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaCheckCircle, FaCertificate } from "react-icons/fa"
// import Aos from "aos";


const About = () => {
  // Aos.init({
  //   duration: 1100,   // Animation duration in milliseconds
  //   offset: 600,      // Offset from the original trigger point
  //   delay: 200,       // Delay before animation starts
  //   once: true        // Whether the animation should happen only once
  // });
  return (
    <section id="about" className="py-5 bg-light mb-5" style={{minHeight:"100vh"}}>
      <Container>
        <Row className="align-items-center ">
          <Col lg={5} className="mb-4 mb-lg-0" >
            <img
              src="About.png"
              alt="About"
              className="img-fluid rounded about-img"
            />
          </Col>
          <Col lg={7} >
            <h2 className="section-heading my-4">About Us</h2>
            <p className="fs-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ratione repellat, optio aspernatur obcaecati odit laboriosam nulla labore nemo numquam.
            </p>
            <p className="mb-4 fs-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut cumque incidunt praesentium impedit. Tenetur provident vitae fuga sequi fugiat aut quas, ea et laudantium. Quis quos libero rerum illo dignissimos quidem, dolore deleniti quo dicta illum cumque natus repudiandae. Deserunt libero iusto veritatis nisi beatae vitae voluptatem tempore iste ea.
            </p>

            <Row className="mb-4">
              <Col md={6}>
                <h4 className="h5 mb-3">Experience</h4>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <FaCheckCircle className="text-primary me-2" /> _+ Years in Web Development
                  </li>
                  <li className="mb-2">
                    <FaCheckCircle className="text-primary me-2" /> _+ Projects Completed
                  </li>
                  <li className="mb-2">
                    <FaCheckCircle className="text-primary me-2" /> _+ Satisfied Clients
                  </li>
                </ul>
              </Col>
              {/* <Col md={6}>
                <h4 className="h5 mb-3">Certifications</h4>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <FaCertificate className="text-primary me-2" /> AWS Certified Developer
                  </li>
                  <li className="mb-2">
                    <FaCertificate className="text-primary me-2" /> Google UX Design Professional
                  </li>
                  <li className="mb-2">
                    <FaCertificate className="text-primary me-2" /> Meta Frontend Developer
                  </li>
                </ul>
              </Col> */}
            </Row>
            <div className="row p-2 p-md-0">
                <Link to="/project-request" className="btn btn-primary col">
                Need a Project
                </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About

