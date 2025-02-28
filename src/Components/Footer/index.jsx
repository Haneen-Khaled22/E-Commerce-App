import React from "react";
import { FaFacebook, FaInstagram, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer container py-5">
      <div className="row align-items-center">
        
        {/* Left Section - Logo & Socials */}
        <div className="col-md-5 col-12 text-center text-md-start mb-4 mb-md-0">
          <h3 className="fw-bold">EliteWear</h3>
          <p className="text-muted">Optimize your design process</p>
          <div className="d-flex gap-3 justify-content-center justify-content-md-start">
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaSquareXTwitter size={24} />
            <FaYoutube size={24} />
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="col-md-7 col-12">
          <div className="row text-center text-md-start">
            
            <div className="col-6 col-md-3">
              <h6 className="fw-bold text-dark">Product</h6>
              <ul className="list-unstyled">
                <li>Overview</li>
                <li>Pricing</li>
                <li>Customer Stories</li>
                <li>Integrations</li>
                <li>Security</li>
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <h6 className="fw-bold text-dark">Resources</h6>
              <ul className="list-unstyled">
                <li>Blog</li>
                <li>Guides & Tutorials</li>
                <li>Help Center</li>
                <li>What's New</li>
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <h6 className="fw-bold text-dark">Templates</h6>
              <ul className="list-unstyled">
                <li>Landing</li>
                <li>Dashboard</li>
                <li>Login & Sign Up</li>
                <li>Payment</li>
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <h6 className="fw-bold text-dark">Company</h6>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Media Kit</li>
                <li>Contact Support</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
