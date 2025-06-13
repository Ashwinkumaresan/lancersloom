import { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const loginResponse = await axios.post(
        "https://api.lancer.drmcetit.com/api/user/login/",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          //withCredentials: true,
        }
      );
      localStorage.setItem("access_token", loginResponse.data.access_token);
      localStorage.setItem("refresh_token", loginResponse.data.refresh_token);
      localStorage.setItem("email", formData.email);
      localStorage.setItem("timestamp", new Date().getTime());
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.error("Error status:", error.response.status);
        console.error("Error message:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-center min-vh-100 align-items-center text-dark">
          <Col md={8} lg={6} xl={5}>
            <div className="auth-card mt-5">
              <div className="card-header text-center">
                <h4 className="mb-0">Welcome Back</h4>
                <p className="text-muted">Sign in to your account</p>
              </div>

              <div className="card-body">
                <Form onSubmit={handleSubmit}>
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
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <Form.Label>Password</Form.Label>
                      <Link to="/forgotpassword-email" className="text-primary small">
                        Forgot Password?
                      </Link>
                    </div>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaLock />
                      </InputGroup.Text>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={togglePasswordVisibility}
                        className="toggle-password"
                        type="button"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 mb-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                  </Button>
                </Form>
              </div>

              <div className="card-footer text-center">
                <p className="mb-0">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>

            <div className="text-center mt-4">
              <Link to="/" className="text-light">
                <i className="fas fa-arrow-left me-1"></i> Back to Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
