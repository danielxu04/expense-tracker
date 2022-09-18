import React from "react";

import './ExpenseDate.css';

function ExpenseDate(props){
    return (
        <div className = "date-container">
            <div className = "month">{props.date.toLocaleString('en-US', {month: 'long'})}</div>
            <div className = "day">{props.date.getDate()}</div>
            <div className = "year">{props.date.getFullYear()}</div>
        </div>
    );
}

export default ExpenseDate;