import React from "react"
import styles from "../styles/layout.module.css"
import Navbar from "./navbar"

export default ({ children }) => (
    <div>
    <Navbar />
        
        {children}
  
    </div>
)