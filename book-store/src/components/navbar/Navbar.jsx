import React, { useEffect } from 'react'
import styles from "./navbar.module.css"
import Searchbar from "../searchbar/Searchbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const Navbar = ({ onSearch }) => {
    const { cartState, getTotalItems } = useCart()
    const { totalItems } = cartState

    useEffect(() => {
        getTotalItems()
    }, [cartState?.items])
  
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
                        <div className={styles.cartItemBadge}>
                            {totalItems}
                        </div>
                    </div>
                </Link>

                <div className={styles.userAccount}>
                    <img
                        className={styles.userAccountPlaceholderImage}
                        src='/UserAccountPlaceholderImage.png'
                        alt='Profile'
                    />
                </div>
            </div>

        </div>
    )
}

export default Navbar