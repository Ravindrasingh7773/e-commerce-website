import React, { Fragment } from "react";
import Section from "../../components/section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import HeroSection from "../../components/herosection";
import SectionHeader from "../../components/sectionHeader";
import CategorySection from "../../components/categorySection";
import FeatureBar from "../../components/featureBar";
import ShippingIcon from "../../icons/shippingIcon";
import RefreshIcon from "../../icons/refreshIcon";
import SecureIcon from "../../icons/secureIcon";
import ReturnIcon from "../../icons/returnIcon";
import HeadPhoneIcon from "../../icons/headPhoneIcon";
import AdvertismentBar from "../../components/advertismentBar";
import ProductItem from "../../components/productItem";
import Product1 from "../../assets/images/product1.png"; 
import Product2 from "../../assets/images/product2.png"; 
import Product3 from "../../assets/images/product3.png"; 
import Product4 from "../../assets/images/product4.png"; 
import Product5 from "../../assets/images/product5.png"; 
import Product6 from "../../assets/images/product6.png"; 
import Product7 from "../../assets/images/product7.png"; 
import Product8 from "../../assets/images/product8.png"; 
import Product9 from "../../assets/images/product9.png"; 
import Product10 from "../../assets/images/product10.png"; 
import Product11 from "../../assets/images/product11.png"; 
import Product12 from "../../assets/images/product12.png"; 
import Product13 from "../../assets/images/product13.png"; 
import Product14 from "../../assets/images/product14.png"; 
import Product15 from "../../assets/images/product15.png"; 
import Product16 from "../../assets/images/product16.png"; 
import Product17 from "../../assets/images/product17.png"; 
import Product18 from "../../assets/images/product18.png"; 
import Product19 from "../../assets/images/product10.png"; 
import Product20 from "../../assets/images/product15.png"; 
import SaleDog from "../../assets/images/sale_dog.png";
import SaleCat from "../../assets/images/sale_cat.png";
import BlogImg1 from "../../assets/images/blog1.jpeg";
import BlogImg2 from "../../assets/images/blog2.jpeg";
import BlogImg31 from "../../assets/images/blog31.jpeg";
import BlogImg32 from "../../assets/images/blog32.jpeg";
import SaleSection from "../../components/saleSection";
import BlogBox from "../../components/blogBox";
import BlogBox2 from "../../components/blogBox2";
import { Autoplay, Pagination } from "swiper/modules";
import ProductData from "../../data/product.json"

const features = [
  { icon: <ShippingIcon />, text: "Free Shipping Over $199" },
  { icon: <RefreshIcon />, text: "30 Days Money Back" },
  { icon: <SecureIcon />, text: "100% Secure Payment" },
  { icon: <ReturnIcon />, text: "Free Product Return" },
  { icon: <HeadPhoneIcon />, text: "24/7 Online & Offline Support" },
];
 

