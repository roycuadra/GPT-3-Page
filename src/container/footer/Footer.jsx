import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.svg";
function Footer() {
  return (
    <footer className="gpt3__footer">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-container">
        <div className="gpt3__footer-container_logo">
          <div>
            <img src={Logo} alt="logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
        </div>

        <div className="gpt3__footer-container_links">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-container_links">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-container_links">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copy">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
