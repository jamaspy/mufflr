import React from "react"
import {Link} from "gatsby"
import Navbar from "./navbar"

export default ({ children }) => (
    <div>
    <Navbar />
        
        {children}
  
    </div>
)