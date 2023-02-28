import React from "react";
import ItemDate from "../ItemDate/ItemDate";
import Styles from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <div className={Styles.expense_item}>
      <div className={Styles.left_side}>
        <ItemDate Date={props.Date} />
        <p className={Styles.title}>{props.Title}</p>
      </div>
      <p className={Styles.amount}>${props.Amount}</p>
    </div>
  );
};

export default ExpenseItem;
