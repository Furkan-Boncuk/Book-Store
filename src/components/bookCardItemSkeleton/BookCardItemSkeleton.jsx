import React from 'react'
import styles from "./bookCardItemSkeleton.module.css"

const BookCardItemSkeleton = ({ replay }) => {
    const skeletons = []

    for (var i = 0; i < replay; i++) {
        skeletons.push(
            <div className={styles.popularBook} key={i}>
                <div className={styles.bookImage}></div>
                <div className={styles.bookTitle}></div>
                <div className={styles.bookAuthor}></div>
                <div className={styles.addToCartButton}></div>
            </div>
        )
    }

    return (
        <>
            {skeletons}
        </>
    )
}


export default BookCardItemSkeleton