import { Link } from "react-router-dom"
import ShoppingCartItem from "../../components/shoppingCartItem/ShoppingCartItem"
import { useCart } from "../../context/CartContext"
import styles from "./shoppingCart.module.css"
import { useEffect } from "react"

const ShoppingCart = () => {
  const { cartState, getTotalPrice } = useCart()
  const { items, totalPrice, totalItems } = cartState

  useEffect(() => {
    getTotalPrice()
  },[cartState?.items])

  return (
    <div className={styles.shoppingCartContainer}>
      <div className={styles.cartTitle}>
        Your Cart
      </div>

      {
        items.length > 0 ?
          <div className={styles.orderContainer}>
            <div className={styles.itemList}>
              {
                items &&
                items.map((item) => (
                  <ShoppingCartItem book={item} key={item.id} />
                ))
              }
            </div>
            <div className={styles.orderSummaryCard}>
              <div className={styles.cardTitle}>Order Summary</div>

              <div className={styles.numberOfProduct}>{totalItems > 1 ? totalItems + " Products" : totalItems + " Product"} </div>

              <div className={styles.amountContainer}>
                <div className={styles.amountText}>Payment : </div>
                <div className={styles.amount}>{totalPrice ? totalPrice + " TRY" : "FREE"}</div>
              </div>

              <Link to="/payment">
                <button className={styles.buyButton}>
                  Buy
                </button>
              </Link>
            </div>
          </div>
          :
          <div className={styles.emptyCartContainer}>
            <img
              className={styles.cartImage}
              src="/emptyCartImage.png"
              alt="Empty Cart"
            />
            <div className={styles.emptyCartTitle}>Your Cart is Empty</div>
            <div className={styles.emptyCartSubtitle}>Keep Shopping</div>
            <Link to="/">
              <button className={styles.homepageButton}>
                Return to Homepage
              </button>
            </Link>
          </div>
      }

    </div>
  )
}

export default ShoppingCart