import React, { useState } from "react";
import Styles from "./Form.module.css";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const addItem = () => {
    const expenseData = {
      ID: Math.random() * 10,
      Title: title,
      Amount: amount,
      Date: new Date(date),
    };
    if (title === "" || amount === "" || date === "") {
      window.alert("Input field is blank !!");
    } else {
      props.ExpenseItem(expenseData);
      setTitle("");
      setAmount("");
      setDate("");
    }
  };

  return (
    <div className={Styles.form_container}>
      <h2 className={Styles.heading}>EXPENSE LIST</h2>
      <form>
        <label>
          <span>Title</span>
          <input
            type="text"
            placeholder="Title.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Amount</span>
          <input
            type="number"
            placeholder="Amount.."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          <span>Date</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </form>
      <button className={Styles.add_btn} onClick={addItem}>
        + ADD
      </button>
    </div>
  );
};

export default Form;
