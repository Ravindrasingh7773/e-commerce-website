import React from 'react'
import styles from "./style.module.css"
const BlogBox = ({bgImg,title,des}) => {
  return (
    <div className={styles.blog_box}  style={bgImg ? { backgroundImage: `url(${bgImg})` } : {}}> 
    <div className={styles.bb_cnt}> 
        <h4>{title}</h4>
        <p>{des}</p>
    </div>
    </div>
  )
}

export default BlogBox