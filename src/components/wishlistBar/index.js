import React, { Fragment, useState } from "react";
import styles from "./style.module.css"; 
import CloseIcon from "../../icons/closeIcon";
import CartItem from "../cartItem";
import WishListButton from "../wishlistButton";
import CartImage from "../../assets/images/item1.png"
import Button from "../button";

const CartData = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: CartImage,
    quantity: 2,    
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: CartImage,
    quantity: 1,
  },{
    id: 3,
    name: "Product 3",
    price: 300,
    image: CartImage,
    quantity: 3,
  },{
    id: 4,
    name: "Product 4",
    price: 400,
    image: CartImage,
    quantity: 4,
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    image: CartImage,
    quantity: 1,
  },{
    id: 6,
    name: "Product 6",
    price: 600,
    image: CartImage,
    quantity: 3,
  },{
    id: 7,
    name: "Product 7",
    price: 700,
    image: CartImage,
    quantity: 2,
  }
]

const WishListBar = () => {
    const [isOpen ,setIsOpen ] = useState(false);

    const handleIsOpen = () =>{
        setIsOpen(true);
        document.body.style.overflow = "hidden" ;
    };
    
    const handleIsClose = () =>{
        setIsOpen(false);
        document.body.style.overflow = "" ;
    }

  return (
    <Fragment>
      <WishListButton onClick={handleIsOpen} />
    { isOpen && (
        <div>
        <div className={styles.sidebar}>
        <div className={styles.sb_head}>
          <div className={styles.sbh_inner}>
            <div className={`${styles.sbh_title}`}> WishListBar </div> 
            <button className={styles.sbh_cls}   onClick={handleIsClose} >
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className={styles.sb_body}>
          {CartData.map((data,i)=>(
            <CartItem key={i} item={data}  /> 
          ))}
        </div>
        <div className={styles.sb_footer}>
        <div className={styles.sb_total}>
              <span>Total :</span>
              <span> $123</span>
            </div>
            <div className={styles.sbf_buttons}>
              <Button text={"CheckOut"} size={"large"} align={"center"} display={"block"} to={""}  bg={"brown"}  />
              <Button text={"Go To Cart"} size={"large"} align={"center"} display={"block"} to={""}  bg={"brown"}  />
              </div>   
        </div>
      </div> 
      <div className={styles.overlay}  onClick={handleIsClose} ></div>
      </div>
     )}
    </Fragment>
  );
};

export default WishListBar;
