import React from "react"
import Layout from "../components/layout"
import styles from "../styles/home.module.scss"
import {StaticQuery, graphql} from "gatsby"

export default() => (
/* <StaticQuery
        query={graphql`
        {
        allStripeSku {
            edges {
              node {
                id
                currency
                price
                attributes {
                  name
                }
              }
            }
          }
        }
        `}
        render={data => (
             */
    <div className = "shop">
        <Layout >
        
        <div className={styles.shopGridContainer}>
          
        <div className={styles.left}>
          <p className={styles.heading}>welcome to mufflr</p>
          <p className={styles.subheading}>where fashion meets function</p>
          <div className={styles.welcome}>
            <p className={styles.welcome__content}>
              
            </p>
            
          </div>
        </div>

        <div className={styles.right}></div>
        



        </div>

        
        </Layout>
    </div>
// )}

// />

)