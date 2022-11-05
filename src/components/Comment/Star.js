import React from "react";
import styles from "./Star.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";



const renderStar = isFull => {
  console.log("isFull", isFull)
  const icon = isFull ? faStar : regularStar;
  return <FontAwesomeIcon icon={icon} size="lg" />;
};


const Star = ({ isFull, onClick }) => (
  <span className={styles.star} onClick={onClick}>
    {renderStar(isFull)}
  </span>
);

export default Star;

