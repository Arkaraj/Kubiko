import React from "react";
import BreadCrum from "./BreadCrum";
import expImage from "../images/expImage";

const Home = () => {
  return (
    <>
      <BreadCrum path={[]} />
      <div>
        <section className="w3l-main-banner">
          <div className="companies20-content">
            <div className="companies-wrapper">
              <div className="container">
                <div className="banner-item">
                  <div className="banner-view">
                    <div className="banner-info">
                      <h3 className="banner-text">
                        Give Quizzes Anytime, Anywhere.
                        <br /> Accelerate Your Future.
                      </h3>
                      <p className="my-4 mb-sm-5">
                        We believe everyone has the capacity to be creative.
                        Kubiko is a place where people proves their own
                        potential.
                      </p>
                      <br />
                      <a
                        href="#signup.html"
                        className="btn btn-primary theme-button mr-3"
                      >
                        Signup as Teacher
                      </a>
                      <a
                        href="#courses.html"
                        className="btn btn-outline-primary theme-button"
                      >
                        Courses
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  //Main banner section */}
        <section className="w3l-index5" id="about">
          <div className="new-block py-5">
            <div className="container py-lg-3">
              <div className="header-section text-center">
                <h3>How we Teach?</h3>
                <p className="mt-3 mb-5">
                  We amplify important ideas in mathematics education to help
                  teachers grow their practice and our profession. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Enim beatae,
                  facilis voluptatibus repellendus totam autem?
                </p>
                <a href="#signup.html" className="btn btn-primary theme-button">
                  Join our Community
                </a>
              </div>
              <div className="list-single-view mt-5">
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <div className="grids5-info">
                      <a href="#url" className="d-block zoom">
                        <img
                          src={expImage.p1}
                          alt=""
                          className="img-fluid news-image"
                        />
                      </a>
                      <div className="blog-info">
                        <p className="date">Step 01</p>
                        <h4>Join Community</h4>
                        <p className="blog-text">
                          Lorem ipsum dolor sit, icing elit. Nemo veritatis
                          omnis quae quaerat totam culpa odit repellendus
                          reiciendis, aliquid vero, necessitatibus aliquid iure
                          illum quis maxime ducimus veritatis enim.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-single-view mt-3">
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <div className="grids5-info">
                      <a href="#url" className="d-block zoom">
                        <img
                          src={expImage.p2}
                          alt=""
                          className="img-fluid news-image"
                        />
                      </a>
                      <div className="blog-info">
                        <p className="date">Step 02</p>
                        <h4>Learning</h4>
                        <p className="blog-text">
                          Lorem ipsum dolor sit, icing elit. Nemo veritatis
                          omnis quae quaerat totam culpa odit repellendus
                          reiciendis, aliquid vero, necessitatibus aliquid iure
                          illum quis maxime ducimus veritatis enim.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-single-view mt-3">
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <div className="grids5-info">
                      <a href="#url" className="d-block zoom">
                        <img
                          src={expImage.p3}
                          alt=""
                          className="img-fluid news-image"
                        />
                      </a>
                      <div className="blog-info">
                        <p className="date">Step 03</p>
                        <h4>Get the Best Job</h4>
                        <p className="blog-text">
                          Lorem ipsum dolor sit, icing elit. Nemo veritatis
                          omnis quae quaerat totam culpa odit repellendus
                          reiciendis, aliquid vero, necessitatibus aliquid iure
                          illum quis maxime ducimus veritatis enim.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-single-view mt-3">
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <div className="grids5-info">
                      <a href="#url" className="d-block zoom">
                        <img
                          src={expImage.p4}
                          alt=""
                          className="img-fluid news-image"
                        />
                      </a>
                      <div className="blog-info">
                        <p className="date">Step 04</p>
                        <h4>Community</h4>
                        <p className="blog-text">
                          Lorem ipsum dolor sit, icing elit. Nemo veritatis
                          omnis quae quaerat totam culpa odit repellendus
                          reiciendis, aliquid vero, necessitatibus aliquid iure
                          illum quis maxime ducimus veritatis enim.
                        </p>
                      </div>
                    </div>
                  </div>
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
        <section className="w3l-index-block4">
          <div className="feature-16-main py-5">
            <div className="container py-lg-3">
              <div className="header-section text-center">
                <h3>Our Programs</h3>
                <p className="mt-3 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum cumque distinctio eveniet tempore delectus totam
                  ratione repudiandae ipsum vel molestias?
                </p>
              </div>
              <div className="features-grids">
                <div className="row">
                  <div className="col-md-6">
                    <div className="feature-16-gd">
                      <div className="icon">
                        <img
                          src={expImage.seminors}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="feature-16-gd-info">
                        <h4 className="mt-4 mb-2">Group Seminars</h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. In itaque vel libero.
                        </p>
                        <ul>
                          <li>Our job is to make your life easier.</li>
                          <li>Experience students as it should be.</li>
                          <li>Doing the right thing, at the right time.</li>
                          <li>Explore The World Of Our Graduates</li>
                        </ul>
                        <a
                          href="services.html"
                          className="btn btn-primary theme-button mt-4"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-md-0 mt-4">
                    <div className="feature-16-gd">
                      <div className="icon">
                        <img
                          src={expImage.course}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="feature-16-gd-info">
                        <h4 className="mt-4 mb-2">Trending Courses</h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. In itaque vel libero.
                        </p>
                        <ul>
                          <li>Our job is to make your life easier.</li>
                          <li>Experience students as it should be.</li>
                          <li>Doing the right thing, at the right time.</li>
                          <li>Explore The World Of Our Graduates</li>
                        </ul>
                        <a
                          href="services.html"
                          className="btn btn-primary theme-button mt-4"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="feature-16-gd">
                      <div className="icon">
                        <img
                          src={expImage.library}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="feature-16-gd-info">
                        <h4 className="mt-4 mb-2">Large Library</h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. In itaque vel libero.
                        </p>
                        <ul>
                          <li>Our job is to make your life easier.</li>
                          <li>Experience students as it should be.</li>
                          <li>Doing the right thing, at the right time.</li>
                          <li>Explore The World Of Our Graduates</li>
                        </ul>
                        <a
                          href="services.html"
                          className="btn btn-primary theme-button mt-4"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="feature-16-gd">
                      <div className="icon">
                        <img
                          src={expImage.teacher}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="feature-16-gd-info">
                        <h4 className="mt-4 mb-2">Expert Teachers</h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. In itaque vel libero.
                        </p>
                        <ul>
                          <li>Our job is to make your life easier.</li>
                          <li>Experience students as it should be.</li>
                          <li>Doing the right thing, at the right time.</li>
                          <li>Explore The World Of Our Graduates</li>
                        </ul>
                        <a
                          href="services.html"
                          className="btn btn-primary theme-button mt-4"
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
        {/* //subscribe */}
        <section className="w3l-get-started">
          <div className="new-block top-bottom">
            <div className="container">
              <div className="middle-section">
                <div className="section-width">
                  <h2>
                    Start your Business today with this professional template.
                  </h2>
                </div>
                <div className="link-list-menu">
                  <p className="mb-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae sapiente facere amet quas quae, inventore, dolore
                    modi, delectus illum velit magni quod blanditiis nam quasi
                    perspiciatis. Quod cupiditate eum sit!
                  </p>
                  <a
                    href="about.html"
                    className="btn btn-outline-light btn-more"
                  >
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-testimonials" id="testimonials">
          <div className="testimonials py-5">
            <div className="container py-lg-5">
              <div className="header-section text-center">
                <h3>What our Student Saying</h3>
              </div>
              <div className="row mt-4">
                <div className="col-md-10 mx-auto">
                  <div className="owl-one owl-carousel owl-theme">
                    <div className="item">
                      <div className="slider-info mt-lg-4 mt-3">
                        <div className="img-circle">
                          <img
                            src={expImage.s1}
                            className="img-fluid testimonial-img"
                            alt="client pic"
                          />
                        </div>
                        <div className="message">
                          <span
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          />
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea sit id accusantium officia quod quasi
                            necessitatibus perspiciatis Harum error provident
                            quibusdam tenetur.
                          </p>
                          <div className="name mt-4">
                            <h4>Adam Ster</h4>
                            <p>Designation goes here</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="slider-info mt-lg-4 mt-3">
                        <div className="img-circle">
                          <img
                            src={expImage.s2}
                            className="img-fluid testimonial-img"
                            alt="client pic"
                          />
                        </div>
                        <div className="message">
                          <span
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          />
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea sit id accusantium officia quod quasi
                            necessitatibus perspiciatis Harum error provident
                            quibusdam tenetur.
                          </p>
                          <div className="name mt-4">
                            <h4>Dennis Jack</h4>
                            <p>Designation goes here</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="slider-info mt-lg-4 mt-3">
                        <div className="img-circle">
                          <img
                            src={expImage.s3}
                            className="img-fluid testimonial-img"
                            alt="client pic"
                          />
                        </div>
                        <div className="message">
                          <span
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          />
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea sit id accusantium officia quod quasi
                            necessitatibus perspiciatis Harum error provident
                            quibusdam tenetur.
                          </p>
                          <div className="name mt-4">
                            <h4>Camillae</h4>
                            <p>Designation goes here</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="slider-info mt-lg-4 mt-3">
                        <div className="img-circle">
                          <img
                            src={expImage.s4}
                            className="img-fluid testimonial-img"
                            alt="client pic"
                          />
                        </div>
                        <div className="message">
                          <span
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          />
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea sit id accusantium officia quod quasi
                            necessitatibus perspiciatis Harum error provident
                            quibusdam tenetur.
                          </p>
                          <div className="name mt-4">
                            <h4>Charlotte</h4>
                            <p>Designation goes here</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w3l-faq-block py-5">
          <div className="container py-lg-5">
            <div className="header-section mb-4">
              <h3>FAQ</h3>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="list-group" id="list-tab" role="tablist">
                  <a
                    className="list-group-item list-group-item-action active"
                    id="list-home-list"
                    data-toggle="list"
                    href="#list-home"
                    role="tab"
                    aria-controls="home"
                  >
                    Teaching
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    id="list-profile-list"
                    data-toggle="list"
                    href="#list-profile"
                    role="tab"
                    aria-controls="profile"
                  >
                    Courses
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    id="list-messages-list"
                    data-toggle="list"
                    href="#list-messages"
                    role="tab"
                    aria-controls="messages"
                  >
                    Programs
                  </a>
                </div>
              </div>
              <div className="col-md-8 mt-md-0 mt-5">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="list-home"
                    role="tabpanel"
                    aria-labelledby="list-home-list"
                  >
                    <section className="w3l-faq" id="faq">
                      <div className="faq-page">
                        <ul>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>We denounce with righteous?</h2>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptates amet earum velit
                              nobis aliquam laboriosam nihil debitis facere
                              voluptatibus consectetur quae quasi fuga, ad
                              corrupti libero omnis sapiente non assumenda
                              excepturi aperiam iste minima autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>At vero eos iusto odio ducimus qui?</h2>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptates amet earum velit
                              nobis aliquam laboriosam nihil quasi fuga, ad
                              corrupti libero omnis sapiente non assumenda
                              excepturi aperiam animi vitae eos nisi laudantium.
                              Tempore reiciendis ipsam culpa, qui voluptates
                              eveniet, incidunt officiis eaque iste minima
                              autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>
                              But I must explain to you how all this idea?
                            </h2>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptates amet earum velit
                              nobis aliquam laboriosam nihil debitis autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>Sed ut perspiciatis unde omnis?</h2>
                            <p>
                              Sit amet consectetur adipisicing elit. Voluptates
                              amet earum velit nobis aliquam laboriosam nihil
                              debitis animi vitae eos nisi laudantium. Tempore
                              reiciendis ipsam culpa, qui voluptates eveniet,
                              incidunt officiis eaque iste minima autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>
                              The standard chunk of Lorem Ipsum used since the
                              1500s?
                            </h2>
                            <p>
                              Consectetur quae quasi fuga, ad corrupti libero
                              omnis sapiente non assumenda excepturi aperiam
                              animi vitae eos nisi laudantium. Tempore
                              reiciendis ipsam culpa, qui voluptates eveniet,
                              incidunt officiis eaque iste minima autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>
                              There are many variations of passages but the
                              majority?
                            </h2>
                            <p>
                              Voluptates amet earum velit nobis aliquam
                              laboriosam nihil debitis facere voluptatibus
                              consectetur quae quasi fuga, ad corrupti libero
                              omnis sapiente non assumenda, incidunt officiis
                              eaque iste minima autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>
                              But I must explain to you how all this idea?
                            </h2>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptates amet earum velit
                              nobis aliquam laboriosam nihil debitis autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>Sed ut perspiciatis unde omnis?</h2>
                            <p>
                              Sit amet consectetur adipisicing elit. Voluptates
                              amet earum velit nobis aliquam laboriosam nihil
                              debitis animi vitae eos nisi laudantium. Tempore
                              reiciendis ipsam culpa, qui voluptates eveniet,
                              incidunt officiis eaque iste minima autem.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="list-profile"
                    role="tabpanel"
                    aria-labelledby="list-profile-list"
                  >
                    <section className="w3l-faq" id="faq">
                      <div className="faq-page">
                        <ul>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>
                              But I must explain to you how all this idea?
                            </h2>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptates amet earum velit
                              nobis aliquam laboriosam nihil debitis autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>At vero eos iusto odio ducimus qui?</h2>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptates amet earum velit
                              nobis aliquam laboriosam nihil quasi fuga, ad
                              corrupti libero omnis sapiente non assumenda
                              excepturi aperiam animi vitae eos nisi laudantium.
                              Tempore reiciendis ipsam culpa, qui voluptates
                              eveniet, incidunt officiis eaque iste minima
                              autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>Sed ut perspiciatis unde omnis?</h2>
                            <p>
                              Sit amet consectetur adipisicing elit. Voluptates
                              amet earum velit nobis aliquam laboriosam nihil
                              debitis animi vitae eos nisi laudantium. Tempore
                              reiciendis ipsam culpa, qui voluptates eveniet,
                              incidunt officiis eaque iste minima autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>
                              The standard chunk of Lorem Ipsum used since the
                              1500s?
                            </h2>
                            <p>
                              Consectetur quae quasi fuga, ad corrupti libero
                              omnis sapiente non assumenda excepturi aperiam
                              animi vitae eos nisi laudantium. Tempore
                              reiciendis ipsam culpa, qui voluptates eveniet,
                              incidunt officiis eaque iste minima autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>We denounce with righteous?</h2>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptates amet earum velit
                              nobis aliquam laboriosam nihil debitis facere
                              voluptatibus consectetur quae quasi fuga, ad
                              corrupti libero omnis sapiente non assumenda
                              excepturi aperiam iste minima autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>
                              But I must explain to you how all this idea?
                            </h2>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptates amet earum velit
                              nobis aliquam laboriosam nihil debitis autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>At vero eos iusto odio ducimus qui?</h2>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptates amet earum velit
                              nobis aliquam laboriosam nihil quasi fuga, ad
                              corrupti libero omnis sapiente non assumenda
                              excepturi aperiam animi vitae eos nisi laudantium.
                              Tempore reiciendis ipsam culpa, qui voluptates
                              eveniet, incidunt officiis eaque iste minima
                              autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>
                              There are many variations of passages but the
                              majority?
                            </h2>
                            <p>
                              Voluptates amet earum velit nobis aliquam
                              laboriosam nihil debitis facere voluptatibus
                              consectetur quae quasi fuga, ad corrupti libero
                              omnis sapiente non assumenda, incidunt officiis
                              eaque iste minima autem.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="list-messages"
                    role="tabpanel"
                    aria-labelledby="list-messages-list"
                  >
                    <section className="w3l-faq" id="faq">
                      <div className="faq-page">
                        <ul>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>We denounce with righteous?</h2>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptates amet earum velit
                              nobis aliquam laboriosam nihil debitis facere
                              voluptatibus consectetur quae quasi fuga, ad
                              corrupti libero omnis sapiente non assumenda
                              excepturi aperiam iste minima autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>At vero eos iusto odio ducimus qui?</h2>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptates amet earum velit
                              nobis aliquam laboriosam nihil quasi fuga, ad
                              corrupti libero omnis sapiente non assumenda
                              excepturi aperiam animi vitae eos nisi laudantium.
                              Tempore reiciendis ipsam culpa, qui voluptates
                              eveniet, incidunt officiis eaque iste minima
                              autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>
                              But I must explain to you how all this idea?
                            </h2>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptates amet earum velit
                              nobis aliquam laboriosam nihil debitis autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>Sed ut perspiciatis unde omnis?</h2>
                            <p>
                              Sit amet consectetur adipisicing elit. Voluptates
                              amet earum velit nobis aliquam laboriosam nihil
                              debitis animi vitae eos nisi laudantium. Tempore
                              reiciendis ipsam culpa, qui voluptates eveniet,
                              incidunt officiis eaque iste minima autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>
                              The standard chunk of Lorem Ipsum used since the
                              1500s?
                            </h2>
                            <p>
                              Consectetur quae quasi fuga, ad corrupti libero
                              omnis sapiente non assumenda excepturi aperiam
                              animi vitae eos nisi laudantium. Tempore
                              reiciendis ipsam culpa, qui voluptates eveniet,
                              incidunt officiis eaque iste minima autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>
                              There are many variations of passages but the
                              majority?
                            </h2>
                            <p>
                              Voluptates amet earum velit nobis aliquam
                              laboriosam nihil debitis facere voluptatibus
                              consectetur quae quasi fuga, ad corrupti libero
                              omnis sapiente non assumenda, incidunt officiis
                              eaque iste minima autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>
                              But I must explain to you how all this idea?
                            </h2>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptates amet earum velit
                              nobis aliquam laboriosam nihil debitis autem.
                            </p>
                          </li>
                          <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h2>perspiciatis unde omnis?</h2>
                            <p>
                              Sit amet consectetur adipisicing elit. Voluptates
                              amet earum velit nobis aliquam laboriosam nihil
                              debitis animi vitae eos nisi laudantium. Tempore
                              reiciendis ipsam culpa, qui voluptates eveniet,
                              incidunt officiis eaque iste minima autem.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="w3l-subscribe">
          <div className="subscription-infhny">
            <div className="container-fluid">
              <div className="subscription-grids row">
                <div className="subscription-right form-right-inf col-lg-6 p-md-5 p-4">
                  <div className="px-lg-5 py-md-0 py-3">
                    <div className="header-section">
                      <h3>
                        Join us for FREE to get instant{" "}
                        <span>email updates!</span>
                      </h3>
                      <p className="mt-3">
                        Subscribe and get notified at first on the latest update
                        and offers!
                      </p>
                    </div>
                    <form
                      action="#"
                      method="post"
                      className="signin-form mt-lg-5 mt-4"
                    >
                      <div className="forms-gds">
                        <div className="form-input">
                          <input
                            type="email"
                            name
                            placeholder="Your email here"
                            required
                          />
                        </div>
                        <div className="form-input">
                          <button className="btn btn-primary theme-button">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="subscription-left forms-25-info col-lg-6 "></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
