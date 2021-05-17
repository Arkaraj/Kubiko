import React from "react";
import ExpImg from "../images/expImage";

export default function About() {
  return (
    <>
      <div>
        <section className="w3l-about1" id="about">
          <div id="cwp23-block" className="py-5">
            <div className="container py-lg-5">
              <div className="row cwp23-content align-items-center">
                <div className="col-lg-6 cwp23-text">
                  <div className="cwp23-title">
                    <h3>Welcome to the Professional Education Theme! </h3>
                  </div>
                  <div className="cwp23-text-cols">
                    <div className="column">
                      <span className="fa fa-smile-o" aria-hidden="true" />
                      <a href="services.html">Group Seminars</a>
                      <p>
                        consectetur adipisicing elit, sed do eiusmod tempor{" "}
                      </p>
                    </div>
                    <div className="column">
                      <span
                        className="fa fa-graduation-cap"
                        aria-hidden="true"
                      />
                      <a href="services.html">Trending Courses</a>
                      <p>
                        consectetur adipisicing elit, sed do eiusmod tempor{" "}
                      </p>
                    </div>
                    <div className="column">
                      <span className="fa fa-history" aria-hidden="true" />
                      <a href="services.html">Large Library</a>
                      <p>
                        consectetur adipisicing elit, sed do eiusmod tempor{" "}
                      </p>
                    </div>
                    <div className="column">
                      <span className="fa fa-users" aria-hidden="true" />
                      <a href="services.html">Expert Teachers</a>
                      <p>
                        consectetur adipisicing elit, sed do eiusmod tempor{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-5 cwp23-img">
                  <img src={ExpImg.g6} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* stats */}
        <section className="w3l-stats py-lg-5 py-4" id="stats">
          <div className="gallery-inner container py-md-5 py-4">
            <div className="row stats-con text-white">
              <div className="col-md-3 col-6 stats_info counter_grid">
                <span className="fa fa-smile-o" />
                <p className="counter">196</p>
                <h4>Complete Courses</h4>
              </div>
              <div className="col-md-3 col-6 stats_info counter_grid1">
                <span className="fa fa-graduation-cap" />
                <p className="counter">96</p>
                <h4>Certified Teachers</h4>
              </div>
              <div className="col-md-3 col-6 stats_info counter_grid mt-md-0 mt-5">
                <span className="fa fa-history" />
                <p className="counter">25</p>
                <h4>Years of Experience</h4>
              </div>
              <div className="col-md-3 col-6 stats_info counter_grid2 mt-md-0 mt-5">
                <span className="fa fa-users" />
                <p className="counter">890</p>
                <h4>Students Enrolled</h4>
              </div>
            </div>
          </div>
        </section>
        {/* //stats */}
        <section className="w3l-courses">
          <div className="blog py-5" id="courses">
            <div className="container py-lg-5">
              <div className="header-section text-center">
                <h3 className="mb-2">Various courses to choose from</h3>
              </div>
              <div className="row mt-md-5 mt-4">
                <div className="col-md-12 mx-auto">
                  <div className="owl-two owl-carousel owl-theme">
                    <div className="item">
                      <div className="card">
                        <div className="card-header p-0 position-relative">
                          <a href="#url" className="zoom d-block">
                            <img
                              className="card-img-bottom d-block"
                              src={ExpImg.g1}
                              alt="Card cap"
                            />
                          </a>
                          <div className="author">
                            <div className="author-image">
                              <img
                                src={ExpImg.s2}
                                className="img-fluid rounded-circle"
                                title="Adam Ster"
                                alt="author"
                              />
                            </div>
                            <div className="course-title">
                              <a href="#url">Course Title</a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body course-details">
                          <div className="price-review d-flex justify-content-between mb-1align-items-center">
                            <p>$149</p>
                            <a href="#url" className="reviews d-inline-block">
                              (56 Reviews)
                            </a>
                          </div>
                          <a href="#url" className="course-desc">
                            At vero eos et accusam et justo uo dolores
                          </a>
                        </div>
                        <div className="card-footer course-price-view">
                          <ul className="blog-list">
                            <li>
                              <a href="#url">
                                <span className="fa fa-heart" /> 98
                              </a>
                            </li>
                            <li>
                              <a href="#url">
                                <span className="fa fa-user" /> 15
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="card-header p-0 position-relative">
                          <a href="#url" className="zoom d-block">
                            <img
                              className="card-img-bottom d-block"
                              src="assets/images/g2.jpg"
                              alt="Card cap"
                            />
                          </a>
                          <div className="author">
                            <div className="author-image">
                              <img
                                src="assets/images/student3.jpg"
                                className="img-fluid rounded-circle"
                                title="Adam Ster"
                                alt="author"
                              />
                            </div>
                            <div className="course-title">
                              <a href="#url">Course Title</a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body course-details">
                          <div className="price-review d-flex justify-content-between mb-1align-items-center">
                            <p>$149</p>
                            <a href="#url" className="reviews d-inline-block">
                              (56 Reviews)
                            </a>
                          </div>
                          <a href="#url" className="course-desc">
                            At vero eos et accusam et justo uo dolores
                          </a>
                        </div>
                        <div className="card-footer course-price-view">
                          <ul className="blog-list">
                            <li>
                              <a href="#url">
                                <span className="fa fa-heart" /> 98
                              </a>
                            </li>
                            <li>
                              <a href="#url">
                                <span className="fa fa-user" /> 15
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="card-header p-0 position-relative">
                          <a href="#url" className="zoom d-block">
                            <img
                              className="card-img-bottom d-block"
                              src={ExpImg.g3}
                              alt="Card cap"
                            />
                          </a>
                          <div className="author">
                            <div className="author-image">
                              <img
                                src={ExpImg.s4}
                                className="img-fluid rounded-circle"
                                title="Adam Ster"
                                alt="author"
                              />
                            </div>
                            <div className="course-title">
                              <a href="#url">Course Title</a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body course-details">
                          <div className="price-review d-flex justify-content-between mb-1align-items-center">
                            <p>$149</p>
                            <a href="#url" className="reviews d-inline-block">
                              (56 Reviews)
                            </a>
                          </div>
                          <a href="#url" className="course-desc">
                            At vero eos et accusam et justo uo dolores
                          </a>
                        </div>
                        <div className="card-footer course-price-view">
                          <ul className="blog-list">
                            <li>
                              <a href="#url">
                                <span className="fa fa-heart" /> 98
                              </a>
                            </li>
                            <li>
                              <a href="#url">
                                <span className="fa fa-user" /> 15
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="card-header p-0 position-relative">
                          <a href="#url" className="zoom d-block">
                            <img
                              className="card-img-bottom d-block"
                              src={ExpImg.g5}
                              alt="Cardcap"
                            />
                          </a>
                          <div className="author">
                            <div className="author-image">
                              <img
                                src={ExpImg.s1}
                                className="img-fluid rounded-circle"
                                title="Adam Ster"
                                alt="author"
                              />
                            </div>
                            <div className="course-title">
                              <a href="#url">Course Title</a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body course-details">
                          <div className="price-review d-flex justify-content-between mb-1align-items-center">
                            <p>$149</p>
                            <a href="#url" className="reviews d-inline-block">
                              (56 Reviews)
                            </a>
                          </div>
                          <a href="#url" className="course-desc">
                            At vero eos et accusam et justo uo dolores
                          </a>
                        </div>
                        <div className="card-footer course-price-view">
                          <ul className="blog-list">
                            <li>
                              <a href="#url">
                                <span className="fa fa-heart" /> 98
                              </a>
                            </li>
                            <li>
                              <a href="#url">
                                <span className="fa fa-user" /> 15
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Intro section */}
        <section className="w3l-intro" id="intro">
          <div className="new-block top-bottom">
            <div className="container">
              <div className="middle-section text-center">
                <div className="section-width mb-5">
                  <h2 className="mb-5">
                    We are true to ourselves, and commit to always perform at
                    our best.
                  </h2>
                  <a
                    href="contact.html"
                    className="btn btn-light theme-button py-2 px-5"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  //Intro section */}
        {/* team */}
        <section className="w3l-team" id="team">
          <div className="team-block py-5">
            <div className="container py-lg-5">
              <div className="wthree-title">
                <div className="header-section text-center">
                  <h3 className="mb-2">Meet Our Teachers</h3>
                  <p>
                    Vestibulum volutpat non eros ut vulputate. Nunc id risus
                    accumsan Donec mi nulla, auctor nec sem a, ornare auctor mi.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-6 mt-5">
                  <div className="box16">
                    <a href="#url">
                      <img src={ExpImg.s1} alt="" className="img-fluid" />
                    </a>
                    <div className="box-content">
                      <h3 className="title">
                        <a href="#url">Victoria</a>
                      </h3>
                      <span className="post">Director</span>
                      <ul className="social">
                        <li>
                          <a href="/" className="facebook">
                            <span className="fa fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="/" className="twitter">
                            <span className="fa fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mt-5">
                  <div className="box16">
                    <a href="#url">
                      <img src={ExpImg.s2} alt="" className="img-fluid" />
                    </a>
                    <div className="box-content">
                      <h3 className="title">
                        <a href="#url">Michael</a>
                      </h3>
                      <span className="post">Managing Director</span>
                      <ul className="social">
                        <li>
                          <a href="#" className="facebook">
                            <span className="fa fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="twitter">
                            <span className="fa fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mt-5">
                  <div className="box16">
                    <a href="#url">
                      <img src={ExpImg.s3} alt="" className="img-fluid" />
                    </a>
                    <div className="box-content">
                      <h3 className="title">
                        <a href="#url">George</a>
                      </h3>
                      <span className="post">Designer</span>
                      <ul className="social">
                        <li>
                          <a href="#" className="facebook">
                            <span className="fa fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="twitter">
                            <span className="fa fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mt-5">
                  <div className="box16">
                    <a href="#url">
                      <img src={ExpImg.s4} alt="" className="img-fluid" />
                    </a>
                    <div className="box-content">
                      <h3 className="title">
                        <a href="#url">George</a>
                      </h3>
                      <span className="post">Designer</span>
                      <ul className="social">
                        <li>
                          <a href="#" className="facebook">
                            <span className="fa fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="twitter">
                            <span className="fa fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mt-5">
                  <div className="box16">
                    <a href="#url">
                      <img src={ExpImg.s1} alt="" className="img-fluid" />
                    </a>
                    <div className="box-content">
                      <h3 className="title">
                        <a href="#url">Victoria</a>
                      </h3>
                      <span className="post">Director</span>
                      <ul className="social">
                        <li>
                          <a href="#" className="facebook">
                            <span className="fa fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="twitter">
                            <span className="fa fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mt-5">
                  <div className="box16">
                    <a href="#url">
                      <img src={ExpImg.s2} alt="" className="img-fluid" />
                    </a>
                    <div className="box-content">
                      <h3 className="title">
                        <a href="#url">Michael</a>
                      </h3>
                      <span className="post">Managing Director</span>
                      <ul className="social">
                        <li>
                          <a href="#" className="facebook">
                            <span className="fa fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="twitter">
                            <span className="fa fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //team */}
        <section className="w3l-quote py-5">
          <div className="container py-lg-3">
            <h3>Want to Join?</h3>
            <p>Lorem ipsum dolor sit amet elit. Nisi facere reprehenderit!</p>
            <a href="contact.html" className="btn btn-secondary theme-button">
              Become a Teacher
            </a>
            <a
              href="#signup.html"
              className="btn btn-outline-secondary theme-button ml-2"
            >
              Sign Up
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
