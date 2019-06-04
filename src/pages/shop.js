import React from "react"
import Layout from "../components/layout"
import styles from "../styles/shop.module.scss"
import {StaticQuery, graphql} from "gatsby"
import Card from "../components/card"
export default() => (
<StaticQuery
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
            
    <div className = "shop">
        <Layout >
        
        <div className={styles.shopGridContainer}>

        <div className={styles.left}>
             <Card name="Jacket"/>
        </div>

        <div className={styles.right}>
        
        </div>
        



        </div>

        
        </Layout>
    </div>
)}

/>

)