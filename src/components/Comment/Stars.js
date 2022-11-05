import React from "react";
import Star from "./Star";

import styles from "./Stars.module.css";

const Stars = ({ count, handleClick }) => (
  <span className={styles.stars}>
    {[1,2,3,4,5].map(i => (
      <Star key={i} isFull={i < count} onClick={() => handleClick(i + 1)} /> 
    ))}
  </span>
);

Stars.defaultProps = {
  count: 1,
  handleClick: e => e
};

export default Stars;

