import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const MenuItem = ({ item }) => {
  // Ensure item exists and has the required properties
  if (!item || !item.path) {
    return null; // Return null if item or path is undefined
  }

  const hasChildren = item?.children?.length > 0;

  return (
    <div
      className={`${styles.menuItem} ${
        hasChildren ? styles.menuItemWithChildren : ""
      }`}
    >
      <NavLink
        to={item.path}
        className={hasChildren ? styles.menuItemWithChildren : ""}
      >
        {item.title}
      </NavLink>
      {hasChildren && (
        <div className={styles.menuItem_children}>
          {item.children.map((child, index) => (
            <div key={index} className={styles.mic_item}>
              {child?.path ? (
                <NavLink to={child.path}>{child.title}</NavLink>
              ) : (
                <span>{child.title}</span> // Fallback if child.path is missing
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
