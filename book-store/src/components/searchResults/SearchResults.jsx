import React from 'react'
import styles from "./searchResults.module.css"
import { useState, useEffect } from 'react'
import BookCardItem from '../bookCardItem/BookCardItem'
import BookCardItemSkeleton from '../bookCardItemSkeleton/BookCardItemSkeleton'


const SearchResults = ({searchTerm, }) => {
    const [searchResults, setSearchResults] = useState(null)
    const [isResultsLoading, setIsResultsLoading] = useState(false)

    useEffect(() => {
        const fetchSearchResults = async (searchTerm) => {
          setIsResultsLoading(true)
          try {
            const result = await getBooksBySearchTerm(searchTerm)
            setSearchResults(result)
            setIsResultsLoading(false)
            console.log(result)
          } catch(error) {
            console.error(error)
          }
        }
    
        fetchSearchResults(searchTerm)
    }, [searchTerm])

    return (
        <div className={styles.searchResultsContainer}>
            <div className={styles.searchResultsTitle}>
               Search results for "{searchTerm}" {searchResults?.length > 0 && ` (${searchResults?.length})`}
            </div>
            <div className={styles.resultList}>
                {
                    isResultsLoading
                    ?
                    <BookCardItemSkeleton replay={4} />
                    :
                    searchResults 
                    ? 
                    searchResults.map((result) => (
                        <div className={styles.searchResult} key={result.id}>
                            <BookCardItem book={result} isPopular={false} />
                        </div>
                    )) 
                    :
                    <div className={styles.notFound}>No Results Found</div>
                }
            </div>
        </div>
    )
}

export const getBooksBySearchTerm = async (searchTerm) => {
    try {
      const response = await fetch("https://www.googleapis.com/books/v1/volumes?q="+searchTerm)
      
      if(!response.ok) throw new Error()
  
      const data = await response.json()
  
      return data.items
  
    } catch(error) {
      throw new Error(error.message)
    }
}

export default SearchResults