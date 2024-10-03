import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/images/login.png";
import { Link } from "react-router-dom";
import EyeIcon from "../../icons/eyeIcon";
import styles from "./style.module.css";
import BreadCrumb from "../breadCrumb";


const BreadCrumbItems  = [
    {name: "pages", path:"/pages"},
    {name: "register", path:"/register"}
  ]
const Registration = () => {
  const [input ,setInput ] = useState("");

  const handleOnChange = (e) =>{
    const Name = e.target.name;
    const Value = e.target.value; 
    setInput({...input , [Name]: Value});
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    console.log(input);
  } 

  return (
    <div className={styles.login_page}>
    <BreadCrumb items={BreadCrumbItems}/>  
    <Container  className={styles.login}>
    <div  className={styles.login_row}>
      <Row>
        <Col lg={6}>
          <div className={styles.l_image}>
            <img src={image} alt="" />
          </div>
        </Col>
        <Col lg={6}>
          <div className={styles.l_form}>
            <div className={styles.lf_heading}>
              <h3>Registration</h3>
              <p>Join to Us</p>
            </div>
            <form onSubmit={handleOnSubmit} >
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Jhon Deo"
                onChange={handleOnChange}
              />
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                onChange={handleOnChange}
              />
              <label>Password</label>
              <div className={styles.password}>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                onChange={handleOnChange}
                />
                <span className={styles.lf_eye}>
                  <EyeIcon />
                </span>
              </div> 
              <label>Confirm Password</label>
              <div className={styles.password}>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                />
                <span className={styles.lf_eye}>
                  <EyeIcon />
                </span>
              </div>
 
              <button type="submit">Register</button>
            </form>
            <div className={styles.l_newuser}>
              <span>Already user ?</span>
              <span>
                <Link to={"/login"}>Log In</Link>
              </span>
            </div>
          </div>
        </Col> 
      </Row>
      </div>
    </Container> 
  </div>
  );
};
export default Registration;
