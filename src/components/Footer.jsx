import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedinIn, FaGithub, FaDribbble, FaInstagram, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <footer className="footer py-5" ref={footerRef}>
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h4 className="text-white mb-4">
              Lancers<span className="text-primary">Loom</span>
            </h4>
            <p className="text-white-50 mb-4">
              <strong>Lancersloom</strong> Web Developer & Designer specializing in creating beautiful, functional websites and
              applications.
            </p>
            <div className="social-icons">
              {/* <a href="#" className="me-3">
                <FaTwitter />
              </a> */}
              <a href="https://www.linkedin.com/in/lancersloom-lancersloom-134b33371/" className="me-3">
                <FaLinkedinIn />
              </a>
              {/* <a href="#" className="me-3">
                <FaGithub />
              </a> */}
              <a href="https://wa.me/916374766864" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/lancersloom/" target="_blank" className="me-3">
                <FaInstagram />
              </a>
              <a href="mailto:lancersloom2025@gmail.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaMailBulk />
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
              {/* <li>
                <Link to="/#testimonials">Testimonials</Link>
              </li> */}
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col md={4} lg={2} className="mb-4 mb-md-0">
            <h5 className="text-white mb-4">Services</h5>
            <ul className="list-unstyled footer-links">
              <li>
                Landing Page
              </li>
              <li>
                API Development
              </li>
              <li>
                Web Development
              </li>
              <li>
                Web Management
              </li>
              <li>
                UI/UX Design
              </li>
            </ul>
          </Col>
          <Col md={4} lg={4}>
            <h5 className="text-white mb-4">Be Free To Contact Us</h5>
            <p className="text-white-50 mb-3">
              <a href="tel:+916374766864" className="text-white-50 text-decoration-none">
                📞 +91 63747 66864
              </a>
            </p>
            <p className="text-white-50 mb-3">
              <a href="tel:+919345857852" className="text-white-50 text-decoration-none">
                📞 +91 93458 57852
              </a>
            </p>
          </Col>
        </Row>
        <hr className="mt-5 mb-4 border-secondary" />
        <Row className="align-items-center">
          <Col className="text-center">
            <p className="text-white-50 mb-0">&copy; {new Date().getFullYear()} Lancersloom. All rights reserved.</p>
          </Col>
          {/* <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
            <a href="#" className="text-white-50 text-decoration-none me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-white-50 text-decoration-none">
              Terms of Service
            </a>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
