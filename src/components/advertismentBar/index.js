import React, { Fragment } from "react";
import styles from "./style.module.css"
import Button from "../button";
import AddImage from "../../assets/images/bannerLogo2.png";
import AddImage2 from "../../assets/images/advertisment_image.png"; 

const AdvertismentBar = () => {
  return (
    <Fragment>
              <div className={styles.advertisment_bar}>
                <div className={styles.ab_left}>
                  <img src={AddImage}  alt="" />
                  <img src={AddImage2} alt="" />
                </div> 
                <div className={styles.ab_right}>
                    <div className={styles.abr_cnt}>
                        <p>Pay with 4 installment, 0% interest</p>
                        <h3><b>Buy Now</b>, Pay Later</h3>
                    </div>
                  <Button
                    text={"DISCOVER NOW"}
                    size={"medium"}
                    bg={"white"}
                    type={"fill"}
                    to={"/"}
                  />
                </div>
              </div> 
    </Fragment>
  );
};

export default AdvertismentBar;
