import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled components for a few of your CSS classes
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
`;

const CardBody = styled.div`
  background-color: var(--dark-card) !important;
  color: var(--text-primary) !important;
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

const ProfileInfoItem = styled.div`
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.1);
  }
`;

const GradientText = styled.h1`
  background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ProfileDisplay = () => {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
        fullName: "",
        email: "",
        phone: "",
        streetAddress: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
        companyName: "",
        companyDetails: ""
    });

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (!token) {
            navigate("/login");
        }
    })

    const profileDataDisplay = async () => {
        try {
            const response = await axios.get("https://api.lancer.drmcetit.com/api/user/profile/", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
            const data = response.data;
            //console.log(data)
            setProfileData({
                fullName: data.fullName || "",
                userName: data.username || "",
                email: data.email || "",
                phone: data.phone || "",
                streetAddress: data.streetAddress || "",
                city: data.city || "",
                state: data.state || "",
                country: data.country || "",
                postalCode: data.postalCode || "",
                companyName: data.companyName || "",
                companyDetails: data.companyDetails || ""
            });
        } catch (error) {
            if(error.response  && error.response.status === 401){
                //console.log("Cleaning local storage");
                alert("Unauthorized")
                localStorage.clear();
                navigate("/login")
            }
            else{
                //console.error("Error fetching student data:", error);
            }
        }
    };

    useEffect(() => {
        profileDataDisplay();
    }, []);

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                        <div className="d-flex justify-content-between align-items-center mb-4 sticky">
                            <p className="display-5 fw-bold">Customer Profile</p>
                            <button className="btn btn-outline-light" onClick={() => navigate("/")}>
                                <i className="bi bi-house"></i>
                            </button>
                        </div>

                    <Card>
                        <CardHeader className="p-3 mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="mb-0 fs-4">
                                    <i className="bi bi-person-circle me-2"></i>
                                    Profile Information
                                </h3>
                                <button className="btn btn-light" onClick={() => navigate("/profile-edit")}>
                                    <i className="bi bi-pencil me-2"></i>
                                    Edit
                                </button>
                            </div>
                        </CardHeader>

                        <CardBody className="p-3">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-center mb-4">
                                        <div
                                            className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-3"
                                            style={{ width: "120px", height: "120px" }}
                                        >
                                            <i className="bi bi-person fs-1 text-white"></i>
                                        </div>
                                        <h2 className="fw-bold m-0">{profileData.fullName || "Fullname"}</h2>
                                        <p className="m-0" style={{color:"#ccc"}}>{profileData.userName || "Username"}</p>
                                    </div>

                                    {/* Basic Details */}
                                    <ProfileSection>
                                        <SectionTitle>
                                            <i className="bi bi-info-circle me-2"></i>
                                            Basic Details
                                        </SectionTitle>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <ProfileInfoItem>
                                                    <small className=" d-block">Email Address</small>
                                                    <strong className="fs-6">{profileData.email}</strong>
                                                </ProfileInfoItem>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <ProfileInfoItem>
                                                    <small className=" d-block">Phone Number</small>
                                                    <strong className="fs-6">{profileData.phone}</strong>
                                                </ProfileInfoItem>
                                            </div>
                                        </div>
                                    </ProfileSection>

                                    {/* Address Information */}
                                    <ProfileSection>
                                        <SectionTitle>
                                            <i className="bi bi-geo-alt me-2"></i>
                                            Address Information
                                        </SectionTitle>
                                        <div className="row">
                                            <div className="col-md-12 mb-3">
                                                <ProfileInfoItem>
                                                    <small className=" d-block">Street Address</small>
                                                    <strong className="fs-6">{profileData.streetAddress}</strong>
                                                </ProfileInfoItem>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <ProfileInfoItem>
                                                    <small className=" d-block">City</small>
                                                    <strong className="fs-6">{profileData.city}</strong>
                                                </ProfileInfoItem>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <ProfileInfoItem>
                                                    <small className=" d-block">State/Province</small>
                                                    <strong className="fs-6">{profileData.state}</strong>
                                                </ProfileInfoItem>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <ProfileInfoItem>
                                                    <small className=" d-block">Country</small>
                                                    <strong className="fs-6">{profileData.country}</strong>
                                                </ProfileInfoItem>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <ProfileInfoItem>
                                                    <small className=" d-block">Postal Code / ZIP</small>
                                                    <strong className="fs-6">{profileData.postalCode}</strong>
                                                </ProfileInfoItem>
                                            </div>
                                        </div>
                                    </ProfileSection>

                                    {/* Company Information */}
                                    <ProfileSection>
                                        <SectionTitle>
                                            <i className="bi bi-building me-2"></i>
                                            Company Information
                                        </SectionTitle>
                                        <div className="row">
                                            <div className="col-12 mb-3">
                                                <ProfileInfoItem>
                                                    <small className=" d-block">Company Name</small>
                                                    <strong className="fs-6">{profileData.companyName}</strong>
                                                </ProfileInfoItem>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <ProfileInfoItem>
                                                    <small className=" d-block">Company Details</small>
                                                    <p className="mb-0 mt-2">{profileData.companyDetails}</p>
                                                </ProfileInfoItem>
                                            </div>
                                        </div>
                                    </ProfileSection>

                                </div>
                            </div>
                        </CardBody>

                        {/* Note: CardFooter, form-control, form-select, etc. are not converted to styled-components in this example.
                They would follow a similar pattern if you choose to convert them. */}
                        <div className="card-footer p-3">
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-secondary" onClick={() => navigate("/")}>
                                    <i className="bi bi-arrow-left me-2"></i>
                                    Back to Home
                                </button>
                                <button className="btn btn-primary" onClick={() => navigate("/profile-edit")}>
                                    <i className="bi bi-pencil me-2"></i>
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default ProfileDisplay;