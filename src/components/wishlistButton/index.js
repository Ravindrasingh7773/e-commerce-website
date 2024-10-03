import React from "react";
import styles from "./style.module.css";  
import WishListIcon from "../../icons/wishListIcon";

const WishListButton = ({onClick}) => {
  return (
    <div className={styles.round_button} onClick={onClick}>
      <WishListIcon />
      <span className={styles.sidespan}>
        <span></span>
      </span>
    </div>
  );
};

export default WishListButton;
