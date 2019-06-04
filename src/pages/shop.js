import React from "react"
import Layout from "../components/layout"
import styles from "../styles/shop.module.scss"
import Product from "../components/product"

export default() => (
    <div className = "shop">
        <Layout >
        <div class={styles.shopGridContainer}>
        <div class={styles.left}></div>
        <div class={styles.right}>
            <Product/>
        </div>
        </div>

        
        </Layout>
    </div>
)