import React from "react"
import { Link } from "gatsby"
import styles from "../styles/navbar.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'


export default Navbar => (
  <div className={styles.navbar}>
    <div className={styles.navbar__nav}>
      <ul className={styles.list}>
      <li className={styles.list__item}>
          <Link
            style={{ color: "white" }}
            activeStyle={{ color: "#bdbdbd", borderBottom: "1px solid white" }}
            to="/home/"
          >
            Home
          </Link>
        </li>


        <li className={styles.list__item}>
          <Link
            style={{ color: "white" }}
            activeStyle={{ color: "#bdbdbd", borderBottom: "1px solid white" }}
            to="/shop/"
          >
            Shop
          </Link>
        </li>

        <li className={styles.list__item}>
          <Link
            style={{ color: "white" }}
            activeStyle={{ color: "#bdbdbd", borderBottom: "1px solid white" }}
            to="/blog/"
          >
            Blog
          </Link>
          </li>
        <li className={styles.list__item}>
          <Link
            style={{ color: "white" }}
            activeStyle={{ color: "#bdbdbd", borderBottom: "1px solid white" }}
            to="/contact/"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>

    <div className={styles.navbar__user}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <Link
            style={{ color: "white" }}
            activeStyle={{ color: "#bdbdbd", borderBottom: "1px solid white" }}
            to="/profile/"
          >
            <FontAwesomeIcon style={{marginRight: 10}} icon={faUserAlt} />
            Profile
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link
            style={{ color: "white" }}
            activeStyle={{ color: "#bdbdbd", borderBottom: "1px solid white" }}
            to="/basket/"
          >
            <FontAwesomeIcon style={{marginRight: 10}} icon={faShoppingBasket} />
            Basket
          </Link>
        </li>
      </ul>
    </div>
    
      </div>
)
