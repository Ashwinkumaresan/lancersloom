import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import axios from "axios";


gsap.registerPlugin(ScrollTrigger);
const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  //title portfolio
  const titleRef = useRef(null);
  const titleRef2 = useRef(null);

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

  useEffect(() => {
    const title = titleRef2.current;
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

  // const projects = [
  //   {
  //     id: 1,
  //     title: "E-commerce Platform",
  //     description:
  //       "A full-featured online store with payment integration, inventory management, and analytics dashboard.",
  //     image: "Hero.png",
  //     technologies: ["React", "Node.js", "MongoDB"],
  //     link: "#",
  //   },
  //   {
  //     id: 2,
  //     title: "Health & Fitness App",
  //     description:
  //       "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
  //     image: "Hero.png",
  //     technologies: ["React Native", "Firebase", "UI/UX Design"],
  //     link: "#",
  //   },
  //   {
  //     id: 3,
  //     title: "Corporate Website Redesign",
  //     description:
  //       "Complete redesign of a corporate website focusing on improved user experience and conversion rates.",
  //     image: "Hero.png",
  //     technologies: ["HTML/CSS", "JavaScript", "WordPress"],
  //     link: "#",
  //   },
  //   {
  //     id: 4,
  //     title: "SaaS Dashboard",
  //     description: "An intuitive admin dashboard for a SaaS platform with real-time data visualization and reporting.",
  //     image: "Hero.png",
  //     technologies: ["Vue.js", "Express", "Chart.js"],
  //     link: "#",
  //   },
  //   {
  //     id: 5,
  //     title: "Restaurant Website",
  //     description: "A responsive website for a high-end restaurant featuring online reservations and menu management.",
  //     image: "Hero.png",
  //     technologies: ["HTML/CSS", "JavaScript", "PHP"],
  //     link: "#",
  //   },
  //   {
  //     id: 6,
  //     title: "Educational Platform",
  //     description: "An online learning platform with course management, video streaming, and progress tracking.",
  //     image: "Hero.png",
  //     technologies: ["React", "Node.js", "PostgreSQL"],
  //     link: "#",
  //   },
  // ]

  // card animation
  const cardsRef = useRef([]);

  useEffect(() => {
  if (projects.length === 0) return;

  cardsRef.current.forEach((card) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    tl.from(card, {
      opacity: 1,
      y: 60,
      skewX: 10,
      rotate: 5,
      duration: 0.6,
      ease: "power3.out",
    }).to(card, {
      skewX: 0,
      rotate: 0,
      duration: 0.4,
      ease: "expo.out",
    });
  });
}, [projects]);



  // api call
  
  useEffect(() => {
    const fetchDataHome = async () => {
      try {
        const response = await axios.get("https://api.lancer.drmcetit.com/api/project/home/projectList/");
        const formattedProjects = response.data.map((project) => ({
          image: project.image,
          title: project.projectTitle,
          description: project.projectDesc,
          technologies: project.techStack.map((t) => t.tech),
          deadline: project.deadline
        }));
        //console.log(response.data);
        
        setProjects(formattedProjects);
      } catch (error) {
        //console.error("Error fetching data:", error.response?.data || error.message);
      }
    };

    fetchDataHome();
  }, []);

  return (
    <section id="portfolio" className="p-10" style={{
      width:"100vw",
      overflow:"hidden" 
    }}>
      <Container>
        <Row className="text-center my-5">
          <Col lg={8} className="mx-auto">
            <h2 className="display-1 text-center fw-bold" ref={titleRef}>Our projects!</h2>
            <h2 className="display-1 text-center fw-bold" ref={titleRef2}>Right infront of you...</h2>
          </Col>
        </Row>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="card portfolio-item h-100">
                <img src={project.image} alt={project.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="badge bg-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center mt-5" data-aos="fade-up">
          <Button variant="outline-light">View All Projects</Button>
        </div>
      </Container>
    </section>
  )
}

export default Portfolio

