import React from "react";

import Expense from "./Expense";
import "./ExpenseList.css";

function ExpenseList(props){

    if(props.expenses.length === 0){
        return <p className="no-expense">No Expenses Found...</p>;
    }


    return (
    <ul className="expense-list">
        {props.expenses.map(expense => (
            <Expense 
                key={expense.key}
                name={expense.name}
                date={expense.date}
                price={expense.price}
            />
        ))}
    </ul>
    );
}

export default ExpenseList;