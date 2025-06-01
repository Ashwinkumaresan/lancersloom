import { Container, Row, Col } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Hero = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 3000,  // animation duration in ms
      once: true       // whether animation should happen only once
    });
  }, []);

  return (
    <section id="home" className="p-10 mt-5" >
      <div className="container">
        <div className="row">
          <h1 className="display-1 text-center fw-bold" data-aos="fade-up">Make sure your profession is updated with the current technology</h1>
          <div className="text-center">
            <button onClick={() => navigate("/project-request")} className="btn btn-light mx-2 px-4 py-2" data-aos="fade-up">Request a project</button>
            <button className="btn btn-outline-light mx-2 px-4 py-2" data-aos="fade-up">View our work</button>
          </div>
            <img src="/Hero.svg" data-aos="fade-up" className="img-fluid" alt="Hero" />
        </div>
      </div>
      {/* offers */}
      <div className="container mt-5 px-5 position-relative offer-div"  data-aos="fade-up">
        <img src="/design_1.svg" className="img-fluid position-absolute bottom-0" alt="" />
        <img src="/design_1.svg" className="img-fluid position-absolute start-0 top-0" alt="" />
        <div className="row  border offer rounded text-white">
          <div className="col-12 col-md-5">
            <img src="/Offers.svg" className="img-fluid ms-md-5" alt="Offers" data-aos="fade-up"/>
          </div>
          <div className="col-12 col-md-6 p-3 p-md-5">
            <p className="display-6 m-0 text-white fw-bold" data-aos="fade-up">Get a Demo💪</p>
            <p className="display-6 m-0 text-white fw-bold " data-aos="fade-up">Build a Landing Page</p>
            <p className="m-0 mt-2" style={{ color: "#A0A0A0" }} data-aos="fade-up"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a excepturi odio eius debitis placeat, ullam aperiam facilis in sint.</p>
            <div className="mt-3">
              <p className="m-0 text-white fw-bold" data-aos="fade-up">Provide us with your email</p>
              <form action="#" className="d-flex border rounded p-2" data-aos="fade-up">
                <input type="text" className="w-100 email_input" placeholder="youremail@gmail.com" required />
                <button className="btn btn-primary px-4 py-1">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

