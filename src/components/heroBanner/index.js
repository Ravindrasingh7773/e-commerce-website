import React, { Fragment } from "react";
import styles from "./style.module.css";
import Section from "../section";
import { Col, Container, Row } from "react-bootstrap";
import HsBgImg from "../../assets/images/hsb_bg_image.png"; 
import Button from "../button";
import Image from "../../assets/images/hsb_image.png"

const HeroBanner = () => {
  return (
    <Fragment>
      <Section customCss={styles.hero_banner} bgImg={HsBgImg} >
        <Container>
          <Row>
            <Col lg={6}>
              <div className={styles.hsb_cnt}>
                <h2><span>eVolve</span> <br/>Quality foods
                <br/> For your pet</h2>
                <div className={styles.hsb_btn}>
                    <Button text={"Discover Now"} size={"large"} bg={"yellow"} type={"fill"} />
                </div>
              </div>
            </Col> 
            <Col lg={6}>
              <div className={styles.hsb_img}>
              <img src={Image}  alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default HeroBanner;
