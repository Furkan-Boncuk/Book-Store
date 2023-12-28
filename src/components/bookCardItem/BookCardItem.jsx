import React, { useState } from 'react'
import styles from "./bookCardItem.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const BookCardItem = ({ book, isPopular }) => {
    const [displayAddToCartButton, setDisplayAddToCartButton] = useState(false)
    
    const {addItemToCart} = useCart()

    const handleAddToCart = () => {
        addItemToCart(book)
    }

    return (
        <div
            className={`${styles.popularBook} ${styles[displayAddToCartButton ? "shadow" : ""]}`}
            key={book?.id}
            onMouseMove={() => setDisplayAddToCartButton(true)}
            onMouseLeave={() => setDisplayAddToCartButton(false)}
        >
            {
                isPopular &&
                <div className={styles.popularTicket}>
                    Popular
                </div>
            }

            <Link to={`/detail/${book.id}`}>
                <img
                    src={book?.volumeInfo?.imageLinks?.smallThumbnail || "/bookPicturePlaceholderImage.png"}
                    className={styles.bookImage}
                    alt='Book Picture'
                />
            </Link>

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

            <Link to={`/detail/${book.id}`}>
                <div className={styles.bookPrice}>
                    {book?.saleInfo?.listPrice?.amount ? book?.saleInfo?.listPrice?.amount + "  " +book?.saleInfo?.listPrice?.currencyCode : "NOT_FOR_SALE" }
                </div>
            </Link>

            <button
                className={`${styles.addToCartButton} ${styles[displayAddToCartButton ? "display" : "hide"]}`}
                onClick={handleAddToCart}
            >
                <FontAwesomeIcon className={styles.cartIcon} icon={faCartPlus} />
                Add To Cart
            </button>
        </div>
    )
}

export default BookCardItem