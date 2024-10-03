import React, { Fragment } from "react";
import Section from "../section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { Col, Container, Row } from "react-bootstrap";
import SImage1 from "../../assets/images/sbrand1.png";
import SImage2 from "../../assets/images/sbrand2.png";
import SImage3 from "../../assets/images/sbrand3.png";
import SImage4 from "../../assets/images/sbrand4.png";
import SImage5 from "../../assets/images/sbrand5.png";
import OfferImg from "../../assets/images/offer_img.png";
import BannerLogo from "../../assets/images/bannerLogoImage.png";
import HeroBanner from "../heroBanner";
import styles from "./style.module.css";
import Button from "../button";

const SBrands = [
  {
    id: 1,
    name: "Mighty Hunter",
    image: SImage1,
  },
  {
    id: 2,
    name: "Woof Woof",
    image: SImage2,
  },
  {
    id: 3,
    name: "sunset n* the blue",
    image: SImage3,
  },
  {
    id: 4,
    name: "well whale",
    image: SImage4,
  },
  {
    id: 5,
    name: "The greater flam ",
    image: SImage5,
  },
];

const HeroSection = () => {
  return (
    <Fragment>
      <Section pt={"30"} pb={"30"}  >
        <Container>
          <Row>
            <Col lg={9}>
              <div className={styles.hs_left}>
                <div className={styles.hs_banners}>
                  <Swiper
                    spaceBetween={5}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                  >
                    <SwiperSlide>
                      <HeroBanner />
                    </SwiperSlide>
                    <SwiperSlide>
                      <HeroBanner />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className={styles.hs_sponcers}>
                  <div className={styles.hss_cnt}>
                    <h5>
                      <b>Humble</b> <br /> Brand Sponsor
                    </h5>
                  </div>
                  <div className={styles.brands}>
                    {SBrands.map((image, i) => (
                      <div key={i}>
                        <img src={image.image} alt={image.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={styles.hs_right}>
                <div className={styles.hsr_top}>
                  <div className={styles.hsrt_cnt}>
                    <h5>stosi</h5>
                    <h4>Packet Top Resistance Food..</h4>
                    <Button
                      text={"SHOP NOW"}
                      size={"small"}
                      typr={"fill"}
                      bg={"yellow"}
                    />
                  </div>
                  <div className={styles.hsrt_img}>
                    <img src={OfferImg} alt="" />
                  </div>
                </div>
                <div className={styles.hsr_bottom}>
                  <div className={styles.hsrb_cnt}>
                    <h5>
                      <b>dogge </b>devisoi food
                    </h5>
                    <span>From</span>
                    <h4>$169</h4>
                  </div>
                  <div className={styles.hsrb_img}>
                    <img src={BannerLogo} alt="" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default HeroSection;
