import React from "react";
import ItemDate from "../ItemDate/ItemDate";
import Styles from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  const delBtn = () => {
    props.deleteHandler(props.ID);
  };

  return (
    <div className={Styles.expense_item}>
      <div className={Styles.main_content}>
        <ItemDate Date={props.Date} />
        <p className={Styles.title}>{props.Title}</p>
        <p className={Styles.amount}>${props.Amount}</p>
      </div>
      <button className={Styles.del_btn} onClick={delBtn}>
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default ExpenseItem;
