import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Img from "gatsby-image";

import "../styles/about.css";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "../components/seo";

const About = () => {
  const images = useStaticQuery(graphql`
    query {
      weare: file(relativePath: { eq: "us.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dan: file(relativePath: { eq: "dan.webp" }) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wonders: file(relativePath: { eq: "wonders.webp" }) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samuel: file(relativePath: { eq: "samuel.jpeg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jamal: file(relativePath: { eq: "jamal.webp" }) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      apati: file(relativePath: { eq: "apati.webp" }) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aseda: file(relativePath: { eq: "aseda.webp" }) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      josh: file(relativePath: { eq: "josh.webp" }) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      simon: file(relativePath: { eq: "simon.webp" }) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      registry: file(relativePath: { eq: "ml-registry.webp" }) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      workshop: file(relativePath: { eq: "workshop.webp" }) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="About us" />
      <section id="about-header">
        <div className="container">
          <div className="row about-header">
            <div className="order-2 col-md-6 order-md-1">
              <h1>Who we are</h1>
              <p>
                Trestle Academy -Ghana(TAG) is a non-profit that is helping
                young people acquire the most crucial skills in Tech that gives
                them an unfair advantage in the 21st Century. We provide an
                environment for young people to Discover their potentials,
                Innovate and Build real-world projects that solves crucial
                problems in the world.
              </p>
              <br />
              <h2>Vision</h2>
              <i>
                Our vision is to Empower people to impact lives through 21st
                Century Skills acquisition, dynamic business opportunities, and
                innovative products.
              </i>
            </div>
            <div className="col-md-6">
              <Img
                fluid={images.weare.childImageSharp.fluid}
                className="img-fluid"
                alt="who we are"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="meet-the-team">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <h2 className="text-center"> Meet The Team</h2>
              <p className="text-center">
                Our team of dedicated, passionate and enthusiastic individuals
                from different background ensures your time with us is most
                fruitful and exciting.
              </p>
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="0"
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="1"
                  />
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="2"
                  />
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="3"
                  />
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="4"
                  />
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="5"
                  />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Img
                      fluid={images.dan.childImageSharp.fluid}
                      className="slider-img"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block slider-caption">
                      <h5>Boadzie Daniel</h5>
                      <p>Director | Lead Instructor (AI Engineer).</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <Img
                      fluid={images.wonders.childImageSharp.fluid}
                      className="slider-img img-fluid"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block slider-caption">
                      <h5>Aggor Wonders</h5>
                      <p>
                        Deputy Director, Innovation & Enterpreneurship (UI/UX
                        Designer)
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <Img
                      fluid={images.samuel.childImageSharp.fluid}
                      className="slider-img img-fluid"
                      alt="..."
                      style={{ height: 200 }}
                    />
                    <div className="carousel-caption d-none d-md-block slider-caption">
                      <h5>Samuel Odenkey Abbey</h5>
                      <p>
                        Deputy Director, Software Development(Fullstack
                        Developer)
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <Img
                      fluid={images.jamal.childImageSharp.fluid}
                      className="slider-img img-fluid"
                      alt="..."
                      style={{ height: 200 }}
                    />
                    <div className="carousel-caption d-none d-md-block slider-caption">
                      <h5>Dr. Jamal-Deen Abdulai</h5>
                      <p>
                        Board Chairman.(Head of Computer Science Department)
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <Img
                      fluid={images.aseda.childImageSharp.fluid}
                      className="slider-img img-fluid"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block slider-caption">
                      <h5>Aseda Addai-Deseh</h5>
                      <p>
                        Senior Program Officer, Policy & Advocacy(Data
                        Scientist)
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <Img
                      fluid={images.josh.childImageSharp.fluid}
                      className="slider-img img-fluid"
                      alt="..."
                      style={{ height: 200 }}
                    />
                    <div className="carousel-caption d-none d-md-block slider-caption">
                      <h5>Joshua Ayayi</h5>
                      <p>
                        Senior Program Officer, Regulatory Affairs(Business
                        Developer)
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-projects">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <h2 className="text-center">Projects</h2>
              <p className="text-center">
                We continue to commit to building and collaborating on solutions
                and projects that impact society.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 about-card-wrapper">
              <div
                className="card about-card"
                style={{ width: "20rem", margin: "auto" }}
              >
                <Img
                  fluid={images.registry.childImageSharp.fluid}
                  className="card-img-top"
                  alt="ML App Registry"
                />
                <div className="card-body about-card-body">
                  <h4 className="card-title">ML App Registry</h4>
                  <p className="card-text">
                    Machine Learning apps that analyzes user Sentiment, predict
                    Salary and predict Iris flower classes.
                  </p>
                  <a
                    href="https://ml-app-rig.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="card about-card"
                style={{ width: "20rem", margin: "auto" }}
              >
                <Img
                  fluid={images.workshop.childImageSharp.fluid}
                  className="card-img-top"
                  alt="Trestle Academy"
                />
                <div className="card-body about-card-body">
                  <h4 className="card-title">Trestle Academy</h4>
                  <p className="card-text">
                    Partnership with Trestle Group Foundation to train people in
                    Data Science. These skills are changing lives.
                  </p>
                  <a
                    href="https://www.trestlegroup.com/"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-social-handles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about-social-handles">
                <span>
                  <FontAwesomeIcon icon={faFacebook} className="facebook" />
                </span>
                <span>
                  <FontAwesomeIcon icon={faTwitter} className="twitter" />
                </span>
                <span>
                  <FontAwesomeIcon icon={faYoutube} className="youtube" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
