import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

/* Static images */
import ai from "../images/chatbot.svg";
import collaborate from "../images/team.svg";
import innovate from "../images/innovate.svg";
import build from "../images/program.svg";
import "../styles/home.css";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Home = () => {
  const images = useStaticQuery(graphql`
    query {
      socialImpact: file(relativePath: { eq: "workshop.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      training: file(relativePath: { eq: "trainings.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hangouts: file(relativePath: { eq: "fun-hangouts.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trestle: file(relativePath: { eq: "trestle.jpeg" }) {
        id
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <section id="header">
        <div className="container">
          <div className="row header">
            <div className="col-md-6">
              <h1>
                Trestle Academy <br /> Ghana (TAG)
              </h1>
              <em>Empowering Innovators to change the world!</em>
            </div>
            <div className="text-center col-md-6">
              <img src={ai} alt="AIM logo" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <hr id="down" />
      <section id="what-we-do">
        <div className="container">
          <div className="row what-we-do">
            <div className="order-2 col-md-6 order-md-1">
              <h2 className="sub-heading">Talent Discovery</h2>
              <p>
                We believe there is a large talent pool in Africa waiting to be
                discovered and developed to benefit the industry. That is why we
                are continually looking and developing talents across Africa to
                feed industry.
              </p>
            </div>
            <div className="order-1 col-md-6 order-md-2">
              <img src={collaborate} className="img-fluid" alt="collaborate" />
            </div>
          </div>
          <div className="row what-we-do">
            <div className="col-md-6">
              <img src={innovate} className="img-fluid" alt="innovate" />
            </div>
            <div className="col-md-6">
              <h2 className="sub-heading">Innovation</h2>
              <p>
                Innovation is the bedrock of our activities. We encourage and
                celebrate all forms of innovation especially with the use of
                emerging technologies like Artificial Intelligence.
              </p>
            </div>
          </div>
          <div className="row what-we-do">
            <div className="order-2 col-md-6 order-md-1">
              <h2 className="sub-heading">Build</h2>
              <p>
                We provide an environment and tools need to build solutions that
                add value to the world. We believe that most of the problem in
                our communities can be solved by young people.
              </p>
            </div>
            <div className="order-1 col-md-6 order-md-2">
              <img src={build} className="img-fluid" alt="build" />
            </div>
          </div>
        </div>
      </section>
      <section id="activities">
        <div className="container">
          <div className="row">
            <div className="text-center col-md-12">
              <h2 className="sub-heading">Activities</h2>
              <p>We are changing the world through technology</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 activity">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Projects that impact society</h5>
                </div>
                <Img
                  fluid={images.socialImpact.childImageSharp.fluid}
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-4 activity">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Tech trainings</h5>
                </div>
                <Img
                  fluid={images.training.childImageSharp.fluid}
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-4 activity">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Fun hungouts</h5>
                </div>
                <Img
                  fluid={images.hangouts.childImageSharp.fluid}
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="news-and-update">
        <div className="container">
          <div className="text-center row">
            <div className="col-md-12">
              <h2 className="sub-heading">News and Updates</h2>
              <p>
                We have been involved with our ever-growing community, and are
                happy to share our achievements with you. For many years, we
                have been making a difference in the lives of youth in Africa.
                Get involve today!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="partnership">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Img
                fixed={images.trestle.childImageSharp.fixed}
                className="img-fluid"
                alt="trestle"
              />
            </div>
            <div className="col-md-6">
              <h2 className="sub-heading">Trestle Academy</h2>
              <p>
                Partnership with Trestle Group Foundation to organize Trestle
                Academy just ended in glorious success!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="training">
        <div className="container">
          <div className="text-center row">
            <div className="col-md-12">
              <h2 className="sub-heading">Ai Training</h2>
              <p>
                Every Friday at the Department of Computer Science, University
                of Ghana.
              </p>
              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
