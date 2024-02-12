/* eslint-disable no-unused-vars */
// import Navbar from "./Navbar";
// import { item } from "../item";
import { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    homeAddress: "",
    parentFullName: "",
    age: "",
    stateOfOrigin: "",
    studentClass: "",
    parentEmail: "",
    subjects: "",
    feesPaid: false,
    profileImage: null, // New state for profile image
  });

  // eslint-disable-next-line no-unused-vars
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // eslint-disable-next-line no-unused-vars
  const handleSubjectsChange = (e) => {
    setFormData({ ...formData, subjects: e.target.value });
  };

  const handleFeesPaidChange = (e) => {
    setFormData({ ...formData, feesPaid: e.target.checked });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access the form data in the 'formData' object here
    console.log(formData);
  };

  return (
    <div>
      {/* <Navbar item={item} /> */}
      <h2>Student Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Other form fields as before */}

        <label>
          Profile Image:
          <input
            type='file'
            name='profileImage'
            accept='image/*'
            onChange={handleImageChange}
          />
        </label>

        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

export default Profile;


