"use client"

import { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col lg={8} className="mx-auto">
            <h2 className="section-heading">Get In Touch</h2>
            <p className="text-muted">Have a project in mind? Let's discuss how I can help.</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="contact-card">
              {submitSuccess ? (
                <div className="alert alert-success text-center">
                  <h4>Thank you for your message!</h4>
                  <p>I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" id="name" value={formData.name} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" id="email" value={formData.email} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" id="subject" value={formData.subject} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Button type="submit" variant="primary" className="w-100" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </Form>
              )}
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <div className="contact-info">
              <FaEnvelope className="contact-icon" />
              <h4>Email</h4>
              <p>
                <a href="mailto:john@example.com" className="text-decoration-none">
                  achusuchu123@gmail.com
                </a>
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4 mb-md-0">
            <div className="contact-info">
              <FaPhone className="contact-icon" />
              <h4>Phone</h4>
              <p>
                <a href="tel:+1234567890" className="text-decoration-none">
                  +91 9345857852
                </a>
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="contact-info">
              <FaMapMarkerAlt className="contact-icon" />
              <h4>Location</h4>
              <p>Tamil Nadu, India</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact

