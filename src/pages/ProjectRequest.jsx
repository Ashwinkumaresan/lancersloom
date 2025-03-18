"use client"

import { useState, useEffect } from "react"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"

const ProjectRequest = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    location: "",
    state: "",
    projectTitle: "",
    projectType: "",
    projectDescription: "",
    nda: false,
  })

  const [validated, setValidated] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [files, setFiles] = useState([])

  useEffect(() => {
    // Set minimum date to today for deadline input
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, "0")
    const mm = String(today.getMonth() + 1).padStart(2, "0")
    const yyyy = today.getFullYear()

    const todayFormatted = yyyy + "-" + mm + "-" + dd
    document.getElementById("projectDeadline")?.setAttribute("min", todayFormatted)
  }, [])

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target

    if (id.startsWith("tech")) {
      const tech = id.replace("tech", "")
      setFormData((prevState) => ({
        ...prevState,
        technologies: {
          ...prevState.technologies,
          [tech]: checked,
        },
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [id]: type === "checkbox" ? checked : value,
      }))
    }
  }

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files)

    // Check number of files
    if (selectedFiles.length > 5) {
      alert("You can upload a maximum of 5 files.")
      e.target.value = ""
      return
    }

    // Check file sizes
    for (let i = 0; i < selectedFiles.length; i++) {
      if (selectedFiles[i].size > 10 * 1024 * 1024) {
        // 10MB
        alert("One or more files exceed the maximum size of 10MB.")
        e.target.value = ""
        return
      }
    }

    setFiles(selectedFiles)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget

    if (form.checkValidity() === false) {
      e.stopPropagation()
      setValidated(true)
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      window.scrollTo({ top: 0, behavior: "smooth" })

      // Reset form
      setFormData({
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        city: "",
        State: "",
        projectTitle: "",
        projectType: "",
        projectDescription: "",
        nda: false,
      })
      setFiles([])
      setValidated(false)
    }, 1500)
  }

  return (
    <section className="project-request-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5 pt-5">
              <h1 className="fw-bold">Start Your Project</h1>
              <p className="text-muted">
                Fill out the form below with your project details and I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="project-request-card">
              {showSuccess ? (
                <Alert variant="success" className="text-center mt-4">
                  <i className="fas fa-check-circle fa-3x mb-3"></i>
                  <h4>Thank you for your project request!</h4>
                  <p>
                    We have recived your information, please wait until we contact you.
                  </p>
                </Alert>
              ) : (
                <Form noValidate validated={validated} onSubmit={handleSubmit} id="projectRequestForm">
                  <Row>
                    <Col md={6} className="mb-4">
                      <h4 className="mb-4">Client Information</h4>

                      <Form.Group className="mb-3">
                        <Form.Label>Full Name *</Form.Label>
                        <Form.Control
                          type="text"
                          id="clientName"
                          value={formData.clientName}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          id="clientEmail"
                          value={formData.clientEmail}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter a valid email address.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          id="clientPhone"
                          value={formData.clientPhone}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          id="city"
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          id="state"
                          value={formData.state}
                          onChange={handleChange}
                        />
                      </Form.Group>

                    </Col>

                    <Col md={6} className="mb-4">
                      <h4 className="mb-4">Project Details</h4>

                      <Form.Group className="mb-3">
                        <Form.Label>Project Title *</Form.Label>
                        <Form.Control
                          type="text"
                          id="projectTitle"
                          value={formData.projectTitle}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">Please enter a project title.</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Project Type *</Form.Label>
                        <Form.Select id="projectType" value={formData.projectType} onChange={handleChange} required>
                          <option value="" disabled>
                            Select project type
                          </option>
                          <option value="website">Website</option>
                          <option value="frontend">Frontend Developement</option>
                          <option value="apiDevelopement">API Developement</option>
                          <option value="ui/ux">UI/UX Design</option>
                          <option value="logo">Brand Logo Design</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Please select a project type.</Form.Control.Feedback>
                      </Form.Group>

                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Project Description *</Form.Label>
                    <Form.Control
                      as="textarea"
                      id="projectDescription"
                      rows={5}
                      value={formData.projectDescription}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please provide a project description.</Form.Control.Feedback>
                    <Form.Text className="text-muted">
                      Please describe your project in detail, including goals, features, and any specific requirements.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Upload Files</Form.Label>
                    <Form.Control type="file" id="projectFiles" multiple onChange={handleFileChange} />
                    <Form.Text className="text-muted">
                      Upload any relevant files (wireframes, mockups, references, etc.). Max 5 files, 10MB each.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Check
                      type="checkbox"
                      id="nda"
                      label="I would like to sign an NDA before discussing project details"
                      checked={formData.nda}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button type="submit" variant="primary" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Project Request"}
                    </Button>
                  </div>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProjectRequest

