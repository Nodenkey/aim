import React from "react";
import { Link } from "gatsby";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import "./index.css";

const Navbar = () => {
  const image = useStaticQuery(graphql`
    query {
        logo: file(relativePath: {eq: "logo.png"}) {
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
    <section id="navbar">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <Img fluid={image.logo.childImageSharp.fluid} className="logo img-fluid" alt="AIM logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" activeClassName="active-nav" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active-nav" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active-nav" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active-nav" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active-nav" to="/contact">
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donate">
                  Donate
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
