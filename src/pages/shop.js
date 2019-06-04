import React, { Component } from "react"
import Layout from "../components/layout"
import styles from "../styles/shop.module.scss"
import Product from "./product"

export default() => (
    <div className = "shop">
        <Layout >
        <div className={styles.shopGridContainer}>
        <div className={styles.left}></div>
        <div className={styles.right}>
      
            <Product/>
            
        </div>
        </div>

        
        </Layout>
    </div>
)