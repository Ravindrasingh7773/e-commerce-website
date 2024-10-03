import React, { Fragment } from 'react'
import styles from "./style.module.css"
import CloseIcon from '../../icons/closeIcon' 
import StarIcon from '../../icons/starIcon'
import InStockIcon from '../../icons/InStockIcon'
import OutStockIcon from '../../icons/outStockIcon'

const CartItem = ({item,IfCardItem}) => {
  console.log(item.price)
const handleTotal = () =>{
  return item.price * item.quantity;
 
}
const totalStars = 5;

  return (
   <Fragment>
     { IfCardItem ?
      (
      <div className={styles.cart_item}>
      <div className={styles.ci_left}>
        <div className={styles.product_img}>
          <img src={item.image} alt='product img' />
        </div>
        <div className={styles.save_price}>
          save<span> $49</span>
        </div>
      </div>
      <div className={styles.ci_right}>
        
      <div className={styles.pi_rating}>
              <span className={styles.pir_stars}>
                {[...Array(totalStars)].map((_, index) => (
                  <div
                    key={index}
                    className={
                      index < item.rating
                        ? styles.filledStar
                        : styles.unfilledStar
                    }
                  >
                    <StarIcon />
                  </div>
                ))}
              </span>
              {item.reviews && (
                <span className={styles.pir_count}>({item.reviews})</span>
              )}
            </div>
        <div className={styles.product_name}>{item.name} </div>
        <div className={styles.product_price}> {item.price} </div>
        <div className={styles.count}>
          <button>-</button>
          <input type='number' name='number' />
          <button>+</button>
        </div>
        <div className={styles.shipping_btn}>
          {/* <button>free shipping</button> */}
        </div>
            <div className={styles.stock}>
              {item.inStock ? (
                <span>
                  <InStockIcon /> In Stock
                </span>
              ) : (
                <span> 
                  <OutStockIcon />
                  Out Of Stock
                </span>
              )}
            </div>
      </div>
    </div>
  )
      :
      (
      <div className={styles.cart_item}>
     <div className={styles.cart_item_image}>
        <img src={item.image}  alt="Product" />
     </div>
     <div className={styles.cart_item_details}>
        <div className={styles.cd_first}>
            <h5>{item.name}</h5>
            <h5>${item.price}</h5>
        </div>
        <div className={`${styles.cd_second} ${styles.cd_first}`}>
            <h5>${handleTotal}</h5>
            <div><CloseIcon /></div>
        </div> 
        <div className={styles.cd_quanity}>
            <button>-</button>
            <input type="number" value={ `${item.quantity} || "2" `} />
            <button>+</button>
        </div>
     </div>
    </div>) }
   </Fragment>
  )
}

export default CartItem