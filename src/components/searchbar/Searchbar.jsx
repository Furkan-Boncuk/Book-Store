import React, { useState } from 'react'
import styles from "./searchbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Searchbar = ({onSearch}) => {
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (e) => {
    setSearchInput(e.target.value)
    onSearch(e.target.value)
  }

  // const handleButtonClick = () => {
    
  // }

  return (
    <div className={styles.searchbarContainer}>
      <div className={styles.searchbarSection}>
        <FontAwesomeIcon className={styles.searchIcon} icon={faMagnifyingGlass} />
        <input 
          className={styles.searchInput}
          type='search'
          placeholder='Search for books by title or author...'
          value={searchInput}
          onChange={handleChange}  
          />
        <button className={styles.searchButton} 
            // onClick={() => handleButtonClick}
            >
            Search
        </button>
      </div>
    </div>
  )
}

export default Searchbar