import React from 'react'
import {Link} from "gatsby"
import styles from "../styles/navbar.module.css"


export default Navbar => (
<div className={styles.navbar}>
<div className={styles.nav}>
<ul className = {styles.list}>
    <li className={styles.list__item}>Shop</li>
    <li className={styles.list__item}>About</li>
    <li className={styles.list__item}>Contact</li>
</ul>
</div>
</div>
)