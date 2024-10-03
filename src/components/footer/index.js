import React, { Fragment } from 'react'
import styles from "./style.module.css"
import Section from '../section'
import { Col, Container, Row } from 'react-bootstrap'
import MailIcon from '../../icons/mailIcon'
import ArrowRightIcon from '../../icons/arrowRightIcon'
import FooterBg from '../../assets/images/footer_bg_img.png'
import { Link } from 'react-router-dom'
import TwitterIcon from '../../icons/twitterIcon'
import YoutubeIcon from '../../icons/youtubeIcon'
import FacebookIcon from '../../icons/facebookIcon'
import InstagramIcon from '../../icons/instagramIcon'
import Pay1 from '../../assets/images/paypel.png'
import Pay2 from '../../assets/images/payment-method2.png'
import Pay3 from '../../assets/images/visa.png'
import Pay4 from '../../assets/images/payment-method4.png'
import Pay5 from '../../assets/images/payment-method5.png'
import FLogo from '../../assets/images/logo2.png'
import Logo from '../logo'

const Footer = () => {
  return (
   <Fragment>
    <Section bgImg={FooterBg} customCss={styles.footer}>
        <Container>
            <Row  className={`${styles.footer_top} justify-content-between`}>
                <Col lg={4}>
                    <div className={styles.footer_top_left}>
                        <h4>
                        Be the first to get the latest news about trends,
                        promotions and much more!
                        </h4>
                        <div className={styles.footer_form} >
                            <MailIcon />
                            <input type="text" placeholder="Enter your email address" />
                           <button> <ArrowRightIcon /></button>
                        </div>
                        <div className={styles.footer_privacy}>
                        By subscribing, you accept the <Link to={""} >Privacy Policy</Link>
                        </div>
                        <div className={styles.social_icons}>
                                <Link> <TwitterIcon /></Link>
                                <Link> <FacebookIcon /></Link>
                                <Link> <InstagramIcon /></Link>
                                <Link> <YoutubeIcon /></Link>
                        </div>
                    </div>
                </Col>
                <Col lg={7}>
                <Row>
                    <Col lg={4}>
                    <div className={styles.footer_address}>
                    <h3>Get In Touch</h3>
                       <address>
                        256 New York St, San Francisco, CA 94107, USA
                        </address> 
                        <Link to={"#"}>
                        +0082 561 43 34
                        </Link>
                        <Link to={"#"}>
                        contact@Swoopets.com
                        </Link>
                    </div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.footer_links}>
                            <Link>FAQs</Link>
                            <Link>Payment</Link> 
                            <Link>Shipping</Link> 
                            <Link>Guest purchase</Link> 
                            <Link>Returns</Link> 
                            <Link>Terms & Conditions</Link> 
                            <Link>Gift Card</Link>  
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.footer_links}>
                            <Link>About Store</Link>
                            <Link>Contact</Link> 
                            <Link>Careers</Link> 
                            <Link>Editorial</Link>  
                        </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row className={styles.footer_bottom}>
                <Col lg={4}>
                <div className={styles.footer_payment}>
                <span>Accept For</span>
                <div className={styles.payment_methods}>
                    <Link><img src={Pay1} alt="" /></Link> 
                    <Link><img src={Pay2} alt="" /></Link> 
                    <Link><img src={Pay3} alt="" /></Link> 
                    <Link><img src={Pay4} alt="" /></Link> 
                    <Link><img src={Pay5} alt="" /></Link> 
                </div>
                </div>
                </Col>
                <Col lg={4}>
                <div className="d-flex justify-content-center">
                <Logo ImgUrl={FLogo} />
                </div>
                </Col>
                <Col lg={4}>
                <div className={styles.f_language}>
                    <span>Language :</span> 
                    <span><b>English</b></span>
                </div>
                </Col>
            </Row>
            <Row  className={styles.footer_bottom}>
                <Col lg={12}>
                    <div className={styles.footer_second}>
                        <p> 
                            © 2024 <Link >Swoopets </Link> . All Rights Reserved. 
                        </p>
                    </div>
                </Col>    

            </Row>
        </Container>
    </Section>
   </Fragment>
  )
}

export default Footer