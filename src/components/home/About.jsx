import { Container, Row, Col } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { FaCheckCircle, FaCertificate } from "react-icons/fa"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const navigate = useNavigate()

  //title about
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
        toggleActions: "play none none none ",
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


  //img
  const aboutDesktopRef = useRef(null);
  const aboutMobileRef = useRef(null);

  useEffect(() => {
    // Desktop image from left
    gsap.fromTo(
      aboutDesktopRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutDesktopRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Mobile image from left
    gsap.fromTo(
      aboutMobileRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutMobileRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  //about para
  // const secretRef = useRef(null);

  //   useEffect(() => {
  //     if (!secretRef.current) return;

  //     gsap.fromTo(
  //       secretRef.current,
  //       { clipPath: "inset(0 100% 0 0)" }, // hide fully from right
  //       {
  //         clipPath: "inset(0 0% 0 0)", // reveal fully
  //         duration: 1.5,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: secretRef.current,
  //           start: " 80%",
  //           toggleActions: "play none none none", // play when visible, reverse on scroll out
  //         },
  //       }
  //     );
  //   }, []);

  const textRef = useRef(null);

  useEffect(() => {
    // Split the text into individual chars
    const splitText = new SplitType(textRef.current, { types: "chars" });

    // Set initial hidden state
    gsap.set(splitText.chars, { opacity: 0, y: 40 });

    // Animate on scroll
    gsap.to(splitText.chars, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
      y: 0,
      opacity: 1,
      stagger: 0.001,
      ease: "back.out(1.7)",
      duration: 0.6,
    });
  }, []);


  return (
    <section id="about" className="p-10" style={{ overflow: "hidden" }}>
      <Container style={{ overflow: "hidden" }}>
        <div className="row">
          <div className="col-12 col-md-6 ">
            <div>
              <h2 className="mt-5 display-1 fw-bold" ref={titleRef}>About US</h2>
              <div className="secret-text-container">
                <p><strong>Lancersloom</strong> is your go-to creative and tech solutions hub, dedicated to enhancing your digital presence in this fast-paced, technology-driven world. We specialize in delivering professional freelancing services tailored to suit individual and business needs.</p>
                <ul>
                  <li>Freelancing Solutions for diverse digital projects.</li>
                  <li>Logo Design Services to craft unique, brand-focused identities.</li>
                  <li>API Integrations to seamlessly connect your digital tools.</li>
                  <li>Modern UI Designs that combine functionality with aesthetic appeal.</li>
                  <li>Landing Pages & Personal Portfolios to showcase your work and services effectively.</li>
                </ul>
                <p>At <strong>Lancersloom</strong>, we blend creativity with technology to help you stand out, upgrade your brand, and connect with your audience.
                </p>
                <button className="btn btn-dark w-100" onClick={ () => navigate("/project-request")}>Let's Build Your's</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src="/About.png" className="d-none d-md-block" ref={aboutDesktopRef} width={"800"} alt="About" />
            <img src="/About.png" className="img-fluid d-block d-md-none" ref={aboutMobileRef} width={"800"} alt="About" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About

