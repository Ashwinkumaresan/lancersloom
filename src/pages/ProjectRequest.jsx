import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function ProjectRequest() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectDesc: "",
    features: "",
    budget: "",
    deadline: "",
    additionalNotes: "",
    attachments: null,
  })

  const [imagePreview, setImagePreview] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const files = e.target.files
    setFormData((prev) => ({
      ...prev,
      attachments: files,
    }))

    // Generate image previews
    if (files) {
      const previews = []
      const imageFiles = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      )

      if (imageFiles.length === 0) {
        setImagePreview([])
        return
      }

      imageFiles.forEach((file, index) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target.result) {
            previews.push(e.target.result)
            if (previews.length === imageFiles.length) {
              setImagePreview(previews)
            }
          }
        }
        reader.readAsDataURL(file)
      })
    } else {
      setImagePreview([])
    }
  }
  useEffect(()=>{
    if (!localStorage.getItem("access_token")) {
    navigate("/login");
    return;
  }
  }, [])
  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  if (!localStorage.getItem("access_token")) {
    alert("Login requested");
    navigate("/login");
    setIsSubmitting(false);
    return;
  }

  try {
    const token = localStorage.getItem("access_token");

    // create a FormData object for multipart/form-data
    const payload = new FormData();
    payload.append("projectTitle", formData.projectTitle);
    payload.append("projectDesc", formData.projectDesc);
    payload.append("features", formData.features);
    payload.append("budget", formData.budget);
    payload.append("deadline", formData.deadline);
    payload.append("additionalNotes", formData.additionalNotes);

    // if files are attached, add them
    if (formData.attachments) {
      Array.from(formData.attachments).forEach((file) => {
        payload.append("attachments", file);
      });
    }

    // send data via fetch POST
    const response = await fetch("http://api.lancer.drmcetit.com/api/project/request/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: payload,
    });

    const result = await response.json();

    if (response.ok) {
      alert("Project submitted successfully!");
      console.log("Server response:", result);

      // reset form fields
      setFormData({
        projectTitle: "",
        projectDesc: "",
        features: "",
        budget: "",
        deadline: "",
        additionalNotes: "",
        attachments: null,
      });
      setImagePreview([]);

      const fileInput = document.getElementById("attachments");
      if (fileInput) fileInput.value = "";
    } else {
      alert(`Submission failed: ${result.message || "Something went wrong."}`);
      console.error(result);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong while submitting the project.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div
      className="min-vh-100"
      style={{
        backgroundAttachment: "fixed",
      }}
    >
      <div>
        <div className="row" style={{
          height: "100vh",
          overflow: "hidden"
        }}>
          <div className="col-6 d-none d-lg-block p-0">
            {/* <img src="/project_request.png" alt="Project Request" className="img-fluid h-100 w-100 p-0"  /> */}
            <div
              style={{
                backgroundImage: "url('/project_request.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
              }}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="text-center p-5">
                <h2 className="fw-bold display-5 mb-2">LancerLoom Is Here to Take Your Project Request!</h2>
                <p className="fs-3">Your Vision, Our Mission</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 p-0">
            <div className="row">
              <div className="col-12" style={{
                height: "100vh",
                overflowY: "scroll"
              }}>
                <div>
                  <div className="card-header bg-primary text-white text-center p-4 sticky" >
                    <h2 className="card-title mb-0 fw-bold">
                      <i className="bi bi-file-earmark-text me-2"></i>
                      Request a Project
                    </h2>
                    <p className="mb-0 mt-2 text-white-50">
                      Fill in the details to submit your project request
                    </p>
                  </div>

                  <div className="card-body p-4 p-lg-5 bg-dark text-light">
                    <p className="alert alert-info py-2">Note: Please verify that you have filled the profile page.</p>
                    <form onSubmit={handleSubmit}>
                      {/* Project Title */}
                      <div className="mb-4">
                        <label htmlFor="projectTitle" className="form-label ">
                          <i className="bi bi-bookmark-star me-2"></i>
                          Project Title <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-0 form-control-lg fs-6  shadow-sm"
                          id="projectTitle"
                          name="projectTitle"
                          value={formData.projectTitle}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your project title"
                        />
                      </div>

                      {/* Project Description */}
                      <div className="mb-4">
                        <label htmlFor="projectDesc" className="form-label ">
                          <i className="bi bi-file-text me-2"></i>
                          Project Description <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control rounded-0 fs-6 shadow-sm"
                          id="projectDesc"
                          name="projectDesc"
                          rows={4}
                          value={formData.projectDesc}
                          onChange={handleInputChange}
                          required
                          placeholder="Describe your project in detail"
                        />
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <label htmlFor="features" className="form-label ">
                          <i className="bi bi-list-check me-2"></i>
                          Features
                        </label>
                        <textarea
                          className="form-control rounded-0 fs-6  shadow-sm"
                          id="features"
                          name="features"
                          rows={3}
                          value={formData.features}
                          onChange={handleInputChange}
                          required
                          placeholder="List the key features (one per line)"
                        />
                        <div className="form-text">Add each feature on a new line</div>
                      </div>

                      {/* Budget and Deadline */}
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="budget" className="form-label ">
                            <i className="bi bi-currency-rupee me-2"></i>
                            Budget (₹)
                          </label>
                          <div className="input-group">
                            <span className="input-group-text bg-light rounded-0 ">₹</span>
                            <input
                              type="number"
                              className="form-control rounded-0 fs-6  shadow-sm"
                              id="budget"
                              name="budget"
                              value={formData.budget}
                              onChange={handleInputChange}
                              min="0"
                              step="1"
                              placeholder="Enter amount in Rupees"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-6 mb-4">
                          <label htmlFor="deadline" className="form-label ">
                            <i className="bi bi-calendar-event me-2"></i>
                            Deadline
                          </label>
                          <input
                            type="date"
                            className="form-control fs-6 rounded-0 shadow-sm"
                            id="deadline"
                            name="deadline"
                            value={formData.deadline}
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Additional Notes */}
                      <div className="mb-4">
                        <label htmlFor="additionalNotes" className="form-label ">
                          <i className="bi bi-pencil-square me-2"></i>
                          Additional Notes
                        </label>
                        <textarea
                          className="form-control fs-6 rounded-0 shadow-sm"
                          id="additionalNotes"
                          name="additionalNotes"
                          rows={3}
                          value={formData.additionalNotes}
                          onChange={handleInputChange}
                          placeholder="Any additional information or requirements"
                        />
                      </div>

                      {/* Attachments */}
                      <div className="mb-4">
                        <label htmlFor="attachments" className="form-label ">
                          <i className="bi bi-paperclip me-2"></i>
                          Attachments
                        </label>
                        <div className="input-group mb-3">
                          <span className="input-group-text bg-light rounded-0">
                            <i className="bi bi-file-earmark-arrow-up"></i>
                          </span>
                          <input
                            type="file"
                            className="form-control rounded-0 fs-6  shadow-sm"
                            id="attachments"
                            name="attachments"
                            onChange={handleFileChange}
                            multiple
                            accept=".pdf,.png,.jpg,.jpeg"
                          />
                        </div>
                        <div className="form-text text-light">
                          <i className="bi bi-info-circle me-1"></i>
                          Accepted formats: PDF, PNG, JPG, JPEG
                        </div>
                      </div>

                      {/* Image Preview */}
                      {imagePreview.length > 0 && (
                        <div className="mb-4">
                          <label className="form-label ">
                            <i className="bi bi-images me-2"></i>
                            Image Preview
                          </label>
                          <div className="row g-2">
                            {imagePreview.map((src, index) => (
                              <div key={index} className="col-6 col-md-4 col-lg-3">
                                <div className="card border-0 shadow-sm h-100">
                                  <img
                                    src={src || "/placeholder.svg"}
                                    alt={`Preview ${index + 1}`}
                                    className="card-img-top"
                                    style={{ height: "120px", objectFit: "cover" }}
                                  />
                                  <div className="card-footer bg-light p-2 text-center">
                                    <small className="text-muted">Image {index + 1}</small>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Submit Button */}
                      <div className="d-grid gap-2 mt-5">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg py-2 rounded-0 shadow"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-send-fill me-2"></i>
                              Submit Project
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="card-footer bg-light p-4 text-center">
                    <p className="mb-0 text-muted">
                      <i className="bi bi-shield-check me-1"></i>
                      Your information is secure and will be used only for project evaluation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectRequest
