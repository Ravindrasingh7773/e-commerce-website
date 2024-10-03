import React from "react";
import styles from "./style.module.css";   
import CartIcon from "../../icons/cartIcon";

const CartButton = ({onClick}) => {
  return (
    <div className={styles.round_button} onClick={onClick}>
      <CartIcon />
      <span className={styles.cart_count}>0</span>
    </div>
  );
};

export default CartButton;
