import React from "react";
import expImage from "../images/expImage";

const Service = () => {
  return (
    <>
      <div>
        {/* //breadcrum */}
        {/*  servcies section */}
        <div className="w3l-services1 pt-5" id="services">
          <div className="container pt-lg-3">
            <div className="aboutgrids row">
              <div className="col-lg-6 aboutgrid2">
                <img src={expImage.g1} alt="about" className="img-fluid" />
              </div>
              <div className="col-lg-6 aboutgrid1 my-lg-0 my-5">
                <h4>Having fun while learning is possible</h4>
                <p>
                  Lorem ipsum dolor sit amet adipisicing elit. Quae blanditiis
                  porro facere qui impedit dolor doloribus.
                </p>
                <ul className="services-list mt-4">
                  <li>Learn Courses Online</li>
                  <li>Highly Qualified Teachers</li>
                  <li>Book Library &amp; Stores</li>
                  <li>Apply for Scholarship</li>
                </ul>
                <a
                  href="contact.html"
                  className="btn btn-outline-secondary theme-button"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="aboutbottom py-5">
            <div className="container py-lg-3">
              <div className="bottomgrids row no-gutters">
                <div className="col-lg-4 col-md-6 bottomgrid1 mt-lg-0 mt-0">
                  <span className="fa fa-phone" />
                  <h4>
                    <a className="service-title" href="#url">
                      Free Call Support
                    </a>
                  </h4>
                  <p className="service-text">
                    Donec et venenatis libero. Fusceing dapibus pulvinar
                    tincidunt. Proin maximus ipsum ut scelerisque.
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 bottomgrid1 mt-md-0 mt-5">
                  <span className="fa fa-users" />
                  <h4>
                    <a className="service-title" href="#url">
                      Highly Qualified Teachers
                    </a>
                  </h4>
                  <p className="service-text">
                    Donec et venenatis libero. Fusceing dapibus pulvinar
                    tincidunt. Proin maximus ipsum ut scelerisque.
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 bottomgrid1 mt-lg-0 mt-5">
                  <span className="fa fa-book" />
                  <h4>
                    <a className="service-title" href="#url">
                      Book Library &amp; Stores
                    </a>
                  </h4>
                  <p className="service-text">
                    Donec et venenatis libero. Fusceing dapibus pulvinar
                    tincidunt. Proin maximus ipsum ut scelerisque.
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 bottomgrid1 mt-5">
                  <span className="fa fa-smile-o" />
                  <h4>
                    <a className="service-title" href="#url">
                      The best discount
                    </a>
                  </h4>
                  <p className="service-text">
                    Donec et venenatis libero. Fusceing dapibus pulvinar
                    tincidunt. Proin maximus ipsum ut scelerisque.
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 bottomgrid1 mt-5">
                  <span className="fa fa-laptop" />
                  <h4>
                    <a className="service-title" href="#url">
                      Learn Courses Online
                    </a>
                  </h4>
                  <p className="service-text">
                    Donec et venenatis libero. Fusceing dapibus pulvinar
                    tincidunt. Proin maximus ipsum ut scelerisque.
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 bottomgrid1 mt-5">
                  <span className="fa fa-phone" />
                  <h4>
                    <a className="service-title" href="#url">
                      Free Call Support
                    </a>
                  </h4>
                  <p className="service-text">
                    Donec et venenatis libero. Fusceing dapibus pulvinar
                    tincidunt. Proin maximus ipsum ut scelerisque.
                  </p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
        </div>
        {/*  //servcies section */}
        <section className="w3l-services2">
          <div className="feature-16-main py-5">
            <div className="container py-lg-3">
              <div className="header-section text-center">
                <h3>Featured Services</h3>
                <p className="mt-3 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="features-grids">
                <div className="row">
                  <div className="col-lg-4 col-md-6 featured-service">
                    <div className="feature-16-gd">
                      <div className="icon">
                        <span className="fa fa-laptop" aria-hidden="true" />
                      </div>
                      <div className="feature-16-gd-info">
                        <h4 className="mt-4 mb-2">
                          <a href="#url">Learn Courses Online</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Impedit placeat eum tempore eligendi, fugiat,
                          animi neque odit quasi eos molestiae tenetur. Sequi
                          rerum mollitia quaerat!
                        </p>
                        <a
                          href="#url"
                          className="btn btn-outline-primary theme-button mt-4"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 featured-service">
                    <div className="feature-16-gd">
                      <div className="icon">
                        <span className="fa fa-smile-o" aria-hidden="true" />
                      </div>
                      <div className="feature-16-gd-info">
                        <h4 className="mt-4 mb-2">
                          <a href="#url">Learn Courses Online</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Impedit placeat eum tempore eligendi, fugiat,
                          animi neque odit quasi eos molestiae tenetur. Sequi
                          rerum mollitia quaerat!
                        </p>
                        <a
                          href="#url"
                          className="btn btn-outline-primary theme-button mt-4"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 featured-service">
                    <div className="feature-16-gd">
                      <div className="icon">
                        <span className="fa fa-book" aria-hidden="true" />
                      </div>
                      <div className="feature-16-gd-info">
                        <h4 className="mt-4 mb-2">
                          <a href="#url">Learn Courses Online</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Impedit placeat eum tempore eligendi, fugiat,
                          animi neque odit quasi eos molestiae tenetur. Sequi
                          rerum mollitia quaerat!
                        </p>
                        <a
                          href="#url"
                          className="btn btn-outline-primary theme-button mt-4"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 featured-service">
                    <div className="feature-16-gd">
                      <div className="icon">
                        <span className="fa fa-user" aria-hidden="true" />
                      </div>
                      <div className="feature-16-gd-info">
                        <h4 className="mt-4 mb-2">
                          <a href="#url">Learn Courses Online</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Impedit placeat eum tempore eligendi, fugiat,
                          animi neque odit quasi eos molestiae tenetur. Sequi
                          rerum mollitia quaerat!
                        </p>
                        <a
                          href="#url"
                          className="btn btn-outline-primary theme-button mt-4"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 featured-service">
                    <div className="feature-16-gd">
                      <div className="icon">
                        <span className="fa fa-laptop" aria-hidden="true" />
                      </div>
                      <div className="feature-16-gd-info">
                        <h4 className="mt-4 mb-2">
                          <a href="#url">Learn Courses Online</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Impedit placeat eum tempore eligendi, fugiat,
                          animi neque odit quasi eos molestiae tenetur. Sequi
                          rerum mollitia quaerat!
                        </p>
                        <a
                          href="#url"
                          className="btn btn-outline-primary theme-button mt-4"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 featured-service">
                    <div className="feature-16-gd">
                      <div className="icon">
                        <span className="fa fa-smile-o" aria-hidden="true" />
                      </div>
                      <div className="feature-16-gd-info">
                        <h4 className="mt-4 mb-2">
                          <a href="#url">Learn Courses Online</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Impedit placeat eum tempore eligendi, fugiat,
                          animi neque odit quasi eos molestiae tenetur. Sequi
                          rerum mollitia quaerat!
                        </p>
                        <a
                          href="#url"
                          className="btn btn-outline-primary theme-button mt-4"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Service;
