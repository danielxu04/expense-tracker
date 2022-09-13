import React from "react";

function ExpenseDate(props){
    return (
        <div className = "expense-date">
            <div>{props.date.toLocaleString('en-US', {month: 'long'})}</div>
            <div>{props.date.getDate()}</div>
            <div>{props.date.getFullYear()}</div>
        </div>
    );
}

export default ExpenseDate;