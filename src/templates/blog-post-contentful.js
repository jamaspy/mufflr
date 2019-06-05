import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"


class BlogPostContentfulTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.title}
          description={post.subtitle}
        />
      <div style={{maxWidth:"80vw", margin:"0 auto"}}>
        <h1 style={{color:"white"}}>{post.title}</h1>
        <img style={{maxWidth:"100%", marginTop:20}} src={post.image.fluid.src} alt={post.title}/>
        <div style={{color:"white"}}dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }}/>
        <Bio />
        
        
   
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulPost( slug: { eq: $slug }){
      title
      subtitle
      author
      image{
        fluid{
          src
        }
      }
      content {
        childContentfulRichText{
          html
        }
      }
    }
  }
`
