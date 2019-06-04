import React from "react"
import Layout from "../components/layout"
import styles from "../styles/shop.module.scss"

export default() => (
    <div className = "shop">
        <Layout >
        <div class={styles.shopGridContainer}>
        <div class={styles.left}></div>
        <div class={styles.right}></div>
        </div>

        
        </Layout>
    </div>
)