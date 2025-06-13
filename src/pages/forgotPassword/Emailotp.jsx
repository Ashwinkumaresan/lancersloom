import axios from "axios"
import { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Emailotp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [otpError, setOtpError] = useState("")
  const [timer, setTimer] = useState(() => {
    // Get the timer value from sessionStorage if available, otherwise set to 300 seconds (5 minutes)
    const savedTimer = sessionStorage.getItem('timer');
    return savedTimer ? JSON.parse(savedTimer) : 300; // Default to 300 seconds (5 minutes)
  });
  const [canResend, setCanResend] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]

  const email = sessionStorage.getItem("email")
  const purpose = sessionStorage.getItem("purpose")

  // Redirect to email page if no email is found
  useEffect(() => {
    if (!email) {
      navigate("/forgotPassword-email")
    }
  }, [email, navigate])

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          const newTimer = prevTimer - 1;
          sessionStorage.setItem('timer', JSON.stringify(newTimer)); // Save the updated timer to sessionStorage
          return newTimer;
        });
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  // Format timer
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Handle OTP input (allows both numbers and characters)
  const handleOtpChange = (index, value) => {
    // Allow only the first character if value contains more than 1 character
    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input if a value is entered
    if (value && index < otp.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  }

  // Handle key down for backspace and navigation
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setOtpError("Please enter a valid 6-digit OTP");
      return;
    }
    setOtpError("");
    setIsLoading(true);
    try {
      // Send request to backend for OTP verification
      const res = await axios.post(
        "https://api.lancer.drmcetit.com/api/user/verifyOtp/",
        { otp, email },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Server Response:", res.data);
      // Store OTP verification status
      sessionStorage.setItem("otpVerified", otp);
      // Navigate to password reset page
      navigate("/signup-set-password");
    } catch (error) {
      console.error("OTP verification error:", error);
      console.log(otp)
      console.log(email)
      setOtpError("Invalid OTP or verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Resend OTP
  const resendOtp = async (e) => {
    e.preventDefault();

    if (canResend) {
      try {
        // Reset OTP fields
        setOtp(["", "", "", "", "", ""]);

        // Reset timer
        setTimer(300);
        setCanResend(false);

        // Focus first input
        inputRefs[0].current.focus();

        // API call to request a new OTP
        const res = await axios.post(
          "https://api.lancer.drmcetit.com/api/user/sendEmail/",
          { email, purpose },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        //console.log("Server Response:", res.data);

        // Alert user
        alert(`A new OTP has been sent to ${email}`);

        // Continue to OTP verification flow
        // handleVerifyOtp();

      } catch (error) {
        //console.error("Forgot password error:", error);
      }
    }
  };

  // Mask email for privacy
  const maskEmail = (email) => {
    if (!email) return ""
    const [username, domain] = email.split("@")
    const maskedUsername = username.charAt(0) + "*".repeat(username.length - 4) + username.charAt(username.length - 3) + username.charAt(username.length - 2) + username.charAt(username.length - 1)
    return `${maskedUsername}@${domain}`
  }

  return (
    <div className="container pt-0 pt-md-5 mt-0 mt-md-5 d-flex d-md-block justify-content-center align-items-center" style={{minHeight:"90vh"}}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center py-3">
              <h4 className="mb-0">Enter OTP</h4>
            </div>
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <i className="bi bi-shield-lock-fill fs-1 text-muted"></i>
                <p className="mt-3">
                  We've sent a 6-digit OTP to <strong>{maskEmail(email)}</strong>
                </p>
                <p className="alert alert-info py-2">
                  Check your inbox or junk or spam folder for the OTP.
                </p>
              </div>

              <form onSubmit={handleVerifyOtp}>
                <div className="mb-4">
                  <label className="form-label">Enter 6-digit OTP</label>
                  <div className="d-flex gap-2 justify-content-between mt-2">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={inputRefs[index]}
                        type="text"
                        className="form-control text-center"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        style={{ width: "3rem" }}
                        required
                      />
                    ))}
                  </div>
                  {otpError && <div className="text-danger small mt-2">{otpError}</div>}
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="text-muted small">{!canResend ? `Resend OTP in ${formatTime(timer)}` : ""}</span>
                  <button type="button" className="btn btn-link p-0" onClick={resendOtp} disabled={!canResend}>
                    Resend OTP
                  </button>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary py-2" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Verifying...
                      </>
                    ) : (
                      "Verify OTP"
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer bg-light text-center py-3">
              <p className="mb-0">
                <Link to="/signup" className="text-primary">
                  <i className="bi bi-arrow-left me-1"></i> Back to Email
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
