import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/images/login.png";
import { Link } from "react-router-dom";
import EyeIcon from "../../icons/eyeIcon";
import styles from "./style.module.css";
import BreadCrumb from "../breadCrumb";

const BreadCrumbItems  = [
  {name: "pages", path:"pages"},
  {name: "LogIn", path:"logIn"}
]

const LogIn = () => {
  const [data , setData ] = useState("");

  const handleOnChange = (e) =>{
    const Name = e.target.name;
    const Value = e.target.value;
    setData({...data , [Name]: Value});
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className={styles.login_page}>
      <BreadCrumb items={BreadCrumbItems}/> 
    <div className={styles.login}>
      <Container>
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
                <h3>Welcome Back</h3>
                <p>login to continue</p>
              </div>
              <form onSubmit={handleOnSubmit} >
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

                <div className={styles.lf_forgetPassword}>
                  Forget Password ?
                </div>
                <button type="submit">LOGIN</button>
              </form>
              <div className={styles.l_newuser}>
                <span>new user ?</span>
                <span>
                  <Link to={"/register"}>Sign Up</Link>
                </span>
              </div>
            </div>
          </Col> 
        </Row>
        </div>
      </Container>
    </div>
    </div>
  );
};
export default LogIn;
