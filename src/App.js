import "./App.css";
import React, { useState } from "react";
import Form from "./Components/Form/Form";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseData = (enteredInput) => {
    setExpenses([enteredInput, ...expenses]);
  };

  return (
    <div className="App">
      <Form ExpenseItem={addExpenseData} />
      <div className="expenses">
        {expenses.map((e, i) => (
          <ExpenseItem
            Title={e.Title}
            Amount={e.Amount}
            Date={e.Date}
            key={i}
            ID={e.Id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
