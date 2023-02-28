import React from "react";
import Styles from "./ItemDate.module.css";

const ItemDate = (props) => {
  const date = props.Date;
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className={Styles.date}>
      <p className={Styles.day}>{day}</p>
      <p className={Styles.month}>{month}</p>
      <p className={Styles.year}>{year}</p>
    </div>
  );
};

export default ItemDate;
