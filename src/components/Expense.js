import React from "react";
import './Expense.css';
import ExpenseDate from './ExpenseDate.js';


function Expense(props){

    return <div className = "expense-item">

        <ExpenseDate date={props.date}/> 

        <div className = "expense-description">
            <h2>{props.name}</h2>
            <div className = "expense-price">$ {props.price}</div>
        </div>
    </div>
}

export default Expense;