import React from "react";
import styles from "./style.module.css"


const BlogBox2 = ({BlogImg,title,des}) => {
  return (
    <div className={styles.blog_box}>
      <div className={styles.bb_img}>
        <img src={BlogImg} alt="" />
      </div>
      <div className={styles.bb_cnt}>
        <h4>{title}</h4>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default BlogBox2;
