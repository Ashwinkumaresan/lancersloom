import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top" 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      style={{backdropFilter:("blur(8px)"),
        background:"transparent",
      }}
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="fw-bold">
          Free<span className="text-primary">lancer's</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <a href="/" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#portfolio" class="nav-link">Portfolio</a>
            <a href="#testimonials" class="nav-link">Testimonials</a>
            <a href="#contact" class="nav-link">Contact</a>
            <a href="/login">
            <button className='btn btn-primary text-white ms-lg-3 px-4'>Login</button></a>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
