import React from 'react'
import styles from "./navbar.module.css"
import Searchbar from "../searchbar/Searchbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = ({ onSearch }) => {
    return (
        <div className={styles.navbarContainer}>
            <Link to="/">
                <div className={styles.logo}>
                    <img
                        className={styles.logoImage}
                        src="/BookStore.png"
                        alt='Logo'
                    />
                    <div className={styles.logoText}>
                        Book Store
                    </div>
                </div>
            </Link>

            <div className={styles.searchbar}>
                <Searchbar onSearch={onSearch} />
            </div>

            <div className={styles.userSection}>
                <Link to="/cart">
                    <div className={styles.shoppingCart}>
                        <FontAwesomeIcon className={styles.navbarIcon} icon={faShoppingCart} />
                    </div>
                </Link>

                <div className={styles.userAccount}>
                    <img
                        className={styles.userAccountPlaceholderImage}
                        src='/UserAccountPlaceholderImage.png'
                        alt='Profile Picture'
                    />
                </div>
            </div>

        </div>
    )
}

export default Navbar