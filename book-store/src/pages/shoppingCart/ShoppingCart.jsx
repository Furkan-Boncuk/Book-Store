import ShoppingCartItem from "../../components/shoppingCartItem/ShoppingCartItem"
import {useCart} from "../../context/CartContext"
import styles from "./shoppingCart.module.css"

const ShoppingCart = () => {
  const {cartState} = useCart()
  const {items} = cartState

  console.log(items)
  
  return (
    <div className={styles.shoppingCartContainer}>
      <div className={styles.cartTitle}>
        Your Cart
      </div>

      <div className={styles.orderContainer}>
        <div className={styles.itemList}>
          {
            items && 
            items.map((item) => (
              <ShoppingCartItem book={item} />
            ))
          }
        </div>
        <div className={styles.orderSummaryCard}>
          <div className={styles.cardTitle}>Order Summary</div>

          <div className={styles.numberOfProduct}>{3 > 1 ? 3 + " Products" : 3 + " Product"} </div>

          <div className={styles.amountContainer}>
            <div className={styles.amountText}>Payment : </div>
            <div className={styles.amount}>{15} TRY</div>
          </div>

          <button className={styles.buyButton}>
            Buy
          </button>

        </div>
      </div>
    </div>
  )
}

export default ShoppingCart