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
      <div className={styles.footerTitle}>Our Products</div>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus iure reiciendis. Quasi officiis vero soluta optio atque ut beatae!</span>
      </div>

      <div className={styles.contact}>
        <div className={styles.footerTitle}>Contact Us</div>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus iure reiciendis. Quasi officiis vero soluta optio atque ut beatae!</span>
      </div>
    </div>
  )
}

export default Footer