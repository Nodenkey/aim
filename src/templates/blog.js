import React from 'react';
import Layout from "../components/layout";
import {graphql} from "gatsby";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import "../styles/blog-template.css";
import SEO from "../components/seo";
import Code from "../components/codeDisplay";


export const query = graphql`
        query($slug: String!) {
            contentfulBlogPost (slug: {eq: $slug}) {
                title
                publishedDate(formatString: "MMMM Do, YYYY")
                body {
                    json
                }
            }
        }
    
    `

const Blog = (props) => {

    const options = {
        renderNode : {
            //select nodeType to customise
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title["en-US"];
                const url= node.data.target.fields.file["en-US"].url;
                return <img className="blog-image" alt={alt} src={url}/>
            },
            [INLINES.EMBEDDED_ENTRY]: node => {
                const markdown = node.data.target.fields.snippet["en-US"];
                return <Code markdown={markdown}/>;
            },
        }
    }

    return (
        <Layout>
            <SEO title={props.data.contentfulBlogPost.title}/>
            <div className="container" style={{margin: "100px auto"}}>
                <div style={{marginBottom: 100}}>
                    <h1>{props.data.contentfulBlogPost.title}</h1>
                    <p>{props.data.contentfulBlogPost.publishedDate}</p>
                </div>
                {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            </div>
        </Layout>
    );
};

export default Blog;
