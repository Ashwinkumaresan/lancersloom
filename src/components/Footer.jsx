import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaTwitter, FaLinkedinIn, FaGithub, FaDribbble, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer py-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h4 className="text-white mb-4">
              Lancers<span className="text-primary">Loom</span>
            </h4>
            <p className="text-white-50 mb-4">
              Freelance Web Developer & Designer specializing in creating beautiful, functional websites and
              applications.
            </p>
            <div className="social-icons">
              <a href="#" className="me-3">
                <FaTwitter />
              </a>
              <a href="#" className="me-3">
                <FaLinkedinIn />
              </a>
              <a href="#" className="me-3">
                <FaGithub />
              </a>
              <a href="#" className="me-3">
                <FaDribbble />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </Col>
          <Col md={4} lg={2} className="mb-4 mb-md-0">
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/#home">Home</Link>
              </li>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/#skills">Skills</Link>
              </li>
              <li>
                <Link to="/#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/#testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col md={4} lg={2} className="mb-4 mb-md-0">
            <h5 className="text-white mb-4">Services</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">API Developement</a>
              </li>
              <li>
                <a href="#">UI/UX Design</a>
              </li>
              <li>
                <a href="#">Lms</a>
              </li>
            </ul>
          </Col>
          <Col md={4} lg={4}>
            <h5 className="text-white mb-4">Be Free To Contact Us</h5>
            <p className="text-white-50 mb-3">Ph: +91 XXXXX XXXXX</p>
          </Col>
        </Row>
        <hr className="mt-5 mb-4 border-secondary" />
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="text-white-50 mb-0">&copy; {new Date().getFullYear()} Freelancer's. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
            <a href="#" className="text-white-50 text-decoration-none me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-white-50 text-decoration-none">
              Terms of Service
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

