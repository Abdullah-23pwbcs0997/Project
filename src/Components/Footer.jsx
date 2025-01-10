import "./footer.css";
import axios from "axios";
import { useState } from "react";
import { toast } from 'react-toastify';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [message, setMessage] = useState("");
  const handleChange = (data) => {
    setFormData({ ...formData, [data.target.name]: data.target.value });
  };
  const handleSubmit = async(data) => {
    data.preventDefault();
    try {
      console.log(formData)
      const response = await axios.post('http://localhost:3000/api/contact', formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      const errorMessage = 'Error submitting form. Try again'
      toast.error(errorMessage)
    }
  };

  return (
    <footer className="bg-dark text-white py-3 mt-auto ">
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
                />
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="social-media">
  <a href="https://www.instagram.com/vanguardmotors?igsh=ZjNuMXp6NWRzbnFp" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram fa-2x" style={{ color: '#E4405F' }}></i> {/* Instagram Red */}
  </a>
  <a href="https://www.facebook.com/share/1B9hvw8gmR/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook fa-2x" style={{ color: '#1877F2' }}></i> {/* Facebook Blue */}
  </a>
  <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-whatsapp fa-2x" style={{ color: '#25D366' }}></i> {/* WhatsApp Green */}
  </a>
  <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
    <i className="fas fa-envelope fa-2x" style={{ color: '#D44638' }}></i> {/* Gmail Red */}
  </a>
</div>

      <p>&copy; {new Date().getFullYear()} All content on this website is owned by Vehicle Vault. BMW, Nissan, and Mercedes-Benz are trademarks of their respective owners. Unauthorized use is prohibited.</p>
    </footer>
  );
};

export default Footer;
