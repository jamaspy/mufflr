const path = require(`path`)


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post-contentful.js`)
  return graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              title
              subtitle
              slug
              image {
                fluid {
                  src
                }
              }
              content {
                childContentfulRichText {
                  html
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulPost.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.slug,
        component: blogPost,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}
exports.createCard = ({ graphql, actions }) => {
  const { createCard } = actions

  const blogPost = path.resolve(`./src/pages/blog.js`)
  return graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              title
              subtitle
              slug
              image {
                fluid {
                  src
                }
              }
              content {
                childContentfulRichText {
                  html
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulPost.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createCard({
        path: post.node.slug,
        component: blogPost,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}