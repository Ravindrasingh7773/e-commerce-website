import React from "react";
import Section from "../../components/section";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/laptop-small-img.png";
import img2 from "../../assets/images/paypal-logo.png";
import styles from "./style.module.css";
import BreadCrumb from "../../components/breadCrumb";

const BreadCrumbItems = [
  { name: "pages", path: "/pages" },
  { name: "checkout", path: "/checkout" },
];
const Checkout = () => {
  return (
    <div className={styles.checkout_page}>
      <BreadCrumb items={BreadCrumbItems} />
    <Section pt={"30"} pb={"30"}>
    <Container className={styles.wrap_div}>
        <Row>
          <Col lg={7}>
            <div className={styles.Checkout_left}>
              <div className={styles.Checkout_title}>checkout</div>
              <div className={styles.Checkout_login}>
                Returning customer? <Link to={"#"}> Click here to log in</Link>
              </div>
              <div className={styles.contact_box}>
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
                    <label htmlFor='cname'>Company Name (Optional)</label>
                    <br />
                    <input type='text' name='cname' id='cname' />
                  </div>

                  <div className={styles.form_input}>
                    <label htmlFor='region'>Country / Region *</label>
                    <br />
                    <select id='region'>
                      <option>United States (US)</option>
                      <option>India</option>
                      <option>Nepal</option>
                      <option>bhutan</option>
                    </select>
                  </div>

                  <div className={styles.form_input}>
                    <label htmlFor='address'>Street Address</label>
                    <br />
                    <input
                      className='mb-2'
                      type='text'
                      name='address'
                      id='address'
                      placeholder='House number and street name ...'
                    />
                    <input
                      type='text'
                      name='address'
                      id='address'
                      placeholder='Apartment, suite, unit, etc (Optional)'
                    />
                  </div>

                  <div className={styles.form_input}>
                    <label htmlFor='town'>Town / City *</label>
                    <br />
                    <input type='text' name='town' id='town' />
                  </div>

                  <div className={styles.form_input}>
                    <label htmlFor='state'>State / County *</label>
                    <br />
                    <select id='state'>
                      <option>Rajasthan</option>
                      <option>Panjab</option>
                      <option>Uttar Pradesh</option>
                      <option>Bihar</option>
                    </select>
                  </div>

                  <div className={styles.form_input}>
                    <label htmlFor='code'>Zip Code *</label>
                    <br />
                    <input type='number' name='zipCode' id='code' />
                  </div>

                  <div className={styles.form_input}>
                    <label htmlFor='number'>Phone Number *</label>
                    <br />
                    <input
                      type='number'
                      name='number'
                      id='number'
                      placeholder='+1 0231 4554 452'
                    />
                  </div>

                  <div className={styles.form_input}>
                    <label htmlFor='emailId'>Email Address *</label>
                    <br />
                    <input
                      type='email'
                      name='email'
                      id='emailId'
                      placeholder='Enter Your Email'
                    />
                  </div>

                  <div className={styles.form_input_checkbox}>
                    <input type='checkbox' name='checkbox' id='checkbox' />
                    <label htmlFor='checkbox'>Create an account?</label>
                  </div>

                  <div className={styles.title}>Additional Information</div>

                  <div className={styles.form_input}>
                    <label htmlFor='textArea'>Order Notes (Optional)</label>
                    <br />
                    <textarea id='textarea' value="2" rows={4}>
                      Note about your order, e.g. special note for delivery
                    </textarea>
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className={styles.checkout_right}>
              <div className={styles.code_link}>
                Have a coupon?
                <Link to={"#"}> Click here to enter your code</Link>
              </div>
              <div className={styles.cr_bottom}>
              <div className={styles.crb_title}>Your Order</div>
                <div className={styles.product_details}>
                  <div className={styles.pd_head}>
                    <span>Product</span>
                    <span>sub total</span>
                  </div>
                  <div className={styles.pd_about}>
                    <div className={styles.pd_about_product}>
                      <div className={styles.product_img}>
                        <img src={img1} alt='product img' />
                      </div>
                      <div className={styles.product_name}>
                        Pinnaeple Macbook Pro 2022 M1/ 512GB <br />
                        <span>x 3</span>
                      </div>
                    </div>
                    <div className={styles.shipping_box}>
                      Worldwide Standard Shipping Free<span>+ $9.50</span>
                    </div>
                  </div>
                  <div className={styles.total_price}>
                    Order Total<span>$1,746.50</span>
                  </div>
                </div>

              <div className={styles.payment_method}>
                <form>
                  <div className={styles.check_input}>
                    <input type='checkbox' />
                    <label>Direct Bank Transfer</label>
                  </div>

                  <div className={styles.pm_description}>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </div>
                  <div className={styles.check_input}>
                    <input type='checkbox' />
                    <label>Cash on Delivery</label>
                  </div>

                  <div className={styles.paypal}>
                    <div className={styles.check_input}>
                      <input type='checkbox' />
                      <label>Paypal</label>
                    </div>

                    <div className={styles.paypal_logo}>
                      <Link to={"#"}>What’s Paypal?</Link>
                      <div className={styles.pl_img}>
                        <img src={img2} alt='paypal logo' />
                      </div>
                    </div>
                  </div>

                  <div className={styles.submit_btn}>
                    <input type='button' name='submit' value='place order' />
                  </div>
                </form>
              </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
    </div>
  );
};

export default Checkout;
