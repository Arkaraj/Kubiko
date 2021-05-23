import React from "react";

const Contact = () => {
  return (
    <>
      {/* contact form */}
      <section className="w3l-contacts-12" id="contact">
        <div className="container py-5">
          <div className="contacts12-main py-md-3">
            <div className="header-section text-center">
              <h3 className="mb-md-5 mb-4">Fill out the form.</h3>
            </div>
            <form
              action="https://sendmail.w3layouts.com/submitForm"
              method="post"
              className
            >
              <div className="main-input">
                <input
                  type="text"
                  name="w3lName"
                  placeholder="Enter your name"
                  className="contact-input"
                  required
                />
                <input
                  type="email"
                  name="w3lSender"
                  placeholder="Enter your mail"
                  className="contact-input"
                  required
                />
                <input
                  type="email"
                  name="w3lSubject"
                  placeholder="Subject"
                  className="contact-input"
                />
                <textarea
                  className="contact-textarea contact-input"
                  name="w3lMessage"
                  placeholder="Enter your message"
                  required
                  defaultValue={""}
                />
              </div>
              <div className="text-right">
                <button className="btn-secondary btn theme-button">Send</button>
              </div>
            </form>
          </div>
        </div>
        <div className="contant11-top-bg py-5">
          <div className="container py-lg-3">
            <div className="d-grid contact section-gap">
              <div className="contact-info-left d-grid">
                <div className="contact-info">
                  <div className="icon">
                    <span className="fa fa-location-arrow" aria-hidden="true" />
                  </div>
                  <div className="contact-details">
                    <h4>Address:</h4>
                    <p>Lorem dolor sit, New York, USA</p>
                  </div>
                </div>
                <div className="contact-info">
                  <div className="icon">
                    <span className="fa fa-phone" aria-hidden="true" />
                  </div>
                  <div className="contact-details">
                    <h4>Phone:</h4>
                    <p>
                      <a href="tel:+598-658-456">+598-658-456</a>
                    </p>
                    <p>
                      <a href="tel:+598-658-457">+598-658-457</a>
                    </p>
                  </div>
                </div>
                <div className="contact-info">
                  <div className="icon">
                    <span
                      className="fa fa-envelope-open-o"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="contact-details">
                    <h4>Mail:</h4>
                    <p>
                      <a href="mailto:mail@example.com" className="email">
                        info@teach.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:mail@example.com" className="email">
                        teach@support.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001161.424489281!2d-78.01909140705047!3d42.72866436845163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1570786994395!5m2!1sen!2sin" frameBorder={0} allowFullScreen />
  </div> */}
      </section>
      {/* //contact form */}
    </>
  );
};

export default Contact;
