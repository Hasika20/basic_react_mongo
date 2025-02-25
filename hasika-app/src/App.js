import React, { useState } from "react";
import axios from "axios";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/enquiry', formData);
      console.log(response.data);
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        date: "",
      });
    } catch (error) {
      console.error("Error in submitting the form:", error);
    }
  };

  return (
    <>
      <h2>College Admission Enquiry Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Program:
          <select name="program" value={formData.program} onChange={handleChange} required>
            <option value="">Select Program</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Business Administration">Business Administration</option>
          </select>
        </label>
        <br />
        <label>
          date
          <input type="date" name="date" value = { formData.date } onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AdmissionForm;
