import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from "react";

import expenses from "./components/Expense/expenses";
import DisplayExpense from "./components/Expense/DisplayExpense";
import ExpenseForm from "./components/NewExpense/ExpenseForm";

function App() {

  const [expenseList, setExpenseList] = useState(expenses);

  const addExpenseDataPasser = expense => {
    setExpenseList(prevExpenseList => {
      return [expense, ...prevExpenseList];
    });
    console.log(expense);
  };

  return ( 
  <>
    <ExpenseForm addExpense={addExpenseDataPasser} />

    <DisplayExpense expenses={expenseList}/>
  </>
  );
}

export default App;
