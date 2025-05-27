import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaCheckCircle, FaCertificate } from "react-icons/fa"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000,  // animation duration in ms
        once: true       // whether animation should happen only once
      });
    }, []);
  return (
    <section id="about" className="p-10" style={{overflow:"hidden"}}>
      <Container style={{overflow:"hidden"}}>
        <div className="row">
          <div className="col-12 col-md-6 ">
            <div  data-aos="fade-up">
            <h4>Our story</h4>
            <p className="justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, amet odio perspiciatis dolores nam inventore pariatur possimus optio aperiam voluptas modi doloremque minus! Sunt, laudantium voluptatem quidem quibusdam eveniet aspernatur eligendi. Placeat quo doloribus assumenda neque doloremque, dolorem qui blanditiis debitis perferendis. Harum asperiores voluptatibus molestias iure, commodi explicabo neque illum ad exercitationem ea deserunt quaerat consectetur perferendis nesciunt repellat suscipit fuga alias voluptates possimus veniam? Dolorum autem dicta odio vero illo exercitationem maxime porro natus? Beatae quidem consequuntur illo voluptate dolor.</p>
            </div>
             <div className="row">
              <div className="col-12"  data-aos="fade-up">
                <h4>Our story</h4>
                <p className="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloribus facere pariatur voluptates ipsa sapiente perspiciatis laudantium, quae commodi dolor nihil dicta et quasi totam!</p>
              </div>
              <div className="col-12"  data-aos="fade-up">
                <h4>Our story</h4>
                <p className="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloribus facere pariatur voluptates ipsa sapiente perspiciatis laudantium, quae commodi dolor nihil dicta et quasi totam!</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6"  data-aos="fade-left">
           <img src="/About.png" className="d-none d-md-block" width={"800"} alt="About" />
           <img src="/About.png" className="img-fluid d-block d-md-none" width={"800"} alt="About" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About

