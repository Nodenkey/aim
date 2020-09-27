import React from "react"
import {Link} from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo";
import "../styles/error.css";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found"/>
        <div className="container" style={{margin: "100px auto"}}>
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <Link to="/" className="send-home"><p>Take me home</p></Link>
        </div>
    </Layout>
)

export default NotFoundPage
