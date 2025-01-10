import "./footer.css";
import axios from "axios";
import { useState } from "react";
import { toast } from 'react-toastify';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Get token from localStorage if it exists
      const token = localStorage.getItem('token');
      
      const response = await axios.post(
        'http://localhost:3000/api/contact', 
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` })
          },
        }
      );

      // Save the new token if received
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }

      toast.success(response.data.message);
      
      // Clear form after successful submission
      setFormData({
        name: "",
        email: ""
      });
      
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error submitting form. Please try again';
      toast.error(errorMessage);
    }
  };

  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="footer">
        <div className="contact-info">
          <div>
            <h1>Contact Us</h1>
            <ul>
              <li>Email: vaultvehicle@info.com</li>
              <li>Landline: 091-5887155</li>
            </ul>
          </div>
        </div>
        <div className="contact-form">
          <div>
            <h1>Enter your Info</h1>
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  required
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  required
                />
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your footer code remains the same */}
      
    </footer>
  );
};

export default Footer;