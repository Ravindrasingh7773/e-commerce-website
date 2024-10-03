import React, { Fragment } from "react"; 
import StarIcon from "../../icons/starIcon";
import { Link } from "react-router-dom";
import InStockIcon from "../../icons/InStockIcon";
import WishListIcon from "../../icons/wishListIcon";
import styles from "./style.module.css";
import OutStockIcon from "../../icons/outStockIcon";

const ProductItem = ({ item, centerProduct }) => {
  const totalStars = 5;

  return (
    <Fragment>
      {centerProduct ? (
        <div className={`${styles.product_item} text-center`}>
          <span className={styles.badge}>NEW</span>
          <div className={styles.pi_image}>
            <Link to={ `/singleProduct/${item.id}`}>
              <img src={item.image} alt="" />
            </Link>
          </div>
          <div className={`${styles.pi_cnt} ${styles.pi_cnt2}`}>
            <div className={styles.pic_cnt}>
              <div className={`${styles.pi_rating} justify-content-center`}>
                <span className={styles.pir_stars}>
                  {[...Array(totalStars)].map((_, index) => (
                    <div
                      key={index}
                      className={
                        index < item.rating
                          ? styles.filledStar
                          : styles.unfilledStar
                      }
                    >
                      <StarIcon />
                    </div>
                  ))}
                </span>
                {item.reviews && (
                  <span className={styles.pir_count}>({item.reviews})</span>
                )}
              </div>

              <Link to={`/singleProduct/${item.id}`} className={`${styles.title2}`}>
                {item.title}
              </Link>

              <div className={`${styles.price} justify-content-center`}>
                {item.price !== null && item.price !== undefined ? (
                  <h3 className="text-center">
                    ${Number(item.price).toFixed(2)}
                  </h3>
                ) : (
                  <h3 className="text-center">Price not available</h3>
                )}
              </div>
            </div>
            <div className={styles.wishlist_wrap}>
              <span>50 Purchases</span>
              <div className={styles.wish_icon2}>
                <WishListIcon />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.product_item}>
          <div className={styles.wish_icon}>
            <WishListIcon />
          </div>
          <div className={styles.pi_image}>
            <Link to={`/singleProduct/${item.id}`}>
              <img src={item.image} alt="" />
            </Link>
          </div>
          <div className={styles.pi_cnt}>
            <div className={styles.pi_rating}>
              <span className={styles.pir_stars}>
                {[...Array(totalStars)].map((_, index) => (
                  <div
                    key={index}
                    className={
                      index < item.rating
                        ? styles.filledStar
                        : styles.unfilledStar
                    }
                  >
                    <StarIcon />
                  </div>
                ))}
              </span>
              {item.reviews && (
                <span className={styles.pir_count}>({item.reviews})</span>
              )}
            </div>
            <div className={styles.title}>
              <Link to={`/singleProduct/${item.id}`}>
                <h2>{item.title}</h2>
              </Link>
            </div>
            {item.priceRange !== null ? (
  <div className={styles.price}>
    <h3>{item.priceRange}</h3>
  </div>
) : (
  <div className={styles.price}>
    {item.price && typeof item.price === "string" && item.price.trim() !== "" ? (
      <h3>{item.price.startsWith("$") ? item.price : `$${Number(item.price).toFixed(2)}`}</h3>
    ) : (
      <h3>Price not available</h3>
    )}
    {item.oldPrice && item.price && typeof item.price === "string" && item.price.trim() !== "" && (
      <>
        <del>${Number(item.oldPrice).toFixed(2)}</del>
        <span className={styles.discountBadge}>
          Save ${(Number(item.oldPrice) - Number(item.price.replace("$", ""))).toFixed(2)}
        </span>
      </>
    )}
  </div>
)}

            <div className={styles.shippings}>
              {item.shipping.toLowerCase() === "free" ? (
                <span className={styles.free_shipping}>FREE SHIPPING</span>
              ) : (
                <span
                  className={`${styles.shipping} ${styles.shipping_charge}`}
                >
                  {item.shipping} SHIPPING
                </span>
              )}

              {item.freeGift && <span className={styles.gift}>FREE GIFT</span>}
            </div>
            <div className={styles.stock}>
              {item.inStock ? (
                <span>
                  <InStockIcon /> In Stock
                </span>
              ) : (
                <span>
                  {" "}
                  <OutStockIcon />
                  Out Of Stock
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductItem;
