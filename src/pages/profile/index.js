import React from "react";
import Section from "../../components/section";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/images/profile-img.png";
import styles from "./style.module.css";
import Button from "../../components/button"; 
import BreadCrumb from "../../components/breadCrumb";

const BreadCrumbItems = [
  { name: "pages", path: "/pages" },
  { name: "profile", path: "/profile" },
];
const Profile = () => {
  return (
    <div className={styles.profile_page}>
      <BreadCrumb items={BreadCrumbItems} />
    <Section pt={"30"} pb={"30"}>
    <Container className={styles.wrap_div}>
        <Row>
          <Col lg={3}>
            <div className={styles.profile_information}>
              <div className={styles.profile_photo}>
                <img src={img1} alt='profile img' />
              </div>
              <div className={styles.user_name}>Ravindra Singh Rathore</div>
              <div className={styles.user_email}>swoo@gmail.com</div>
              <div className={styles.info_btns}>
                <Button
                  text={"Account info"}
                  size={"large"}
                  bg={"green"}
                  showArrow={"true"}
                  customCss={styles.user_btn}
                />
                <Button
                  text={"My order"}
                  size={"large"}
                  type={"outline"}
                  showArrow={"true"}
                  customCss={styles.user_btn}
                />
                <Button
                  text={"My address"}
                  size={"large"}
                  type={"outline"}
                  showArrow={"true"}
                  customCss={styles.user_btn}
                />
                <Button
                  text={"Change password"}
                  size={"large"}
                  type={"outline"}
                  showArrow={"true"}
                  customCss={styles.user_btn}
                />
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className={styles.login_box}>
              <div className={styles.title}>Welcome Back</div>
              <form className={styles.form}>
                <div className={styles.name_input}>
                  <div className={styles.form_input}>
                    <label htmlFor='fName'>First Name *</label>
                    <br />
                    <input
                      type='text'
                      name='fName'
                      id='fName'
                      placeholder='Enter Your First Name'
                    />
                  </div>
                  <div className={styles.form_input}>
                    <label htmlFor='lName'>Last Name *</label>
                    <br />
                    <input
                      type='text'
                      name='lName'
                      id='lName'
                      placeholder='Enter Your Last Name'
                    />
                  </div>
                </div>

                <div className={styles.form_input}>
                  <label htmlFor='emailId'>Email Address</label>
                  <br />
                  <input
                    type='email'
                    name='email'
                    id='emailId'
                    placeholder='Enter Your Email'
                  />
                </div>

                <div className={styles.form_input}>
                  <label htmlFor='number'>Phone Number (Optional)</label>
                  <br />
                  <input
                    type='number'
                    name='number'
                    id='number'
                    placeholder='+1 0231 4554 452'
                  />
                </div>

                <div className={styles.submit_btn}>
                  <input type='button' name='submit' value='save' />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
    </div>
  );
};

export default Profile;
