import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Main_1 from "./Components/Main_1";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nissan from "./Components/Nissan";
import Merc from "./Components/Merc";
import BMW from "./Components/BMW";
import Footer from "./Components/Footer";
// Create this file for custom styling if needed

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Main_1 />} />
            <Route path="/BMW" element={<BMW />} />
            <Route path="/Merc" element={<Merc />} />
            <Route path="/Nissan" element={<Nissan />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
