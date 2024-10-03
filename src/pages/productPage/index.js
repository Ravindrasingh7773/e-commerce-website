import React, { Fragment, useState } from "react";
import styles from "./style.module.css";
import HeroSection from "../../components/herosection";
import CategorySection from "../../components/categorySection";
import BreadCrumb from "../../components/breadCrumb";
import Section from "../../components/section";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
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
import SectionHeader from "../../components/sectionHeader";
import fbimg01 from "../../assets/images/fbimg01.png";
import fbimg02 from "../../assets/images/fbimg02.png";
import fbimg03 from "../../assets/images/fbimg03.png";
import fbimg04 from "../../assets/images/fbimg04.png";
import fbimg05 from "../../assets/images/fbimg05.png";
import ProductItem from "../../components/productItem";
import { Autoplay, Pagination } from "swiper/modules";

const BreadCrumbItems = [
  { name: "Shop", path: "/shop" },
  { name: "Top Cell Phones & Tablets ", path: "/" },
];

const FilterList = [
  { name: "all", path: "all" },
  { name: "cat", path: "cat" },
  { name: "dog", path: "dog" },
  { name: "parrot", path: "parrot" },
  { name: "fish", path: "fish" },
  { name: "horse", path: "horse" },
  { name: "rabbit", path: "rabbit" },
  { name: "hen", path: "hen" },
  { name: "tortoise", path: "tortoise" },
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
    category: "cat",
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
    category: "cat",
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
    category: "cat",
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
    category: "dog",
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
    category: "dog",
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
    category: "cat",
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
    category: "cat",
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
    category: "parrot",
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
    category: "dog",
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
    category: "dog",
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
    category: "fish",
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
    category: "fish",
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
    category: "rabbit",
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
    category: "hen",
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
    category: "tortoise",
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
    category: "horse",
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
    category: "rabbit",
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
    category: "parrot",
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
    category: "hen",
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
    category: "horse",
  },
];

const ProductPage = () => {
  
  const [priceValueMin, setPriceValueMin] = useState(0);
  const [priceValueMax, setPriceValueMax] = useState(1000);

  return (
    <Fragment>
      <BreadCrumb items={BreadCrumbItems} />
      <HeroSection />
      <CategorySection />
      <Section pt={"30"} pb={"30"}>
        <Container>
          <Row>
            <Col lg={3}>
              <div className={styles.category_filter}>
                <h4>Categories</h4>
                <Button
                  text={"All Categories"}
                  bg={"white"}
                  type={"fill"}
                  size={"medium"}
                />
                <h5>Cell Phones & Tablets</h5>
                <div className={styles.cf_wrap}>
                  <ul>
                    {FilterList.map((category, i) => (
                      <li key={i}>
                        <Link to={`/shop/category/${category.path}`}>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={9}>
              <div>
                <SectionHeader title={"Best seller in this category"} />

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
                      document
                        .querySelector(`.${styles.prev}`)
                        .addEventListener("click", () => {
                          swiper.slidePrev();
                        });
                      document
                        .querySelector(`.${styles.next}`)
                        .addEventListener("click", () => {
                          swiper.slideNext();
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
                    {Products.map((item, i) => (
                      <SwiperSlide key={i}>
                        <ProductItem key={i} item={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <button className={styles.prev}>prev</button>
                  <button className={styles.next}>next</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className={styles.pb_inner2}>
          <Row>
            <Col lg={3} md={3} sm={12} xs={12}>
              <div className={styles.categories2}>
                <SectionHeader title={"categories"} Btntext={" Reset All"} />
                <div className={styles.c_span}>
                  <span>Min: $45.00 </span>
                  <span>10.9 inch </span>
                  <span>Color: Red </span>
                  <span>128GB </span>
                </div>
                <div className={styles.filter_brand}>
                  <strong>By Brandsh</strong>
                  <input type="text" name="brand" className={styles.fb_input} />
                  <div className={styles.fb_checkbox}>
                    <input type="checkbox" id="brand1" />
                    <img src={fbimg01} alt="Brand 1" />
                    <span>(14)</span>
                  </div>
                  <div className={styles.fb_checkbox}>
                    <input type="checkbox" id="brand1" />
                    <img src={fbimg02} alt="Brand 2" />
                    <span>(6)</span>
                  </div>
                  <div className={styles.fb_checkbox}>
                    <input type="checkbox" id="brand1" />
                    <img src={fbimg03} alt="Brand 3" />
                    <span>(7)</span>
                  </div>
                  <div className={styles.fb_checkbox}>
                    <input type="checkbox" id="brand1" />
                    <img src={fbimg04} alt="Brand 4" />
                    <span>(18)</span>
                  </div>
                  <div className={styles.fb_checkbox}>
                    <input type="checkbox" id="brand1" />
                    <img src={fbimg05} alt="Brand 5" />
                    <span>(1)</span>
                  </div>
                </div>
                <div className={styles.filter_price}>
                  <strong>By Price</strong>
                  <div className={styles.priceRange}>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="10"
                      value={priceValueMin}
                      onChange={(e) => setPriceValueMin(e.target.value)}
                      className={styles.priceRangeMin}
                    />
                  </div>
                  <div className={styles.fp_inputs}>
                    <span>
                      $
                      <input
                        type="number"
                        value={priceValueMin}
                        onChange={(e) => setPriceValueMin(e.target.value)}
                        placeholder="0"
                      />
                    </span>
                    -
                    <span>
                      $
                      <input
                        type="number"
                        value={priceValueMax}
                        onChange={(e) => setPriceValueMax(e.target.value)}
                        placeholder="1000"
                      />
                    </span>
                    <span className={styles.bspan}>
                      <button>Go</button>
                    </span>
                  </div>
                </div>
                <div className={styles.filter_rating}>
                  <strong>By Rating</strong>
                  <div className={styles.rating}>
                    <div className={styles.fr_checkbox}>
                      <input type="checkbox" id="brand1" />
                      <span className={styles.fr_stars}>★★★★★</span>
                      <span>(52)</span>
                    </div>
                    <div className={styles.fr_checkbox}>
                      <input type="checkbox" id="brand1" />
                      <span className={styles.fr_stars}>★★★★☆</span>
                      <span>(52)</span>
                    </div>
                    <div className={styles.fr_checkbox}>
                      <input type="checkbox" id="brand1" />
                      <span className={styles.fr_stars}>★★★☆☆</span>
                      <span>(52)</span>
                    </div>
                    <div className={styles.fr_checkbox}>
                      <input type="checkbox" id="brand1" />
                      <span className={styles.fr_stars}>★★☆☆☆</span>
                      <span>(52)</span>
                    </div>
                  </div>
                </div>
                <div className={styles.filter_screen}>
                  <strong>By Screen Size</strong>
                  <div className={styles.screen}>
                    <span>7” & Under</span>
                    <span>7.1” - 8.9”</span>
                    <span>9” - 10.9”</span>
                    <span>11” & Greater</span>
                  </div>
                </div>
                <div className={styles.filter_color}>
                  <strong>By Color</strong>
                  <div className={styles.color}>
                    <span className={styles.color1}></span>
                    <span className={styles.color2}></span>
                    <span className={styles.color3}></span>
                    <span className={styles.color4}></span>
                    <span className={styles.color5}></span>
                    <span className={styles.color6}></span>
                    <span className={styles.color7}></span>
                    <span className={styles.color8}></span>
                  </div>
                </div>
                <div className={styles.filter_memory}>
                  <strong>By Memory</strong>
                  <div className={styles.memory}>
                    <Col lg={6}>
                      <div className={styles.memorys}>
                        <input type="checkbox" id="brand1" />
                        <label>
                          12GB <span>(4)</span>
                        </label>
                      </div>
                      <div className={styles.memorys}>
                        <input type="checkbox" id="brand1" />
                        <label>
                          8GB <span>(3)</span>
                        </label>
                      </div>
                      <div className={styles.memorys}>
                        <input type="checkbox" id="brand1" />
                        <label>
                          6GB <span>(12)</span>
                        </label>
                      </div>
                      <div className={styles.memorys}>
                        <input type="checkbox" id="brand1" />
                        <label>
                          4GB <span>(6)</span>
                        </label>
                      </div>
                      <div className={styles.memorys}>
                        <input type="checkbox" id="brand1" />
                        <label>
                          3GB <span>(7)</span>
                        </label>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className={styles.memorys}>
                        <input type="checkbox" id="brand1" />
                        <label>
                          1.5GB <span>(1)</span>
                        </label>
                      </div>{" "}
                      <div className={styles.memorys}>
                        <input type="checkbox" id="brand1" />
                        <label>
                          1GB <span>(1)</span>
                        </label>
                      </div>{" "}
                      <div className={styles.memorys}>
                        <input type="checkbox" id="brand1" />
                        <label>
                          512MB <span>(2)</span>
                        </label>
                      </div>
                    </Col>
                  </div>
                </div>
                <div className={styles.filter_condition}>
                  <strong>By Condition</strong>
                  <div className={styles.conditions}>
                    <input type="checkbox" id="brand1" />
                    <label>
                      New <span>(21)</span>
                    </label>
                  </div>
                  <div className={styles.conditions}>
                    <input type="checkbox" id="brand1" />
                    <label>
                      Like New <span>(2)</span>
                    </label>
                  </div>
                  <div className={styles.conditions}>
                    <input type="checkbox" id="brand1" />
                    <label>
                      Open Box <span>(38)</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={styles.addimg}>
                <h6 className={styles.addimg_heading6}>
                  OKODo{" "}
                  <span>
                    hero 11+ <br />
                    5K wireless
                  </span>
                </h6>
                <p>FROM</p>
                <h5 className={styles.addimg_heading5}>$169</h5>
              </div>
            </Col>
            <Col lg={9} md={9} sm={12} xs={12}>
                <div className={styles.pb_products}>
                  <div className={styles.product_topbar}>
                    <div className={styles.results}>
                      <strong>
                        1-40
                        <span className={styles.tb_span}>of 120 results</span>
                      </strong>
                    </div>
                    <div className={styles.itemnum}>
                      <span className={styles.tb_span}>Show item</span>
                      <div className={styles.itemnum_div}>
                        <Link to={"/"}>24</Link>
                        <Link to={"/"}>48</Link>
                        <Link to={"/"}>72</Link>
                      </div>
                    </div>
                    <div className={styles.itemOption}>
                      <span className={styles.tb_span}>Show item</span>
                      <div>{/* make a select */}</div>
                    </div>
                    <div className={styles.viewas}>
                      <span className={styles.tb_span}>view as</span>
                    </div>
                  </div>
                </div>
                <div className={styles.pb_products_list}>
                  {Products.map((item, index) => (
                    <Col lg={3} md={4} sm={6} xs={12} key={index}>
                      <ProductItem item={item} />
                    </Col>
                  ))}
                </div>
              </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default ProductPage;
