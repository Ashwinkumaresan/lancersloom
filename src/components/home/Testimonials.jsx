import { Container, Row, Col } from "react-bootstrap"
import { FaStar } from "react-icons/fa"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "John delivered our e-commerce website ahead of schedule and exceeded all our expectations. His attention to detail and problem-solving skills are exceptional.",
      name: "Sarah Johnson",
      position: "CEO, Fashion Boutique",
      image: "Hero.png",
    },
    {
      id: 2,
      text: "Working with John was a pleasure. He understood our vision perfectly and translated it into a beautiful, functional website that has significantly increased our conversion rates.",
      name: "Michael Chen",
      position: "Marketing Director, Tech Startup",
      image: "Hero.png",
    },
    {
      id: 3,
      text: "John's expertise in both design and development made our project seamless. He was responsive, professional, and delivered a product that our customers love using.",
      name: "Emily Rodriguez",
      position: "Owner, Wellness Studio",
      image: "Hero.png",
    },
  ]

  return (
    <section id="testimonials" className="py-5 bg-light">
      <Container>
        <Row className="text-center my-5">
          <Col lg={8} className="mx-auto">
            <h2 className="section-heading">Client Testimonials</h2>
            <p className="text-muted">What my clients say about working with us</p>
          </Col>
        </Row>

        <Row>
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} md={6} lg={4} className="mb-4">
              <div className="testimonial-card">
                <div className="testimonial-rating mb-3">
                  {[...Array()].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author d-flex align-items-center mt-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h5 className="mb-0">{testimonial.name}</h5>
                    <p className="mb-0 text-muted">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials

