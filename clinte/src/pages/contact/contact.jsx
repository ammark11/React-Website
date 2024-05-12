

// Contact.jsx

import React, { useState } from 'react';


import "./contact.css";
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
<form onSubmit={handleSubmit} className="form-container">
  <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      name="name"
      id="name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      name="email"
      id="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="message">Message:</label>
    <textarea
      name="message"
      id="message"
      value={formData.message}
      onChange={handleChange}
      required
    />
  </div>
  <button type="submit" className="submit-button">Submit</button>
</form>

  );
}

export default Contact;
