import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import GoogleApiWrapper from "../components/Map/index"


import contactUs from "../images/contact.svg";

import "../styles/contact.css";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = () => {

  const handleSubmit = e => {
    e.preventDefault();

    console.log("submitting");
  };
  return (
    <Layout>
      <SEO title='Contact us'/>
      <section id="header">
        <div className="container">
          <div className="row header">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <h3 className="text-center mb-4">Contact Us</h3>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Type your message here..."
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img
                src={contactUs}
                className="img-fluid "
                alt="contact-us"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="google-map">
        <div className="container">
          <div className="col-md-12" style={{padding: 0}}>
            <GoogleApiWrapper />
          </div>
        </div>
      </section>
      <section id="contact-social-handles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-social-handles">
                <span>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="facebook"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="twitter"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="youtube"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