const Products = [
  {
    id: 1,
    name: "Royal Canin Cat Dry Food Exigent 2kg",
    price: 359.0,
    oldPrice: null,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: true,
    rating: 3,
    reviews: 3,
    image: Product1,
    categories: ["40% Off", "Best Seller"],
    category: "cat"
  },
  {
    id: 2,
    name: "Brit Premium by Nature Cat Can - Chicken (200g)",
    price: 579.0,
    oldPrice: 619.0,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 5,
    reviews: 152,
    image: Product2,
    categories: ["Hand Picked", "Recently Added"],
    category: "cat"
  },
  {
    id: 3,
    name: "Spectrum Starter32 Kitten Food - Chicken Formula (400g)",
    price: 1729.0,
    oldPrice: 2110.0,
    priceRange: null,
    inStock: false,
    shipping: "Free",
    freeGift: false,
    rating: 4,
    reviews: 64,
    image: Product3,
    categories: ["Christmas Offer", "Recently Added"],
    category: "cat"
  },
  {
    id: 4,
    name: "Himalaya Erina EP Tick and Flea Control Shampoo 200 ml",
    price: null,
    oldPrice: null,
    priceRange: "979.00 - 1,259.00",
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 4,
    reviews: 0,
    image: Product4,
    categories: ["Best Seller"],
    category: "dog"
  },
  {
    id: 5,
    name: "Bonnie Beef Cocktail (500g)",
    price: 9.0,
    oldPrice: 12.0,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 5,
    reviews: 0,
    image: Product5,
    categories: ["40% Off"],
    category: "dog"
  },
  {
    id: 6,
    name: "Whiskas Kitten Dry Food (1+ Years)",
    price: 39.0,
    oldPrice: null,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 5,
    reviews: 5,
    image: Product6,
    categories: ["Christmas Offer"],
    category: "cat"
  },
  {
    id: 7,
    name: "Drools Kitten Dry Food (1+ Years)",
    price: 39.0,
    oldPrice: null,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 5,
    reviews: 5,
    image: Product7,
    categories: ["Best Seller"],
    category: "cat"
  },
  {
    id: 8,
    name: "Prestige Premium Bird Food",
    price: 39.0,
    oldPrice: null,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 5,
    reviews: 5,
    image: Product8,
    categories: ["Hand Picked"],
    category: "parrot"
  },
  {
    id: 9,
    name: "Pedigree Adult Dog Food - Chicken & Rice",
    price: 579.0,
    oldPrice: 619.0,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 5,
    reviews: 152,
    image: Product9,
    categories: ["40% Off", "Recently Added"],
    category: "dog"
  },
  {
    id: 10,
    name: "Drools Focus Puppy Dry Food",
    price: 359.0,
    oldPrice: null,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: true,
    rating: 3,
    reviews: 3,
    image: Product10,
    categories: ["Best Seller"],
    category: "dog"
  },
  {
    id: 11,
    name: "Fish Meal Pellets - Goldfish Food",
    price: 29.0,
    oldPrice: 35.0,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 4,
    reviews: 12,
    image: Product11,
    categories: ["40% Off"],
    category: "fish"
  },
  {
    id: 12,
    name: "Ocean Nutrition Formula 1 Flakes - Marine Fish Food",
    price: 49.0,
    oldPrice: null,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 5,
    reviews: 20,
    image: Product12,
    categories: ["Hand Picked"],
    category: "fish"
  },
  {
    id: 13,
    name: "Hay for Rabbits - Fresh Timothy Hay (500g)",
    price: 15.0,
    oldPrice: 20.0,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 4,
    reviews: 7,
    image: Product13,
    categories: ["Recently Added"],
    category: "rabbit"
  },
  {
    id: 14,
    name: "Hen Feed Mix (2kg)",
    price: 59.0,
    oldPrice: null,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 3,
    reviews: 5,
    image: Product14,
    categories: ["Best Seller"],
    category: "hen"
  },
  {
    id: 15,
    name: "Tortoise Dry Food (500g)",
    price: 99.0,
    oldPrice: 129.0,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 5,
    reviews: 15,
    image: Product15,
    categories: ["Christmas Offer"],
    category: "tortoise"
  },
  {
    id: 16,
    name: "Horse Pellets - Nutritious Feed (10kg)",
    price: 199.0,
    oldPrice: null,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 5,
    reviews: 10,
    image: Product16,
    categories: ["40% Off"],
    category: "horse"
  },
  {
    id: 17,
    name: "Rabbit Carrot Sticks (100g)",
    price: 25.0,
    oldPrice: 30.0,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 4,
    reviews: 8,
    image: Product17,
    categories: ["Recently Added"],
    category: "rabbit"
  },
  {
    id: 18,
    name: "Parrot Nutritional Pellets (1kg)",
    price: 49.0,
    oldPrice: 59.0,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 5,
    reviews: 18,
    image: Product18,
    categories: ["Christmas Offer"],
    category: "parrot"
  },
  {
    id: 19,
    name: "Hen Egg Layer Mash (5kg)",
    price: 69.0,
    oldPrice: 79.0,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 4,
    reviews: 14,
    image: Product19,
    categories: ["Hand Picked"],
    category: "hen"
  },
  {
    id: 20,
    name: "Horse Feed Mix - Balanced Nutrition (15kg)",
    price: 249.0,
    oldPrice: 299.0,
    priceRange: null,
    inStock: true,
    shipping: "Free",
    freeGift: false,
    rating: 5,
    reviews: 9,
    image: Product20,
    categories: ["Best Seller"],
    category: "horse"
  }
];




