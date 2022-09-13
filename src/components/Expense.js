import React from "react";
import './Expense.css';


function Expense(props){
    return <div className = "expense-item">
        <div className = "expense-date">{props.date.getFullYear()}-{props.date.getMonth()}-{props.date.getDate()}</div>
        <div className = "expense-description">
            <h2>{props.name}</h2>
            <div className = "expense-price">$ {props.price}</div>
        </div>
    </div>
}

export default Expense;