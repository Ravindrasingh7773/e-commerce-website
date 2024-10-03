import React, { Fragment, useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs"; 
import img5 from "../../assets/images/brand-logo.png";
import img6 from "../../assets/images/brand-img.png";
import img7 from "../../assets/images/small-img1.jpeg";
import img8 from "../../assets/images/laptop-big-img1.png";
import img9 from "../../assets/images/laptop-big-img2.png";
import img10 from "../../assets/images/laptop-big-img3.png";
import styles from "./style.module.css";
import WishlistIcon from "../../icons/wishListIcon";
import Button from "../button";
import FacebookIcon from "../../icons/facebookIcon";
import TwitterIcon from "../../icons/twitterIcon";
import InstagramIcon from "../../icons/instagramIcon";
import YoutubeIcon from "../../icons/youtubeIcon";
import { Autoplay, Pagination } from "swiper/modules"; 
import WorldIcon from "../../icons/worldIcon";
import CloseIcon from "../../icons/closeIcon";
import DeliveryIcon from "../../icons/deliveryIcon";
import { Link } from "react-router-dom";
import ProductItem from "../productItem"; 
import Section from "../section";
import BreadCrumb from "../breadCrumb";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Magnifier } from "react-image-magnifiers";
import { useParams } from 'react-router-dom';
import InStockIcon from "../../icons/InStockIcon";
import OutStockIcon from "../../icons/outStockIcon";
import StarIcon from "../../icons/starIcon";
import ProductData from "../../data/product.json"
import { CartContext } from "../../context/cartProvider";
  
