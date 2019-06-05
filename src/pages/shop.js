import React from "react"
import Layout from "../components/layout"
import Products from "../components/allproducts"
import styles from "../styles/shop.module.scss"

export default() => (
    
        <Layout >
            <div className = {styles.shop}>
        <div className={styles.shop__products}>
        <Products />
        </div>
        </div>
        
        </Layout>
    
)