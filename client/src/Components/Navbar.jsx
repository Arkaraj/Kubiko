import React, { useContext } from "react";
import iconImage from "../images/logo-icon.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import AuthService from "../Services/AuthService";

const Navbar = (props) => {
  const { user, setUser, setIsAuthenticated, isAuthenticated } = useContext(
    AuthContext
  );

  const logoutUser = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  return (
    <>
      <header className="w3l-header">
        <div className="hero-header-11">
          <div className="hero-header-11-content">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light py-md-2 py-0 px-0">
                <img src={iconImage} alt="" />
                <Link className="navbar-brand" to="/">
                  Kubiko
                </Link>
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
                      <Link className="nav-link" to="/">
                        Home <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item @@about-active">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item @@services-active">
                      <Link className="nav-link" to="/service">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item @@contact-active">
                      {!isAuthenticated ? (
                        <Link className="nav-link" to="/login">
                          Login/Register
                        </Link>
                      ) : (
                        <Link
                          className="nav-link"
                          to={user.role === "student" ? "/student" : "/teacher"}
                        >
                          {user.name}
                        </Link>
                      )}
                    </li>
                    {isAuthenticated ? (
                      <li className="nav-item @@services-active">
                        <button
                          onClick={logoutUser}
                          style={{ color: "beige" }}
                          type="button"
                          className="nav-link btn btn-danger"
                        >
                          Logout
                        </button>
                      </li>
                    ) : null}
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