const SingleProduct = () => { 
  const {addToCart} = useContext(CartContext)
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const totalStars = 5;

  const product = ProductData.find((product) => product.id === parseInt(id));

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

const BreadCrumbItems = [
  { name: "Shop", path: "/shop" },
  { name: `${product.category}`, path: "/" },
  { name: `${product.title}`, path: "/" },
];

  return (
    <div className={styles.single_page}>
      <BreadCrumb items={BreadCrumbItems} />
      <Section customCss={styles.mt_30} pt={"30"} pb={"30"} bg={"white"}>
        <Container>
          <Row>
            <Col lg={5}>
              <div className={styles.product_img_box}>
                <div className={styles.big_img}>
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10} 
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <Magnifier
                        imageSrc={product.image}
                        imageAlt="product img"
                        mouseActivation="hover" // Can be "hover" or "click"
                        cursorStyle="zoom-in" // Customize the cursor style when hovering
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Magnifier
                        imageSrc={product.image}
                        imageAlt="product img"
                        mouseActivation="hover"
                        cursorStyle="zoom-in"
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Magnifier
                        imageSrc={product.image}
                        imageAlt="product img"
                        mouseActivation="hover"
                        cursorStyle="zoom-in"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className={styles.pib_others}>
                  <div className={styles.new}>New</div>
                  <div className={styles.wishlist}>
                    <WishlistIcon />
                  </div>
                </div>
                <div className={styles.small_images}>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={styles.my_swipper}
                  >
                    <SwiperSlide>
                      <div className={styles.small_img}>
                        <img src={product.image} alt="small img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.small_img}>
                        <img src={product.image} alt="small img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.small_img}>
                        <img src={product.image} alt="small img" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.product_info}>
                
            <div className={styles.pi_rating}>
              <span className={styles.pir_stars}>
                {[...Array(totalStars)].map((_, index) => (
                  <div
                    key={index}
                    className={
                      index < product.rating
                        ? styles.filledStar
                        : styles.unfilledStar
                    }
                  >
                    <StarIcon />
                  </div>
                ))}
              </span>
              {product.reviews && (
                <span className={styles.pir_count}>({product.reviews})</span>
              )}
            </div>
                <div className={styles.product_name}>
                  {product.title}
                </div>
                <div className={styles.product_price}>
                {product.priceRange !== null ? (
  <div className={styles.price}>
    <h3>{product.priceRange}</h3>
  </div>
) : (
  <div className={styles.price}>
    {product.price && typeof product.price === "string" && product.price.trim() !== "" ? (
      <h3>{product.price.startsWith("$") ? product.price : `$${Number(product.price).toFixed(2)}`}</h3>
    ) : (
      <h3>Price not available</h3>
    )}
    {product.oldPrice && product.price && typeof product.price === "string" && product.price.trim() !== "" && (
      <>
        <del>${Number(product.oldPrice).toFixed(2)}</del>
        <span className={styles.discountBadge}>
          Save ${(Number(product.oldPrice) - Number(product.price.replace("$", ""))).toFixed(2)}
        </span>
      </>
    )}
  </div>
)}
</div>
                <p className={styles.product_other_info}>
                  {product.description}
                </p>
                <div className={styles.shipping_btn}>
                {product.shipping.toLowerCase() === "free" ? (
                <span className={styles.free_shipping}>FREE SHIPPING</span>
              ) : (
                <span
                  className={`${styles.shipping} ${styles.shipping_charge}`}
                >
                  {product.shipping} SHIPPING
                </span>
              )}

              {product.freeGift && <span className={styles.gift}>FREE GIFT</span>}
                </div>
                <div>
                {product.inStock ? (
                <span  className={styles.stock}>
                  <InStockIcon /> In Stock
                </span>
              ) : (
                <span  className={styles.stock}> 
                  <OutStockIcon />
                  Out Of Stock
                </span>
              )}
                </div>
                <div className={styles.quantity_box}>
                  <span>qty</span>
                  <div className={styles.quantity_wrapper}>
                    <div className={styles.count}>
                      <button>-</button>
                      <input type="number" name="number" value={"2"} />
                      <button>+</button>
                    </div>
                    <div className={styles.add_to_cart}>
                      <Button
                        text={"Add To Cart"}
                        size={"large"}
                        bg={"yellow"}
                        customCss={styles.addTo_cart_btn}
                        isButton={true}
                        onClick={() => {addToCart(product)}}
                      />
                    </div>
                    <div className={styles.wish_list}>
                      <WishlistIcon />
                    </div>
                  </div>
                  <div className={styles.secoure}>Guaranteed Safe Checkout</div>
                  <div className={styles.brand_img}>
                    <img src={img5} alt="brand img" />
                  </div>
                </div>
                <ul className={styles.category}>
                  <li>
                    <span>SKU: </span>ABC025168
                  </li>
                  <li>
                    <span>Category: </span>{product.category}
                  </li>
                  <li>
                    <span>Tags: </span>{product.categories}
                  </li>
                </ul>
                <div className={styles.social_icons}>
                  <div className={styles.icon}>
                    <TwitterIcon />
                  </div>
                  <div className={styles.icon}>
                    <FacebookIcon />
                  </div>
                  <div className={styles.icon}>
                    <InstagramIcon />
                  </div>
                  <div className={styles.icon}>
                    <YoutubeIcon />
                  </div>
                  <div className={styles.icon}>
                    <WorldIcon />
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div className={styles.brand_section}>
                <div className={styles.brand_title}>
                  Brand: <span>Sonex</span>
                </div>
                <div className={styles.brand_logo}>
                  <img src={img6} alt="brand logo" />
                </div>
              </div>
              <div className={styles.self_cart_box}>
                <div className={styles.scb_title}>Your Cart</div>
                <div className={styles.scb_product}>
                  <div className={styles.scb_product_img}>
                    <img src={img7} alt="product img" />
                  </div>
                  <div className={styles.scb_product_name}>
                    <div className={styles.name}>
                     {product.name}
                    </div>
                    <div className={styles.scb_product_price}>{product.price}</div>
                  </div>
                  <div className={styles.close_btn}>
                    <CloseIcon />
                  </div>
                </div>
                <div className={styles.sub_total}>
                  Sub Total: <span>$1,737.00</span>
                </div>
                <div className={styles.scb_btns}>
                  <Button
                    text={"view cart"}
                    size={"medium"}
                    bg={"brown"}
                    transform={"uppercase"}
                    customCss={styles.checkout_btn}
                  />
                  <Button
                    text={"checkout"}
                    size={"medium"}
                    bg={"yellow"}
                    transform={"uppercase"}
                    customCss={styles.checkout_btn}
                  />
                </div>
              </div>
              <div className={styles.delivery}>
                <DeliveryIcon />
                <span>
                  Ships from
                  <span className={styles.states}> United States</span>{" "}
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section customCss={styles.mt_30} pt={"30"} pb={"30"} bg={"white"}>
        <Container>
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
                      <ProductItem item={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section customCss={styles.mt_30} pt={"30"} pb={"30"} bg={"white"}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.product_all_details}>
                <Link>description</Link>
                <Link>reviews </Link>
                <Link>additional information</Link>
              </div>
              <div className={styles.description_box}>
                <div className={styles.db_first_detail}>
                  <div className={styles.product_first_about}>
                    Built for ultra-fast performance, the thin and lightweight
                    Samsung Galaxy Tab S2 goes anywhere you go. Photos, movies
                    and documents pop on a crisp, clear Super AMOLED display.
                    Expandable memory lets you enjoy more of your favorite
                    content. And connecting and sharing between all your Samsung
                    devices is easier than ever. Welcome to life with the
                    reimagined Samsung Galaxy Tab S2. Watch thev world come to
                    life on your tablet's
                    <span> Super AMOLED display * .</span>
                    With deep contrast, rich colors and crisp details, you won't
                    miss a thing
                  </div>
                  <div className={styles.description_img1}>
                    <img src={img8} alt="product img" />
                  </div>
                  <cite>
                    * The Galaxy Tab S2’s 4 : 3 ratio display provides you with
                    an ideal environment for performing office tasks.
                  </cite>
                </div>
                <div className={styles.db_second_detail}>
                  <div className={styles.db_title}>From the manufacturer</div>
                  <div className={styles.product_first_about}>
                    Dive into the blockbuster movies you can't wait to see.
                    Switch between your favorite apps quickly and easily. The
                    new and improved octa-core processor gives you the power and
                    speed you need to see more and do more. Expand your tablet's
                    memory from 32GB to up to an additional 128GB and enjoy more
                    of your favorite music, photos, movies and games on the go
                    with a microSD card. With Quick Connect, start a show on
                    your Smart TV and, with the touch of a button, take it with
                    you by moving it to your Galaxy Tab S2. <br />
                    <br />
                    Or send videos and photos from your tablet screen to your TV
                    screen to share with everyone in the room. Work effortlessly
                    between your Samsung tablet and Samsung smartphone with
                    SideSync. Quickly drag and drop photos between devices. And
                    even respond to a call from your smartphone right on your
                    tablet screen.
                  </div>
                  <div className={styles.db_second_detail_imaes}>
                    <div className={styles.description_img3}>
                      <img src={img9} alt="product img" />
                    </div>
                    <div className={styles.description_img4}>
                      <img src={img10} alt="product img" />
                    </div>
                  </div>
                </div>

                <div className={styles.db_second_detail}>
                  <div className={styles.db_title}>
                    Semsong Galaxy Tab S2, 8-Inch, White
                  </div>
                  <div className={styles.product_third_about}>
                    Or send videos and photos from your tablet screen to your TV
                    screen to share with everyone in the room. Work effortlessly
                    between your Samsung tablet and Samsung smartphone with
                    SideSync. Quickly drag and drop photos between devices. And
                    even respond to a call from your smartphone right on your
                    tablet screen.
                  </div>
                </div>
                <div className={styles.show_more_btn}>show more</div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
};

export default SingleProduct;
