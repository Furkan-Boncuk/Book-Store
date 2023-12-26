import React, { useEffect, useState } from 'react'
import styles from "./bookDetail.module.css"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../../context/CartContext'

const BookDetail = () => {
  const [book, setBook] = useState(null)
  const [isBookDataLoading, setIsBookDataLoading] = useState(false)

  const {addItemToCart} = useCart()

  const { id } = useParams()

  useEffect(() => {
    const fetchSingleBookData = async (id) => {
      setIsBookDataLoading(true)
      try {
        const bookData = await getBookById(id)
        console.log(bookData)
        setBook(bookData)
        setIsBookDataLoading(false)
        console.log(book)
      } catch (error) {
        console.error(error)
      }
    }

    fetchSingleBookData(id)
  }, [id])

  const handleAddToCart = () => {
    book && addItemToCart(book)
  }

  return (
    <div className={styles.bookDetailContainer}>
      {
        isBookDataLoading
          ?
          <></>
          :
          book &&
          <div className={styles.book} key={book?.id}>
            <div className={styles.bookDetail}>
              <div className={styles.bookImageContainer}>
                <img
                  className={styles.bookImage}
                  src={book?.volumeInfo?.imageLinks?.thumbnail || "/bookPicturePlaceholderImage.png"}
                  alt='Book Thumbnail'
                />
              </div>
              <div className={styles.bookDetailContainer}>
                <div className={styles.bookTitle}>
                  {book?.volumeInfo?.title}
                </div>
                <div className={styles.bookSubtitle}>
                  <div className={styles.detailText}>Subtitle</div>
                  {book?.volumeInfo?.subtitle || "-"}
                </div>
                <div className={styles.bookAuthor}>
                  <div className={styles.detailText}>Author</div>
                  {book?.volumeInfo?.authors || "-"}
                </div>
                <div className={styles.bookPublisher}>
                  <div className={styles.detailText}>Publisher </div>
                  {book?.volumeInfo?.publisher || "-"}
                </div>
                <div className={styles.bookPublishDate}>
                  <div className={styles.detailText}>Published Date </div>
                  {book?.volumeInfo?.publishedDate || "-"}
                </div>
                <div className={styles.bookPageCount}>
                  <div className={styles.detailText}>Page Count </div>
                  {book?.volumeInfo?.pageCount || "-"}
                </div>
                <div className={styles.bookLanguage}>
                  <div className={styles.detailText}>Language </div>
                  {book?.volumeInfo?.language || "-"}
                </div>
                <div className={styles.bookPrice}>
                  {book?.saleInfo?.listPrice?.amount ? book?.saleInfo?.listPrice?.amount + "  " + book?.saleInfo?.listPrice?.currencyCode : "NOT_FOR_SALE"}
                </div>
                <button
                  className={styles.addToCartButton}
                  onClick={handleAddToCart}
                  >
                  <FontAwesomeIcon className={styles.cartIcon} icon={faCartPlus} />
                  Add To Cart
                </button>
              </div>
            </div>
            <div className={styles.bookMoreDetails}>
              <div className={styles.bookMoreDetailsTitle}>
                Book Description
              </div>
              <div dangerouslySetInnerHTML={{ __html: book?.volumeInfo?.description }}
                className={styles.bookDescription}>
              </div>
              <div className={styles.bookCategories}>
                <div className={styles.detailText}>Categories </div>
                {book?.volumeInfo?.categories?.length > 0 ? book?.volumeInfo?.categories.map((category) => (<ul><li>{category}</li></ul>)) : book?.volumeInfo?.categories ? book?.volumeInfo?.categories : "-"}
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export const getBookById = async (id) => {
  try {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes/" + id)

    if (!response.ok) throw new Error()

    const data = await response.json()

    console.log(data)

    return data

  } catch (error) {
    throw new Error(error.message)
  }
}

export default BookDetail