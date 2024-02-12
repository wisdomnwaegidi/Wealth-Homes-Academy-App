import ImageUploader from "react-image-upload";
import { useState } from "react";
import "./userprofile.css";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Wisdom Nwaegidi",
    age: 29,
    homeAddress: "No 8 Oguta Street Aladinma Owerri",
    parentFullNames: "Mr & Mrs Nwaegidi",
    stateOfOrigin: "Lagos State",
    childClass: "Primary One",
    email: "linusnwaegidi@gmail.com",
    phoneNumber: "+2348012345678",
    image: null,
  });

  const [validationError, setValidationError] = useState(null);

  const handleImageUpload = (image) => {
    if (!image) {
      // Handle empty image
      return;
    }

    // Validate file size
    if (image.size > 1024 * 1024 * 10) {
      setValidationError("Image is too large. Maximum size is 10MB.");
      return;
    }

    // Validate file type
    if (!image.type.match(/image\/jpeg/)) {
      setValidationError("Only jpg images are allowed.");
      return;
    }

    // Update user state
    setUser({
      ...user,
      image,
    });

    // Clear validation error message
    setValidationError(null);
  };

  return (
    <div className="profile-container">
      <div className="profile-wrapper__one">
        <div className="">
          <h2>STUDENT DETAILS</h2>
          <ImageUploader
            onChange={handleImageUpload}
            maxFileSize={1024 * 1024 * 10} // 10MB
            accept="image/jpeg"
          />
          <ul>
            <li>Name: {user.name}</li>
            <li>Age: {user.age}years</li>
            <li>Home Address: {user.homeAddress}</li>
            <li>Parent Full Names: {user.parentFullNames}</li>
            <li>State of Origin: {user.stateOfOrigin}</li>
            <li>Class: {user.childClass}</li>
            <li>Email: {user.email}</li>
            <li>Phone Number: {user.phoneNumber}</li>
          </ul>
        </div>

        <div>
          <h2>HELP</h2>
        </div>

        {user.image && <img src={user.image} alt={user.name} />}
        {validationError && (
          <div className="validation-error">{validationError}</div>
        )}
        <div>
          <Link to="/Logout">Logout</Link>
        </div>
      </div>

      <div className="profile-wrapper-two">
        <div className="school-fees">
          <h1>School Fees</h1>
          <div className="schl-paid">
            <h3>PAID</h3>
            <p>
              Amount <span>₦55,200</span>
            </p>
          </div>
        </div>
        <div className="school-subjects">
          <h1>Wisdom Subjects</h1>
          <ul>
            <li>Mathematics</li>
            <li>English</li>
            <li>Civic Studies</li>
            <li>Physical Health Education</li>
            <li>Religion and National Values</li>
            <li> Social Skills</li>
            <li>French Language</li>
            <li>Cultural and Creative Arts</li>
            <li>Basic Science and Technology</li>
            <li> Hausa Language</li>
            <li>Yoruba Language</li>
            <li>Igbo language</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