const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <CategorySection />
      <Section pt={"30"} pb={"30"}>
        <Container>
          <div className={styles.product_section}>
            <Row>
              <Col lg={12}>
                <SectionHeader
                  title={"Hand-picked Foods"}
                  Btntext={"VIEW ALL"}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className={styles.product_slides}>
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
                    slidesPerView={5}
                    breakpoints={{
                      320: {
                        slidesPerView: 1.5,
                      },
                      640: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 5,
                      },
                    }}
                    className={styles.customSwiper}
                    loop={true}
                  > 
                    {ProductData.map((item, i) => (
                      <SwiperSlide key={i}>
                        <ProductItem item={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Section>
      <Section pt={"30"} pb={"30"}>
        <Container>
          <Row>
            <Col lg={12}>
              <FeatureBar features={features} />
            </Col>
          </Row>
        </Container>
      </Section>
      <SaleSection
        petCareProducts={ProductData}
        bgColor={"brown"}
        title={"Flash Sale"}
        SaleImg={SaleDog}
        NewsLetter={true}
        hasCat={false}
      />
      <SaleSection
        petCareProducts={ProductData}
        bgColor={"yellow"}
        title={"Hot Sale"}
        SaleImg={SaleCat}
        NewsLetter={false}
        hasCat={true}
      />
      <Section pt={"30"} pb={"30"}>
        <Container>
          <Row>
            <Col lg={12}>
              <AdvertismentBar />
            </Col>
          </Row>
        </Container>
      </Section> 
      <Section pt={"30"} pb={"30"}>
        <Container>
          <Row>
            <Col lg={12}>
             <SectionHeader title={"Best Selling Foods"} isButtons={true} />
            </Col>
          </Row>
          <Row>
              <Col lg={12}>
                <div className={styles.product_slides}>
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
                  slidesPerView={5}
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
                      slidesPerView: 5,
                    },
                  }}
                  className={styles.customSwiper}
                  loop={true}
                > 
                    {ProductData.map((item, i) => (
                      <SwiperSlide key={i}>
                        <ProductItem item={item} centerProduct={true} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Col>
            </Row>
        </Container>
      </Section>
      <Section pt={"30"} pb={"30"}>
        <Container>
            <Row>
              <Col lg={12}>
                <SectionHeader
                  title={"Our Blog"}
                  Btntext={"VIEW ALL"}
                />
              </Col>
            </Row>
            </Container>
            <Container className={styles.blog_section}>
            <Row>
              <Col lg={4}>
                    <BlogBox bgImg={BlogImg1} title={"Babies in Winter: How to protect your newborn in cold weather"} des={"45 Minutes ago in Experience"} />
              </Col> 
              <Col lg={4}>
                    <BlogBox2 BlogImg={BlogImg31} title={"Omicron in Kids: Here’s what parents should know"} des={"45 Minutes ago in Pet, Food"} />
                    <BlogBox2 BlogImg={BlogImg32} title={"Fun facts about January Babies"} des={"45 Minutes ago in Experience"} />
              </Col>
              <Col lg={4}>
                    <BlogBox bgImg={BlogImg2} title={"Babies in Winter: How to protect your newborn in cold weather"} des={"45 Minutes ago in Experience"} />
              </Col> 
            </Row>  
        </Container>
      </Section>
    </Fragment>
  );
};

export default Home;
