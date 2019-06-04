import React from "react"
import Layout from "../components/layout"
import styles from "../styles/shop.module.scss"

import Products from "../components/allproducts"


export default() => (
    <div className = "shop">
        <Layout >
        <div className={styles.shopGridContainer}>
        <div className={styles.left}>
        <Products />
        </div>
        <div className={styles.right}>
      
            
            
        </div>
        </div>

        
        </Layout>
    </div>
)