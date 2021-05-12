import React from "react";
import iconImage from "../images/logo-icon.png";

const Navbar = () => {
  return (
    <>
      <header className="w3l-header">
        <div className="hero-header-11">
          <div className="hero-header-11-content">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light py-md-2 py-0 px-0">
                <img src={iconImage} alt="" />
                <a className="navbar-brand" href="index.html">
                  Kubiko
                </a>
                {/* if logo is image enable this   
				<a class="navbar-brand" href="#index.html">
						<img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
				</a> */}
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon fa icon-expand fa-bars" />
                  <span className="navbar-toggler-icon fa icon-close fa-times" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item @@about-active">
                      <a className="nav-link" href="about.html">
                        About
                      </a>
                    </li>
                    <li className="nav-item @@services-active">
                      <a className="nav-link" href="services.html">
                        Services
                      </a>
                    </li>
                    <li className="nav-item @@contact-active">
                      <a className="nav-link" href="contact.html">
                        Login/Register
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
