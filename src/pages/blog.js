import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/blogcard.module.scss"

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
            <div className={styles.displayCards}>
            <div className={styles.card} key={node.slug}>
            <Link to={node.slug}> 
              <div className={styles.card__head}>
              <img src={node.image.fluid.src} alt={node.title} style={{width:"100%", height:300}}/>
                <h3>
                  <Link style={{ color: `white`, boxShadow: `none`, fontWeight: 300, fontSize:"2rem" }} to={node.slug}>
                    {title}
                  </Link>
                </h3>
              </div>
            </Link>
              <div className={styles.card__body}>
              <p style={{color:`white`}}> {node.subtitle} </p>
              </div>
            </div>
            
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
            image{
              fluid{
                src
              }
            }
        }
      }
    }
  }
`
