import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in ms
      once: true       // whether animation should happen only once
    });
  }, []);
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured online store with payment integration, inventory management, and analytics dashboard.",
      image: "Hero.png",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "Health & Fitness App",
      description:
        "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      image: "Hero.png",
      technologies: ["React Native", "Firebase", "UI/UX Design"],
      link: "#",
    },
    {
      id: 3,
      title: "Corporate Website Redesign",
      description:
        "Complete redesign of a corporate website focusing on improved user experience and conversion rates.",
      image: "Hero.png",
      technologies: ["HTML/CSS", "JavaScript", "WordPress"],
      link: "#",
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      description: "An intuitive admin dashboard for a SaaS platform with real-time data visualization and reporting.",
      image: "Hero.png",
      technologies: ["Vue.js", "Express", "Chart.js"],
      link: "#",
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "A responsive website for a high-end restaurant featuring online reservations and menu management.",
      image: "Hero.png",
      technologies: ["HTML/CSS", "JavaScript", "PHP"],
      link: "#",
    },
    {
      id: 6,
      title: "Educational Platform",
      description: "An online learning platform with course management, video streaming, and progress tracking.",
      image: "Hero.png",
      technologies: ["React", "Node.js", "PostgreSQL"],
      link: "#",
    },
  ]

  return (
    <section id="portfolio" className="p-10">
      <Container>
        <Row className="text-center my-5">
          <Col lg={8} className="mx-auto">
            <h2 className="display-1 text-center fw-bold" data-aos="fade-up">Our projects!</h2>
            <h2 className="display-1 text-center fw-bold" data-aos="fade-up">Right infront of you...</h2>
          </Col>
        </Row>

        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} md={6} lg={4}>
              <Card className="portfolio-item h-100" data-aos="fade-up">
                <Card.Img variant="top" src={project.image} alt={project.title} data-aos="fade-up"/>
                <Card.Body>
                  <Card.Title data-aos="fade-up">{project.title}</Card.Title>
                  <Card.Text data-aos="fade-up">{project.description}</Card.Text>
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} bg="secondary" data-aos="fade-up">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {/* <Button href={project.link} variant="outline-primary" size="sm">
                    View Project
                  </Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5" data-aos="fade-up">
          <Button variant="outline-light">View All Projects</Button>
        </div>
      </Container>
    </section>
  )
}

export default Portfolio

