import { Container, Row, Col } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const navigate = useNavigate();
  const [fetchData, setFetctData] = useState([]);
  
  // gsap animations
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    // Split text into spans per word
    const words = title.innerText.split(" ");
    title.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");

    // Create GSAP timeline with scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: "top 70%",
        toggleActions: "play reverse play reverse ",
      },
    });

    // Animate container fade & slide up
    tl.from(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate each word with bounce & scale staggered
    tl.from(
      title.querySelectorAll(".word"),
      {
        scale: 0.8,
        opacity: 0,
        y: 200,
        ease: "back.out(2)",
        stagger: 0.12,
        duration: 0.6,
      },
      "-=0.4" // overlap with previous animation
    );
  }, []);


  // buttons ref

  const buttonsRef = useRef([]);


  useEffect(() => {
    const buttons = buttonsRef.current;
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      gsap.fromTo(
        btn,
        { opacity: 0, y: 40, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: btn,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
            // markers: true,  // Uncomment to debug
          },
        }
      );
    });
  }, []);


  // image(hero)
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 40%",
          toggleActions: "play reverse play reverse",
          // markers: true, // Uncomment to debug
        },
      }
    );
  }, []);

  //offer
  const offerImgRef = useRef(null);
  const headingRefs = useRef([]);
  const paraRef = useRef(null);
  const formInputRefHero = useRef(null);
  const formButtonRefHero = useRef(null);

  useEffect(() => {
    // Offer Image
    gsap.fromTo(
      offerImgRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: offerImgRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Headings
    gsap.fromTo(
      headingRefs.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: headingRefs.current[0],
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Paragraph
    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power1.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    // input field
    gsap.fromTo(
      formInputRefHero.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formInputRefHero.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );


    // Button
    gsap.fromTo(
      formButtonRefHero.current,
      { opacity: 0, scale: 0.6 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(3)",
        scrollTrigger: {
          trigger: formButtonRefHero.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);



  return (
    <section id="home" className="p-10 mt-5" >
      <div className="container w-100 h-100 ">
        <div className="row">
          <h1 className="display-1 p-4 text-md-center fw-bold" ref={titleRef}>Make sure your profession is updated with the <span className="text-primary"> current technology </span></h1>
          <div className="text-center">
            <button onClick={() => navigate("/project-request")} className="btn btn-light mx-2 px-4 py-2 my-2" ref={(el) => (buttonsRef.current[1] = el)}>Request a project</button>
            <button className="btn" style={{
              outline:"none",
              border:"none",
            }} ref={(el) => (buttonsRef.current[2] = el)}>
              <a href="#portfolio" className="btn btn-outline-light mx-2 px-4 btn-lg py-1 my-2">View our work</a>
            </button>
          </div>
          <img src="/Hero.svg" data-aos="fade-up" className="img-fluid" alt="Hero" ref={(el) => (imageRef.current = el)} />
        </div>
      </div>
      {/* offers */}
      <div className="container mt-5 px-5 position-relative offer-div" >
        <img src="/design_1.svg" className="img-fluid position-absolute bottom-0" alt="" />
        <img src="/design_1.svg" className="img-fluid position-absolute start-0 top-0" alt="" />
        <div className="row  border offer rounded text-white">
          <div className="col-12 col-md-5">
            <img
              src="/Offers.svg"
              className="img-fluid ms-md-5"
              alt="Offers"
              ref={(el) => (offerImgRef.current = el)}
            />
          </div>
          <div className="col-12 col-md-6 p-3 p-md-5">
            <p className="display-6 m-0 text-white fw-bold" ref={(el) => (headingRefs.current[0] = el)}>Get a Demo💪</p>
            <p className="display-6 m-0 text-white fw-bold" ref={(el) => (headingRefs.current[1] = el)}>Build a Landing Page</p>

            <p className="m-0 mt-2" style={{ color: "#A0A0A0" }} ref={(el) => (paraRef.current = el)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a excepturi odio eius debitis placeat, ullam aperiam facilis in sint.
            </p>
            <div className="mt-3">
              <p className="m-0 text-white fw-bold" >Provide us with your email</p>
              <form action="#" className="d-flex border rounded p-2">
                <input
                  type="text"
                  className="w-100 email_input"
                  placeholder="youremail@gmail.com"
                  required
                  ref={(el) => (formInputRefHero.current = el)}
                />
                <button className="btn btn-primary px-4 py-1" ref={(el) => (formButtonRefHero.current = el)}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

