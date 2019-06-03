import React from "react"
import styles from "../styles/layout.module.scss"
import Navbar from "./navbar"

export default ({ children }) => (
    <div className={styles.layout}>
    <Navbar />
        
        {children}
  
    </div>
)