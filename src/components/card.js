import React from "react"
import styles from "../styles/card.module.scss"
import Image from "../components/image"
import Button from "../components/button"
export default (props) =>(

<div className={styles.card}>
    <div className={styles.card__head}>
        <Image />
    </div>
    <div className={styles.card__body}>
        <h2>{props.name}</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam odio corrupti recusandae ducimus at! Quae saepe corrupti eveniet obcaecati illo nostrum, odio ex voluptatibus, magnam, a cumque rem ut ad.</p>
    </div>
    <div className={styles.card__action}>
        <Button />
    </div>

</div>

)