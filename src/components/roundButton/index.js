import React from "react";
import styles from "./style.module.css"; 
import RoundIcon from "../../icons/roundIcon";

const RoundButton = ({onClick}) => {
  return (
    <div className={styles.round_button}  onClick={onClick}>
      <RoundIcon />
    </div>
  );
};

export default RoundButton;
