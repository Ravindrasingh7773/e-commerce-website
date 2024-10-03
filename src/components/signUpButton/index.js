import React from "react";
import styles from "./style.module.css";    
import SignUpIcon from "../../icons/signUpIcon";
import { Link } from "react-router-dom";

const SignUpButton = ({onClick}) => {
  return (
    <Link className={styles.round_button} to={"/register"}>
      <SignUpIcon />
    </Link>
  );
};

export default SignUpButton;
// Hello, I'm Ravindra Singh Rathore. After completing 12th grade two years ago, I focused on frontend development, completing an RSCIT course and web development training at Tooldart Coaching Center. I'm now ready to apply my skills in HTML, CSS, JavaScript, and React.js as a fresher.