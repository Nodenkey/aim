import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby"

import '../styles/blog.css';
import Layout from "../components/layout";
import SEO from "../components/seo";

const Blog = () => {

    const data = useStaticQuery(graphql`
    query {
  allContentfulBlogPost (
    sort : {
      fields:publishedDate,
      order: DESC
    }
  ) {
    edges {
      node {
        title
        slug
        publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
    `);

    return (
        <Layout>
            <SEO title='Blog'/>
            <div className="container blog-wrapper">
                <h1 style={{marginBottom: '2rem'}}>Blog Posts</h1>
                <ol className="list-container">
                    {
                        data.allContentfulBlogPost.edges.map((edge, index) =>
                            <Link to={`/blog/${edge.node.slug}`} className="container post-link" key={index}>
                                <li className="post-item">
                                    <h2>{edge.node.title}</h2>
                                    <small className="post-date">{edge.node.publishedDate}</small>
                                </li>
                            </Link>
                        )
                    }

                </ol>

            </div>
        </Layout>
    )
}

export default Blog;
