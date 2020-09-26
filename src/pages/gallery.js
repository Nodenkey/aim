import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/gallery.css';
import Layout from "../components/layout";

const Gallery = () => {
  return (
    <Layout>
      <section id="gallery-header">
        <div className="container">
          <div className="row gallery-header">
            <FontAwesomeIcon icon="lock" className="lock"/>
            <h5 className="mt-3">Coming soon...</h5>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Gallery;
