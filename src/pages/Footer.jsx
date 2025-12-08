import React from "react";
import "./Footer.css"; // Make sure you create this file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* LEFT SECTION */}
        <div className="footer-left">
          <h1><b>GIRLATHON</b></h1>
          <p>
            A playful, supportive hackathon weekend<br />
            centering women & non-binary<br />
            technologists building soft, powerful<br />
            futures.
          </p>

          <p>
            Email: <a href="#"><u>hello@girlathon.com</u></a>
          </p>
          <p>
            Contact: <a href="#"><u>+44 (0)20 0000 0000</u></a>
          </p>

          <div className="footer-links">
            <a href="#">Code of conduct</a>
            <a href="#">FAQ</a>
            <a href="#">Volunteer</a>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="footer-middle">
          <h3><b>Stay in the loop</b></h3>
          <div className="icon-row">
            <a href="#" className="circle">⬠</a>
            <a href="#" className="circle">✕</a>
            <a href="#" className="circle">in</a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">
          <h3><b>From last year's Girlathon</b></h3>

          <div className="image-grid">
            <img src="https://placehold.co/130x90" alt="img1" />
            <img src="https://placehold.co/130x90" alt="img2" />
            <img src="https://placehold.co/130x90" alt="img3" />

            <img src="https://placehold.co/130x160" alt="img4" />
            <img src="https://placehold.co/130x160" alt="img5" />
            <img src="https://placehold.co/130x160" alt="img6" />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p><font color="#444">&copy;  2025 Girlathon Collective. All rights reserved.</font></p>
        <div className="bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
