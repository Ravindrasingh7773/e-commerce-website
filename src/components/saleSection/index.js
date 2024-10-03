import React, { Fragment, useState } from "react";
import styles from "./style.module.css";
import Section from "../section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { Col, Container, Row } from "react-bootstrap";
import ArrowRightIcon from "../../icons/arrowRightIcon";
import FlashIcon from "../../icons/flashicon"; 
import Product1 from "../../assets/images/product1.png";
import Product2 from "../../assets/images/product2.png";
import Product3 from "../../assets/images/product3.png";
import Product4 from "../../assets/images/product4.png";
import Product5 from "../../assets/images/product5.png";
import Product6 from "../../assets/images/product6.png";
import Product7 from "../../assets/images/product7.png";
import Product8 from "../../assets/images/product8.png";
import Product9 from "../../assets/images/product9.png";
import { Autoplay, Pagination } from "swiper/modules";
import ProductItem from "../productItem";
import MailIcon from "../../icons/mailIcon"; 

const RecentlyViewed = [
    {
        image: Product1
    },{
        image: Product2
    },{
        image: Product3
    },{
        image: Product4
    },{
        image: Product5
    },{
        image: Product6
    },{
        image: Product7
    },{
        image: Product8
    },{
        image: Product9
    },
]

const SaleSection = ({ petCareProducts,NewsLetter,title,SaleImg,bgColor,hasCat }) => {

  const [selectedCategory, setSelectedCategory] = useState("40% Off");

  // Filtered products based on selected category
  const filteredProducts = petCareProducts.filter((product) =>
    product.discount.includes(selectedCategory)
  );

  return (
    <Fragment>
      <Section pb={"30"}>
        <Container> 
          <Row>
            <Col lg={3} className="g-0">
              <div className={`${styles.sale_offers} ${styles["bg_"+bgColor]} `}>
                <div className={styles.so_title}>
                  <FlashIcon /> <h3>{title}</h3>
                </div>
                <div className={styles.so_options}>
                  <div className={styles.so_option}  onClick={() => setSelectedCategory("40% Off")}>
                    <h4  className={selectedCategory === "40% Off" ? styles.active : ""}>40% offer</h4>
                    <ArrowRightIcon />
                  </div>
                  <div className={styles.so_option} onClick={() => setSelectedCategory("Christmas Offer")}>
                    <h4  className={selectedCategory === "Christmas Offer" ? styles.active : ""}>christmas offer</h4>
                    <ArrowRightIcon />
                  </div>
                  <div
                    className={styles.so_option}
                    onClick={() => setSelectedCategory("Hand Picked")}
                  >
                    <h4 className={selectedCategory === "Hand Picked" ? styles.active : ""}>
                      Hand picked
                    </h4>
                    <ArrowRightIcon />
                  </div>
                  <div
                    className={styles.so_option}
                    onClick={() => setSelectedCategory("Best Seller")}
                  >
                    <h4 className={selectedCategory === "Best Seller" ? styles.active : ""}>Best sell</h4>
                    <ArrowRightIcon />
                  </div>
                  <div
                    className={styles.so_option}
                    onClick={() => setSelectedCategory("Recently Added")}
                  >
                    <h4 className={selectedCategory === "Recently Added" ? styles.active : ""}>
                      Recently added
                    </h4>
                    <ArrowRightIcon />
                  </div>
                </div>
                <div className={`${styles.sale_image} ${hasCat ? styles.translateY : ''} `}>
                  <img src={SaleImg} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={9}  className="g-0">
              <div className={styles.sale_cnt}>
                <div className={styles.products}>
                   <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
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
                    slidesPerView={4}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                      },
                      640: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 4,
                      },
                    }}
                    className={styles.customSwiper}
                    loop={true}
                  >
                  {filteredProducts.map((item, i) => (
                      <SwiperSlide key={i}>
                    <ProductItem key={i} item={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper> 
                </div>
              </div>
            </Col>
          </Row> 
          <Row className="justify-content-end">
            <Col lg={9}  className="g-0"> 
               {NewsLetter ? 
               <div className={styles.sale_bottom}>
               <div className={styles.sb_left}>
                 <h4>Newsletter</h4>
                 <h3>40% offer on the way</h3>
               </div>
               <div className={styles.sb_right}>
                   <MailIcon />
                 <input type="email" placeholder="Enter your email" />
                 <button>Subscribe</button>
               </div>
             </div>
                :
                <div className={styles.sale_bottom}>
                <div className={styles.sb_left2}>
                <h4>Recently Viewed</h4>
              </div>
              <div className={styles.sb_right2}>
                {RecentlyViewed.map((item,i)=>(
                  <div className={styles.sbr_item} key={i}>
                  <img src={item.image} alt="" />
                </div> 
                ))}
              </div>
              </div>  
            } 
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default SaleSection;


   