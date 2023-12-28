import React from 'react'
import styles from "./shoppingCartItem.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import { CartProvider, useCart } from '../../context/CartContext'

const ShoppingCartItem = ({ book }) => {
    const { increaseItem, decreaseItem } = useCart()

    const handleIncreaseItem = () => {
        increaseItem(book)
    }

    const handleDecreaseItem = () => {
        decreaseItem(book)
    }

    return (
        // <CartProvider>
            <div className={styles.shoppingCartBook} key={book?.id} >
                <Link to={`/detail/${book.id}`}>
                    <img
                        src={book?.volumeInfo?.imageLinks?.smallThumbnail || "/bookPicturePlaceholderImage.png"}
                        className={styles.bookImage}
                        alt='Book Picture'
                    />
                </Link>

                <div className={styles.productInfo}>
                    <div className={styles.productName}>
                        <Link to={`/detail/${book.id}`}>
                            <div className={styles.bookTitle}>
                                {book?.volumeInfo?.title?.length > 45 ? book?.volumeInfo?.title.substring(0, 45) + "..." : book?.volumeInfo?.title}
                            </div>
                        </Link>

                        <Link to={`/detail/${book.id}`}>
                            <div className={styles.bookAuthor}>
                                {book?.volumeInfo?.authors?.length > 3 ? book?.volumeInfo?.authors[0] + ", " + book?.volumeInfo?.authors[1] + ", " + book?.volumeInfo?.authors[2] + "..." : book?.volumeInfo?.authors}
                            </div>
                        </Link>
                    </div>
                </div>

                <div className={styles.numberOfProductSection}>
                    <div className={styles.numberOfProductContainer}>
                        <button
                            className={styles.numberOfProductButton}
                            onClick={handleDecreaseItem}>
                            <FontAwesomeIcon className={styles.productButtonIcon} icon={faMinus} />
                        </button>
                        <div className={styles.stick}>|</div>
                        <div className={styles.numberOfProductText}> {book?.piece} </div>
                        <div className={styles.stick}>|</div>
                        <button
                            className={styles.numberOfProductButton}
                            onClick={handleIncreaseItem}>
                            <FontAwesomeIcon className={styles.productButtonIcon} icon={faPlus} />
                        </button>
                    </div>
                </div>

                <div className={styles.productPrice}>
                    <Link to={`/detail/${book.id}`}>
                        <div className={styles.bookPrice}>
                            {book?.saleInfo?.listPrice?.amount ? book?.saleInfo?.listPrice?.amount + "  " + book?.saleInfo?.listPrice?.currencyCode : "NOT_FOR_SALE"}
                        </div>
                    </Link>
                </div>
            </div>
        // </CartProvider>
    )
}

export default ShoppingCartItem