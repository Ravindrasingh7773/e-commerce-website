import React from 'react'; 
import styles from './style.module.css'; // Using CSS Modules

const FeatureBar = ({features}) => {
  return (
    <div className={styles.featureBar}>
      {features.map((feature, i) => (
        <div key={i} className={styles.featureItem}>
          <span className={styles.icon}>{feature.icon}</span>
          <span className={styles.text}>{feature.text}</span>
        </div>
      ))}
    </div>
  );
};

export default FeatureBar;
