import { useState, useEffect, useRef } from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import "./Navbar.css"

const ModernNavbar = () => {
  const [expanded, setExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [state, setState] = useState(true)
  const [profileSvg, setProfileSvg] = useState(false)
  const navbarRef = useRef(null)

  // // To stop scrolling while popup open index-168
  // if (openPopup) {
  //   document.body.classList.add('active_modal');
  // }
  // else {
  //   document.body.classList.remove('active_modal');
  // }

  // To scroll to top when order button triggers
  // function Scroll() {
  //   window.scrollTo(0, 0);
  // }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && expanded) {
        setExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [expanded])

  // Close navbar when menu item is clicked in mobile view
  const handleNavItemClick = () => {
    if (window.innerWidth < 992) {
      setExpanded(false)
    }
  }
  useEffect(() => {
    if (localStorage.getItem("access_token") || localStorage.getItem("access_token_staff")) {
      setState(false);
      setProfileSvg(true);
    }
    if (localStorage.getItem("access_token")) {
      setProfile(true);
    }
    if (localStorage.getItem("access_token_staff")) {
      setStaffProfile(true);
    }
  }, [])

  return (
    <>
      <Navbar
        ref={navbarRef}
        expand="lg"
        expanded={expanded}
        className={`modern-navbar ${scrolled ? "scrolled" : ""} m-0 p-0`}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/" className="brand">
            <div className="d-flex align-items-center">
              <img src="logo.svg" alt="" style={{
                width: "55px", height: "55px", objectFit: "contain"
              }} />
              <div>
                <p className="m-0 p-0 fw-bold">Lancers<span className="text-primary">Loom</span></p>
                <span className="m-0 p-0 d-block fs-12">Be Straight and Professional</span>
              </div>
            </div>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <div className="login-button-container d-lg-none">
              {profileSvg &&
                <Link to="/login" onClick={() => {
                  window.location.reload();
                }}>
                  <Link to="/profile">
                    <button className="btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#000000" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
                    </button>
                  </Link>
                </Link>
              }
              {state && <Link to="/login" className='btn btn-primary text-white ms-lg-3 px-4 fs-12'>Login</Link>}
            </div>

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(!expanded)}
              className="custom-toggler"
            >
              <div className={`hamburger ${expanded ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Navbar.Toggle>
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            <Nav className="mx-auto">
              <a href="/" onClick={handleNavItemClick} className="nav-link fs-14">
                Home
              </a>
              <a href="#about" onClick={handleNavItemClick} className="nav-link fs-14">
                About
              </a>
              <a href="#skills" onClick={handleNavItemClick} className="nav-link fs-14">
                Skills
              </a>
              <a href="#portfolio" onClick={handleNavItemClick} className="nav-link fs-14">
                Portfolio
              </a>
              <a href="#testimonials" onClick={handleNavItemClick} className="nav-link fs-14">
                Testimonials
              </a>
              <a href="#contact" onClick={handleNavItemClick} className="nav-link fs-14">
                Contact
              </a>
            </Nav>

            <div className="d-none d-lg-block">
              {state && <Link to="/login" className='btn btn-primary text-white ms-lg-3 px-4' style={{ fontSize: "12px" }}>Login</Link>}
              {profileSvg &&
                <Link to="/login" onClick={() => {
                  window.location.reload();
                }}>
                  <Link to="/profile">
                    <button className="btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#000000" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
                    </button>
                  </Link>
                </Link>
              }
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default ModernNavbar

