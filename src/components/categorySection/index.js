import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import styles from "./style.module.css";
import Catg1 from "../../assets/images/catg1.png";
import Catg2 from "../../assets/images/catg2.png";
import Catg3 from "../../assets/images/catg3.png";
import Catg4 from "../../assets/images/catg4.png";
import Catg5 from "../../assets/images/catg5.png";
import Catg6 from "../../assets/images/catg6.png";
import Catg7 from "../../assets/images/catg7.png";
import { Autoplay, Pagination } from "swiper/modules";
import Catg8 from "../../assets/images/catg8.png";
import Section from "../section";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../sectionHeader";

const CategoryData = [
  { id: 1, name: "Cat  ", image: Catg1 },
  { id: 2, name: "Dog  ", image: Catg2 },
  { id: 3, name: "parrot  ", image: Catg3 },
  { id: 4, name: "Fish ", image: Catg4 },
  { id: 5, name: "Horse", image: Catg5 },
  { id: 6, name: "Rabbit", image: Catg6 },
  { id: 7, name: "Hen", image: Catg7 },
  { id: 8, name: "Tortoise", image: Catg8 },
];

const CategorySection = () => {
  return (
    <Fragment>
      <Section>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.ct_section}>
                <div className={styles.cs_box}>
                  <SectionHeader title={"Pets Food Categories"} />
                  <div className={styles.cs_categories}>
                  <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={40}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  onInit={(swiper) => {
                    swiper.el.addEventListener("mouseenter", () => {
                      swiper.autoplay.stop();
                    });
                    swiper.el.addEventListener("mouseleave", () => {
                      swiper.autoplay.start();
                    });
                  }}
                  slidesPerView={8}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                    },
                    640: {
                      slidesPerView: 4,
                    },
                    768: {
                      slidesPerView: 6,
                    },
                    1024: {
                      slidesPerView: 8,
                    },
                  }}
                  // className={styles.customSwiper}
                  loop={true}
                > 
                    {CategoryData.map((item, i) => (
                      <SwiperSlide key={i}>
                      <div className={styles.cs_category}  >
                        <div className={styles.csc_image} >
                          <img
                            src={item.image}
                            alt={item.name}
                            className={styles.cs_img}
                          />
                        </div>
                        <h3>{item.name}</h3>
                      </div></SwiperSlide>
                    ))}
                  </Swiper>
                  </div>
                </div>
                <div className={styles.active_users}>
                    <h4>12k+ active users everyday</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default CategorySection;
