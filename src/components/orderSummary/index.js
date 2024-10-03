import React from "react";
import styles from "./style.module.css";
import Button from "../button";

const OrderSummary = () => {
  return (
    <div className={styles.order_summary_box}>
      <div className={styles.os_title}>Order Summary</div>
      <div className={styles.os_price}>
        Sub Total: <span>$1,000.00</span>
      </div>
      <div className={styles.os_price}>
        Shpping estimate: <span>$600.00</span>
      </div>
      <div className={styles.os_price}>
        Tax estimate: <span>$137.00</span>
      </div>
      <div className={styles.os_total_price}>
        Order total:<span>$1,737.00</span>
      </div>
      <div className={styles.os_btn}>
        <Button
          text={"CHECKOUT"}
          size={"large"} 
          bg={"brown"}
          display={"block"}
        />
      </div>
    </div>
  );
};

export default OrderSummary;
