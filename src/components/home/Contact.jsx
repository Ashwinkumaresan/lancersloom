import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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


  //title contact
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

  //animation form
  const formRef = useRef(null);

useEffect(() => {
  if (!formRef.current) return;

  const formElements = formRef.current.querySelectorAll(".form-group, .btn");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: formRef.current,
      start: "top 80%",
      // markers: true, // optional for debugging scroll trigger
      toggleActions: "play none none reverse",
    },
  });

  tl.fromTo(
    formElements,
    { opacity: 0, y: 40 },  // initial hidden + down
    {
      opacity: 1,
      y: 0,                  // final visible + normal position
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15,
    }
  );

  return () => {
    // Clean up ScrollTrigger on unmount
    tl.scrollTrigger.kill();
  };
}, []);





  return (
    <section id="contact" className="py-5">
      <Container>
        <Row className="text-center my-5">
          <Col lg={8} className="mx-auto">
            <h2 className="text-center display-1 fw-bold" ref={titleRef}>Any Queries</h2>
            <p style={{ color: "#A0A0A0" }} ref={titleRef2}>Have a doubt in mind? Let's discuss how I can help.</p>
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
                <Form onSubmit={handleSubmit} ref={formRef}>
                  <Form.Group className="mb-3 form-group">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" id="name" value={formData.name} placeholder="Name" onChange={handleChange} required />
                  </Form.Group>

                  <Form.Group className="mb-3 form-group">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" id="email" value={formData.email} placeholder="Email" onChange={handleChange} required />
                  </Form.Group>

                  <Form.Group className="mb-3 form-group">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" id="subject" value={formData.subject} placeholder="Subject" onChange={handleChange} required />
                  </Form.Group>

                  <Form.Group className="mb-3 form-group">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" id="message" rows={5} value={formData.message} placeholder="Your area..." onChange={handleChange} required />
                  </Form.Group>

                  <Button type="submit" variant="primary" className="w-100 btn" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </Form>

              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact

