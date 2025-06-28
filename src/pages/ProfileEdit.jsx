import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// --- Country Data (Crucial for phone code logic) ---
const countries = [
  { name: "United States", code: "US", phoneCode: "+1" },
  { name: "Canada", code: "CA", phoneCode: "+1" },
  { name: "United Kingdom", code: "GB", phoneCode: "+44" },
  { name: "India", code: "IN", phoneCode: "+91" },
  { name: "Australia", code: "AU", phoneCode: "+61" },
  { name: "Germany", code: "DE", phoneCode: "+49" },
  { name: "France", code: "FR", phoneCode: "+33" },
  { name: "Japan", code: "JP", phoneCode: "+81" },
  { name: "China", code: "CN", phoneCode: "+86" },
  { name: "Brazil", code: "BR", phoneCode: "+55" },
  { name: "Mexico", code: "MX", phoneCode: "+52" },
  { name: "South Africa", code: "ZA", phoneCode: "+27" },
  { name: "Argentina", code: "AR", phoneCode: "+54" },
  { name: "Italy", code: "IT", phoneCode: "+39" },
  { name: "Spain", code: "ES", phoneCode: "+34" },
  { name: "Netherlands", code: "NL", phoneCode: "+31" },
  { name: "Sweden", code: "SE", phoneCode: "+46" },
  { name: "Norway", code: "NO", phoneCode: "+47" },
  { name: "Denmark", code: "DK", phoneCode: "+45" },
  { name: "Finland", code: "FI", phoneCode: "+358" },
  { name: "New Zealand", code: "NZ", phoneCode: "+64" },
  { name: "Singapore", code: "SG", phoneCode: "+65" },
  { name: "Malaysia", code: "MY", phoneCode: "+60" },
  { name: "Indonesia", code: "ID", phoneCode: "+62" },
  { name: "Philippines", code: "PH", phoneCode: "+63" },
  { name: "South Korea", code: "KR", phoneCode: "+82" },
  { name: "Thailand", code: "TH", phoneCode: "+66" },
  { name: "Vietnam", code: "VN", phoneCode: "+84" },
  { name: "Egypt", code: "EG", phoneCode: "+20" },
  { name: "Nigeria", code: "NG", phoneCode: "+234" },
  { name: "Kenya", code: "KE", phoneCode: "+254" },
  { name: "UAE", code: "AE", phoneCode: "+971" },
  { name: "Saudi Arabia", code: "SA", phoneCode: "+966" },
  { name: "Qatar", code: "QA", phoneCode: "+974" },
  { name: "Kuwait", code: "KW", phoneCode: "+965" },
  { name: "Israel", code: "IL", phoneCode: "+972" },
  // Add more countries as needed
];

// --- Styled Components ---
const Card = styled.div`
  background-color: var(--dark-card) !important;
  border-radius: 8px !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1) !important;
  backdrop-filter: blur(10px);
`;

const CardHeader = styled.div`
  background: linear-gradient(135deg, var(--accent-color), var(--accent-hover)) !important;
  border-bottom: 1px solid var(--dark-border) !important;
  border-radius: 8px 8px 0 0 !important;
  color: white !important;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardBody = styled.div`
  background-color: var(--dark-card) !important;
  color: var(--text-primary) !important;
  padding: 1.5rem;
`;

const ProfileSection = styled.div`
  background: rgba(26, 26, 26, 0.5);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid var(--dark-border);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SectionTitle = styled.h4`
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), var(--accent-hover));
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  font-weight: 600;
`;

const FormControl = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-primary);
  background-color: var(--dark-bg-light);
  background-clip: padding-box;
  border: 1px solid var(--dark-border);
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &::placeholder {
    color: var(--text-muted);
    opacity: 0.6;
  }

  &:focus {
    color: var(--text-primary);
    background-color: var(--dark-bg-light);
    border-color: var(--accent-color);
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(var(--accent-rgb), 0.25);
  }

  &.is-invalid {
    border-color: var(--danger-color);
    padding-right: 2.25rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1.25rem 1.25rem;
  }
`;

const FormSelect = styled.select`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-primary);
  background-color: var(--dark-bg-light);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 0.65em 0.65em;
  border: 1px solid var(--dark-border);
  border-radius: 0.375rem;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: var(--accent-color);
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(var(--accent-rgb), 0.25);
  }
`;

const ErrorText = styled.div`
  color: var(--danger-color);
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;

  i {
    margin-right: 0.5rem;
  }
`;

const SaveButton = styled.button`
  background-color: var(--accent-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--accent-hover);
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const BackButton = styled.button`
  background-color: var(--dark-bg-light);
  color: var(--text-primary);
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--dark-border);
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--dark-border);
  }
`;

const ApiErrorText = styled(ErrorText)`
  text-align: center;
  margin-bottom: 1rem;
`;

// --- ProfileEdit Component ---
const ProfileEdit = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    companyName: "",
    companyDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [selectedPhoneCode, setSelectedPhoneCode] = useState(""); // State for selected phone code

  // Effect to fetch initial profile data
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get("https://api.lancer.drmcetit.com/api/user/profile/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const profileData = response.data;

        let initialPhoneCode = "";
        let initialCountry = "";
        let fullPhoneNumber = profileData.phone || "";

        // Attempt to find a matching phone code from the fetched phone number
        // This ensures the country dropdown and phone code hint are set correctly on load
        if (profileData.phone) {
          for (const country of countries) {
            if (profileData.phone.startsWith(country.phoneCode)) {
              initialPhoneCode = country.phoneCode;
              initialCountry = country.name;
              break; // Found the most specific code
            }
          }
        }

        setFormData({
          fullName: profileData.fullName || "",
          email: profileData.email || localStorage.getItem("email"),
          phone: fullPhoneNumber, // Store the full number from API
          streetAddress: profileData.streetAddress || "",
          city: profileData.city || "",
          state: profileData.state || "",
          country: initialCountry || profileData.country || "", // Use detected country or fetched country
          postalCode: profileData.postalCode || "",
          companyName: profileData.companyName || "",
          companyDetails: profileData.companyDetails || "",
        });
        setSelectedPhoneCode(initialPhoneCode); // Set the detected phone code for placeholder/hint
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        if (error.response && error.response.status === 401) {
          localStorage.clear();
          navigate("/login");
        } else {
          setApiError("Failed to load profile data. Please try again later.");
        }
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  // --- Input Change Handler ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error for the specific field as user types
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Logic for country and phone code synchronization
    if (name === "country") {
      const selectedCountry = countries.find((c) => c.name === value);
      if (selectedCountry) {
        setSelectedPhoneCode(selectedCountry.phoneCode); // Update selectedPhoneCode state

        setFormData((prevData) => {
          const currentPhone = prevData.phone;
          const newPhoneCode = selectedCountry.phoneCode;

          // Attempt to remove any *old* leading phone code before prepending the new one
          let cleanedPhone = currentPhone;
          // Find if the current phone number starts with any *existing* phone code
          for (const country of countries) {
            if (currentPhone.startsWith(country.phoneCode) && country.phoneCode !== newPhoneCode) {
              cleanedPhone = currentPhone.substring(country.phoneCode.length);
              break; // Found and removed an old code, stop
            }
          }
          // Now prepend the new code to the cleaned number, ensuring no double code
          // and trim any leading spaces from the cleaned number if it was empty or just spaces.
          return {
            ...prevData,
            phone: newPhoneCode + cleanedPhone.replace(/^\s+/, ""), // Remove leading spaces only
          };
        });
      } else {
        setSelectedPhoneCode(""); // Clear phone code if no country selected
        // If no country is selected (e.g., user selects "Select a country"),
        // try to remove any existing phone code from the phone number.
        setFormData((prevData) => {
          let currentPhone = prevData.phone;
          for (const country of countries) {
            if (currentPhone.startsWith(country.phoneCode)) {
              currentPhone = currentPhone.substring(country.phoneCode.length);
              break;
            }
          }
          return {
            ...prevData,
            phone: currentPhone,
          };
        });
      }
    } else if (name === "phone") {
      // Attempt to automatically select country based on phone code as user types
      let matchedCountry = null;
      let longestMatchLength = 0; // To handle cases with overlapping prefixes (+1, +12)

      for (const country of countries) {
        if (value.startsWith(country.phoneCode)) {
          if (country.phoneCode.length > longestMatchLength) {
            matchedCountry = country;
            longestMatchLength = country.phoneCode.length;
          }
        }
      }

      if (matchedCountry && formData.country !== matchedCountry.name) {
        setFormData((prevData) => ({
          ...prevData,
          country: matchedCountry.name,
        }));
        setSelectedPhoneCode(matchedCountry.phoneCode);
      } else if (!matchedCountry && selectedPhoneCode !== "") {
        // If no matching country code is found and a phone code was previously selected, clear it
        setSelectedPhoneCode("");
      }
    }
  };

  // --- Form Validation ---
  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    // Phone number validation: optional but good to have
    // Regex for phone number: starts with '+', followed by 1-3 digits for country code,
    // then 6-14 digits for the rest of the number. This is a basic pattern.
    if (formData.phone && !/^\+\d{1,3}\d{6,14}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid. It should start with a country code (e.g., +11234567890).";
    }
    if (!formData.streetAddress.trim()) newErrors.streetAddress = "Street Address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.state.trim()) newErrors.state = "State/Province is required.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";
    if (!formData.postalCode.trim()) newErrors.postalCode = "Postal Code is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Form Submission Handler ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(null); // Clear previous API errors

    if (!validateForm()) {
      return;
    }

    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        streetAddress: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        postalCode: formData.postalCode,
        companyName: formData.companyName,
        companyDetails: formData.companyDetails,
      };

      await axios.patch("https://api.lancer.drmcetit.com/api/user/profile/", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Profile updated successfully!");
      navigate("/profile"); 
    } catch (error) {
      //console.error("Error updating profile:", error);
      //console.log(payload);
      
      if (error.response && error.response.data && error.response.data.message) {
        setApiError(error.response.data.message);
      } else if (error.response && error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      } else {
        setApiError("Failed to update profile. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 text-white">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <Card>
            <CardHeader>
              <h3 className="mb-0 fs-4">
                <i className="bi bi-person-circle me-2"></i>
                Edit Profile
              </h3>
              <button className="btn btn-light" onClick={() => navigate("/profile")}>
                <i className="bi bi-x-lg me-2"></i>
                Cancel
              </button>
            </CardHeader>

            <CardBody>
              {apiError && <ApiErrorText>{apiError}</ApiErrorText>}
              <form onSubmit={handleSubmit}>
                {/* Basic Details Section */}
                <ProfileSection>
                  <SectionTitle>
                    <i className="bi bi-info-circle me-2"></i>
                    Basic Details
                  </SectionTitle>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <FormGroup>
                        <FormLabel htmlFor="fullName">Full Name</FormLabel>
                        <FormControl
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={errors.fullName ? "is-invalid" : ""}
                        />
                        {errors.fullName && (
                          <ErrorText>
                            <i className="bi bi-exclamation-circle"></i>
                            {errors.fullName}
                          </ErrorText>
                        )}
                      </FormGroup>
                    </div>
                    <div className="col-md-6 mb-3">
                      <FormGroup>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <FormControl
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={errors.email ? "is-invalid" : ""}
                          disabled // Email is typically not editable
                        />
                        {errors.email && (
                          <ErrorText>
                            <i className="bi bi-exclamation-circle"></i>
                            {errors.email}
                          </ErrorText>
                        )}
                      </FormGroup>
                    </div>
                    <div className="col-md-6 mb-3">
                      <FormGroup>
                        <FormLabel htmlFor="phone">Phone Number</FormLabel>
                        <FormControl
                          type="tel" // Use type="tel" for phone numbers
                          id="phone"
                          name="phone"
                          placeholder={`e.g., ${selectedPhoneCode || '+XX'} 1234567890`}
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={errors.phone ? "is-invalid" : ""}
                        />
                        {errors.phone && (
                          <ErrorText>
                            <i className="bi bi-exclamation-circle"></i>
                            {errors.phone}
                          </ErrorText>
                        )}
                      </FormGroup>
                    </div>
                  </div>
                </ProfileSection>

                {/* Address Details Section */}
                <ProfileSection>
                  <SectionTitle>
                    <i className="bi bi-geo-alt me-2"></i>
                    Address Details
                  </SectionTitle>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <FormGroup>
                        <FormLabel htmlFor="streetAddress">Street Address</FormLabel>
                        <FormControl
                          type="text"
                          id="streetAddress"
                          name="streetAddress"
                          value={formData.streetAddress}
                          onChange={handleInputChange}
                          className={errors.streetAddress ? "is-invalid" : ""}
                        />
                        {errors.streetAddress && (
                          <ErrorText>
                            <i className="bi bi-exclamation-circle"></i>
                            {errors.streetAddress}
                          </ErrorText>
                        )}
                      </FormGroup>
                    </div>
                    <div className="col-md-6 mb-3">
                      <FormGroup>
                        <FormLabel htmlFor="city">City</FormLabel>
                        <FormControl
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={errors.city ? "is-invalid" : ""}
                        />
                        {errors.city && (
                          <ErrorText>
                            <i className="bi bi-exclamation-circle"></i>
                            {errors.city}
                          </ErrorText>
                        )}
                      </FormGroup>
                    </div>
                    <div className="col-md-6 mb-3">
                      <FormGroup>
                        <FormLabel htmlFor="state">State/Province</FormLabel>
                        <FormControl
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className={errors.state ? "is-invalid" : ""}
                        />
                        {errors.state && (
                          <ErrorText>
                            <i className="bi bi-exclamation-circle"></i>
                            {errors.state}
                          </ErrorText>
                        )}
                      </FormGroup>
                    </div>
                    <div className="col-md-6 mb-3">
                      <FormGroup>
                        <FormLabel htmlFor="country">Country</FormLabel>
                        <FormSelect
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className={errors.country ? "is-invalid" : ""}
                        >
                          <option value="" className="bg-dark text-white" >Select a country</option>
                          {countries.map((country) => (
                            <option key={country.code} value={country.name} className="bg-dark text-white">
                              {country.name} ({country.phoneCode})
                            </option>
                          ))}
                        </FormSelect>
                        {errors.country && (
                          <ErrorText>
                            <i className="bi bi-exclamation-circle"></i>
                            {errors.country}
                          </ErrorText>
                        )}
                      </FormGroup>
                    </div>
                    <div className="col-md-6 mb-3">
                      <FormGroup>
                        <FormLabel htmlFor="postalCode">Postal Code / ZIP</FormLabel>
                        <FormControl
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className={errors.postalCode ? "is-invalid" : ""}
                        />
                        {errors.postalCode && (
                          <ErrorText>
                            <i className="bi bi-exclamation-circle"></i>
                            {errors.postalCode}
                          </ErrorText>
                        )}
                      </FormGroup>
                    </div>
                  </div>
                </ProfileSection>

                {/* Company Information Section */}
                <ProfileSection>
                  <SectionTitle>
                    <i className="bi bi-building me-2"></i>
                    Company Information (Optional)
                  </SectionTitle>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <FormGroup>
                        <FormLabel htmlFor="companyName">Company Name</FormLabel>
                        <FormControl
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-12 mb-3">
                      <FormGroup>
                        <FormLabel htmlFor="companyDetails">Company Details</FormLabel>
                        <FormControl
                          as="textarea" // Use as="textarea" for multiline input
                          id="companyDetails"
                          name="companyDetails"
                          rows="3"
                          value={formData.companyDetails}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </div>
                  </div>
                </ProfileSection>

                <div className="d-flex justify-content-end gap-3 mt-4">
                  <BackButton type="button" onClick={() => navigate("/profile")}>
                    Cancel
                  </BackButton>
                  <SaveButton type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Save Changes"}
                  </SaveButton>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;