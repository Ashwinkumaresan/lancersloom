"use client"
import { useState, useEffect } from "react"
import { Container, Row, Col, Form, Button, InputGroup, ProgressBar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsCheck: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [passwordStrengthText, setPasswordStrengthText] = useState("Poor")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if (formData.password) {
      calculatePasswordStrength(formData.password)
    } else {
      setPasswordStrength(0)
      setPasswordStrengthText("Poor")
    }
  }, [formData.password])

  const calculatePasswordStrength = (password) => {
    let strength = 0

    // Calculate password strength
    if (password.length >= 8) strength += 25
    if (password.match(/[a-z]+/)) strength += 25
    if (password.match(/[A-Z]+/)) strength += 25
    if (password.match(/[0-9]+/) || password.match(/[^a-zA-Z0-9]+/)) strength += 25

    setPasswordStrength(strength)

    // Update strength text
    if (strength < 25) {
      setPasswordStrengthText("Poor")
    } else if (strength < 50) {
      setPasswordStrengthText("Weak")
    } else if (strength < 75) {
      setPasswordStrengthText("Good")
    } else {
      setPasswordStrengthText("Strong")
    }
  }

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value,
    }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName) newErrors.fullName = "Full name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.password) newErrors.password = "Password is required"
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters"
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match"
    if (!formData.termsCheck) newErrors.termsCheck = "You must agree to the terms and conditions"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate registration
      setTimeout(() => {
        setIsSubmitting(false)
        navigate("/")
      }, 1500)
    }
  }

  const getVariant = (strength) => {
    if (strength < 25) return "danger"
    if (strength < 50) return "warning"
    if (strength < 75) return "info"
    return "success"
  }

  return (
    <div className="auth-page mt-5">
      <Container>
        <Row className="justify-content-center min-vh-100 align-items-center">
          <Col md={8} lg={6} xl={5}>

            <div className="auth-card">
              <div className="card-header text-center">
                <h4 className="mb-0">Create an Account</h4>
                <p className="text-muted">Join to access exclusive features</p>
              </div>

              <div className="card-body">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaUser />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        isInvalid={!!errors.fullName}
                        required
                      />
                      <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaEnvelope />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        required
                      />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaLock />
                      </InputGroup.Text>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                        required
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={togglePasswordVisibility}
                        className="toggle-password"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                      <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </InputGroup>
                    <div className="password-strength mt-1">
                      <ProgressBar
                        now={passwordStrength}
                        variant={getVariant(passwordStrength)}
                        style={{ height: "5px" }}
                      />
                      <small className="text-muted">
                        Password strength: <span id="password-strength-text">{passwordStrengthText}</span>
                      </small>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaLock />
                      </InputGroup.Text>
                      <Form.Control
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword}
                        required
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={toggleConfirmPasswordVisibility}
                        className="toggle-password"
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                      <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id="termsCheck"
                      label={
                        <span>
                          I agree to the{" "}
                          <Link to="#" className="text-primary">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link to="#" className="text-primary">
                            Privacy Policy
                          </Link>
                        </span>
                      }
                      checked={formData.termsCheck}
                      onChange={handleChange}
                      isInvalid={!!errors.termsCheck}
                      feedback={errors.termsCheck}
                      feedbackType="invalid"
                      required
                    />
                  </Form.Group>

                  <Button type="submit" variant="primary" className="w-100 mb-3" disabled={isSubmitting}>
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </Button>

                </Form>
              </div>

              <div className="card-footer text-center">
                <p className="mb-0">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>

            <div className="text-center mt-4">
              <Link to="/" className="text-muted">
                <i className="fas fa-arrow-left me-1"></i> Back to Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Signup

