import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("signup");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  localStorage.setItem("purpose", purpose);

  const handleButtonSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!email.endsWith(".com") || !email.includes("@gmail")) {
      setEmailError("Please enter a valid college email");
      return;
    }

    setEmailError("");
    setIsLoading(true);

    console.log(email)
    console.log(purpose)
    try {
      // Axios request to backend
      const res = await axios.post(
        "https://api.lancer.drmcetit.com/api/user/sendEmail/",
        { email, purpose },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Store email in localStorage
      localStorage.setItem("email", email);

      // Navigate to signup-otp page
      navigate("/signup-otp");
    } catch (error) {
      console.log(error)
      setEmailError("Please check, mail might already be registered");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container pt-0 pt-md-5 mt-0 mt-md-5 d-flex d-md-block justify-content-center align-items-center" style={{minHeight:"90vh"}}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center py-3">
              <h4 className="mb-0">Signup</h4>
            </div>
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <i className="bi bi-envelope-fill fs-1 text-muted"></i>
                <p className="mt-3">
                  Enter your email id and we'll send you an OTP for confirmation.
                </p>
              </div>

              <form onSubmit={handleButtonSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email ID
                  </label>
                  <input
                    type="email"
                    className={`form-control ${emailError ? "is-invalid" : ""}`}
                    id="email"
                    placeholder="yourmail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {emailError && (
                    <div className="invalid-feedback fs-14">{emailError}</div>
                  )}
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary py-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      "Send OTP"
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer bg-light text-center py-3">
              <p className="mb-0">
                Remember your password?{" "}
                <Link to="/login" className="text-primary">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
