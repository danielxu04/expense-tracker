import React from "react";
import './Expense.css';

function Expense(){
    return <div className = "expense-item">
        <div className = "expense-date">Date Placeholder</div>
        <div className = "expense-description">
            <h2>Expense Name Placeholder</h2>
            <div className = "expense-price">$ Expense Price</div>
        </div>
    </div>
}

export default Expense;