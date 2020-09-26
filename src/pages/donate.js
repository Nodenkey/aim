import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/donate.css';
import Layout from "../components/layout";

const Donate = () => {
  return (
    <Layout>
      <section id="donate-header">
        <div className="container">
          <div className="row donate-header">
            <FontAwesomeIcon icon="lock" className="lock"/>
            <h5 className="mt-3">Coming soon...</h5>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Donate;
