import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap"

const Portfolio = () => {
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
    <section id="portfolio" className="py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col lg={8} className="mx-auto">
            <h2 className="section-heading">Portfolio</h2>
            <p className="text-muted">Check out some of our recent projects</p>
          </Col>
        </Row>

        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} md={6} lg={4}>
              <Card className="portfolio-item h-100">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} bg="secondary">
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

        <div className="text-center mt-5">
          <Button variant="outline-primary">View All Projects</Button>
        </div>
      </Container>
    </section>
  )
}

export default Portfolio

