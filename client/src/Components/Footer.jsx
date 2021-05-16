/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w3l-footer-29-main" id="footer">
      <div className="footer-29 py-5">
        <div className="container pb-lg-3">
          <div className="row footer-top-29">
            <div className="col-lg-4 col-md-6 footer-list-29 footer-1 mt-md-4">
              <Link className="footer-logo mb-md-3 mb-2" to="/">
                <img src="assets/images/logo-icon.png" alt="" />
                Kubiko
              </Link>
              <p>
                We amplify important ideas in mathematics education to help
                teachers grow their practice and our profession. Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-lg-2 col-md-6 footer-list-29 footer-2 mt-5">
              <h6 className="footer-title-29">Explore More</h6>
              <ul>
                <li>
                  <a href="#gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="#courses.html">Courses</a>
                </li>
                <li>
                  <a href="#landing-single.html">Landing Page</a>
                </li>
                <li>
                  <a href="#signup.html">Apply Now</a>
                </li>
                <li>
                  <a href="contact.html">Buy Course Online</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-list-29 footer-3 mt-5">
              <div className="properties">
                <h6 className="footer-title-29">Recent Post</h6>
                <a className="d-grid twitter-feed" href="#blog-single.html">
                  <img
                    src="assets/images/g1.jpg"
                    className="img-fluid rounded"
                    alt=""
                  />
                  <p>
                    How to get Programming language Cartification in 45 days.
                  </p>
                </a>
                <a className="d-grid twitter-feed" href="#blog-single.html">
                  <img
                    src="assets/images/g2.jpg"
                    className="img-fluid rounded"
                    alt=""
                  />
                  <p>
                    Top class learning from anywhere Lorem ipsum dolor sit amet.
                  </p>
                </a>
                <a className="d-grid twitter-feed" href="#blog-single.html">
                  <img
                    src="assets/images/g3.jpg"
                    className="img-fluid rounded"
                    alt=""
                  />
                  <p>
                    Improving lives through learning Lorem ipsum dolor sit amet.
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footer-list-29 footer-4 mt-5">
              <h6 className="footer-title-29">Quick Links</h6>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="#blog.html"> Blog</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="footers14-block" className="py-3">
        <div className="container">
          <div className="footers14-bottom text-center">
            <div className="social">
              <a href="#facebook" className="facebook">
                <span className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href="#google" className="google">
                <span className="fa fa-google-plus" aria-hidden="true" />
              </a>
              <a href="#twitter" className="twitter">
                <span className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href="#instagram" className="instagram">
                <span className="fa fa-instagram" aria-hidden="true" />
              </a>
              <a href="#youtube" className="youtube">
                <span className="fa fa-youtube" aria-hidden="true" />
              </a>
            </div>
            <div className="copyright mt-1">
              <p>
                © 2020 Kubiko. All Rights Reserved | Design by{" "}
                <a href="https://w3layouts.com/">Kubiko</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* move top */}
      <button onclick="topFunction()" id="movetop" title="Go to top">
        <span className="fa fa-angle-up" aria-hidden="true" />
      </button>
      {/* /move top */}
    </footer>
  );
};

export default Footer;
