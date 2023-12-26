import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
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

      <div className={styles.products}>
        Our Products
      </div>

      <div className={styles.contact}>
        Contact Us
      </div>
    </div>
  )
}

export default Footer