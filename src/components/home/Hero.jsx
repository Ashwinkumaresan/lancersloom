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
    <section id="home" className="hero" >
      <div className="container" style={{ minHeight: "80vh" }}>
        <div className="row">
          <h1 className="display-3 text-center fw-bold">Make sure your profession is updated with the current technology</h1>
          <div className="text-center">
            <button className="btn btn-light mx-2 px-4 py-2">Request a project</button>
            <button className="btn btn-outline-light mx-2 px-4 py-2">View our work</button>
            <img src="/Hero.svg" className="img-fluid" alt="Hero" />
          </div>
        </div>
      </div>
      {/* offers */}
      <div className="container px-5">
        <div className="row"  style={{ backgroundColor: "#fff" }}>
          <div className="col-12 col-md-6">
            <img src="/Offer.png" className="img-fluid" alt="Offers" />
          </div>
          <div className="col-12 col-md-6 p-3 p-md-5">
            <p className="display-6 m-0 text-dark">Get a Demo💪</p>
            <p className="display-6 m-0 text-dark">Build a Landing Page</p>
            <p className="m-0 mt-2" style={{ color: "#A0A0A0" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a excepturi odio eius debitis placeat, ullam aperiam facilis in sint.</p>
            <div className="mt-3">
              <p className="m-0 text-dark">Provide us with your email</p>
              <div className="d-flex border rounded p-2">
                <input type="text" className="w-100 email_input" placeholder="email" />
                <button className="btn btn-primary px-4 py-1">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

