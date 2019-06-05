import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
      
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <div style={{border:"1px solid black", margin:20, display:"inline-block"}} key={node.slug}>
              <h3
                style={{
                  marginBottom: "10px",
                }}
              >
                <Link style={{ color: `white`, boxShadow: `none` }} to={node.slug}>
                  {title}
                </Link>
              </h3>
            
              <p style={{color:`white`}}> {node.subtitle} </p>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        }
      }
        allContentfulPost {
        edges {
          node {
            title
            subtitle
            author
            slug
        }
      }
    }
  }
`
