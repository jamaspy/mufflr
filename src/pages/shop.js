import React from "react"
import Layout from "../components/layout"
import styles from "../styles/shop.module.scss"

export default() => (
    <div className = "shop">
        <Layout >
        <div class={styles.shopGridContainer}>
        <div class={styles.left}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ad odio necessitatibus saepe adipisci ut, fugiat veritatis sit incidunt exercitationem deleniti accusamus, dignissimos hic aliquid minus. Mollitia quo fugiat corporis?</div>
        <div class={styles.right}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, accusantium adipisci. Exercitationem sapiente ipsam maiores, ut veniam aspernatur inventore impedit, enim voluptas atque blanditiis, molestias voluptatem corporis? Repellat, ad illum!</div>
        </div>

        
        </Layout>
    </div>
)