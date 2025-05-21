import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Signup_password = () => {
  const [userName, setUserName] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const mail = sessionStorage.getItem("resetEmail")
  const otp_re = sessionStorage.getItem("otpVerified")

  useEffect(() => {
    if (!mail || !otp_re) {
      navigate("/student-login")
    }
  }, [mail, otp_re, navigate])

  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, text: "", class: "" }

    let strength = 0
    if (password.length >= 8) strength += 1
    if (/[A-Z]/.test(password)) strength += 1
    if (/[a-z]/.test(password)) strength += 1
    if (/[0-9]/.test(password)) strength += 1
    if (/[^A-Za-z0-9]/.test(password)) strength += 1

    const strengthMap = {
      1: { text: "Weak", class: "bg-danger" },
      2: { text: "Fair", class: "bg-warning" },
      3: { text: "Good", class: "bg-info" },
      4: { text: "Strong", class: "bg-primary" },
      5: { text: "Very Strong", class: "bg-success" },
    }

    return {
      strength: (strength / 5) * 100,
      text: strengthMap[strength]?.text || "",
      class: strengthMap[strength]?.class || "",
    }
  }

  const passwordStrength = getPasswordStrength(newPassword)

  const handleResetPassword = async (e) => {
    e.preventDefault()

    if (!userName) {
      setPasswordError("Please enter a username")
      return
    }

    if (!newPassword) {
      setPasswordError("Please enter a new password")
      return
    }

    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long")
      return
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match")
      return
    }

    setPasswordError("")
    setIsLoading(true)

    const otp = sessionStorage.getItem("otpVerified")

    try {
      const collegeMail = sessionStorage.getItem("resetEmail")

      const res = await axios.post(
        "https://test.mcetit.drmcetit.com/api/changePassword/",
        {
          userName, // Added userName in payload
          newPassword,
          confirmPassword,
          collegeMail,
          otp,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )

      alert("Password reset successful! You can now login with your new password.")
      navigate("/login")
      sessionStorage.removeItem("resetEmail")
      sessionStorage.removeItem("otpVerified")
    } catch (error) {
      setPasswordError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center py-3">
              <h4 className="mb-0">Signup</h4>
            </div>
            <div className="card-body p-4">
              <div className="text-center">
                <i className="bi bi-key-fill fs-1 text-muted m-0 p-0"></i>
                <p className="m-0 mt-3">Your identity has been verified.</p>
                <p className="mb-3">Create your username and password.</p>
              </div>

              <form onSubmit={handleResetPassword}>
                {/* Username field */}
                <div className="mb-4">
                  <label htmlFor="userName" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className={`form-control ${passwordError && !userName ? "is-invalid" : ""}`}
                    id="userName"
                    placeholder="Enter your username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>

                {/* New Password */}
                <div className="mb-4">
                  <label htmlFor="new-password" className="form-label">
                    New Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${passwordError ? "is-invalid" : ""}`}
                      id="new-password"
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                    </button>
                  </div>

                  {newPassword && (
                    <div className="mt-2">
                      <div className="progress" style={{ height: "5px" }}>
                        <div
                          className={`progress-bar ${passwordStrength.class}`}
                          role="progressbar"
                          style={{ width: `${passwordStrength.strength}%` }}
                          aria-valuenow={passwordStrength.strength}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small className="text-muted d-flex justify-content-end mt-1">{passwordStrength.text}</small>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                  <label htmlFor="confirm-password" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${passwordError ? "is-invalid" : ""}`}
                    id="confirm-password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary py-2" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Resetting...
                      </>
                    ) : (
                      "Reset Password"
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer bg-light text-center py-3">
              <p className="mb-0">
                <Link to="/login" className="text-primary">
                  Back to Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
