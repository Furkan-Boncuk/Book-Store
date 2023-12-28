import React, { useEffect, useState } from 'react'
import styles from "./homepage.module.css"
import PopularBookCardItem from '../../components/bookCardItem/BookCardItem'
import PopularCardItemSkeleton from '../../components/bookCardItemSkeleton/BookCardItemSkeleton'
import SearchResults from '../../components/searchResults/SearchResults'
import BookCardItem from '../../components/bookCardItem/BookCardItem'
import BookCardItemSkeleton from '../../components/bookCardItemSkeleton/BookCardItemSkeleton'

const Homepage = ({searchTerm}) => {
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [books, setBooks] = useState(null)

  useEffect(() => {
    const fetchPopularBooks = async () => {
      setIsDataLoading(true)
      try {
        const bookData = await getPopularBooks()
        setBooks(bookData)
        setIsDataLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPopularBooks()
  }, [])

  return (
    <div className={styles.homepageContainer}>
      {
        searchTerm && <SearchResults searchTerm={searchTerm} />
      }
      <h1 className={styles.homepageTitle}>
        Popular Books
      </h1>
      <div className={styles.popularBookList}>
        {
          isDataLoading
            ?
            <BookCardItemSkeleton replay={10} />
            :
            books && books.map((book) => (
              <BookCardItem key={book?.id} book={book} isPopular={true} />
            ))
        }
      </div>
    </div>
  )
}

export const getPopularBooks = async () => {
  try {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:popularity")

    if (!response.ok) throw new Error()

    const data = await response.json()

    return data.items

  } catch (error) {
    throw new Error(error.message)
  }
}

export default Homepage