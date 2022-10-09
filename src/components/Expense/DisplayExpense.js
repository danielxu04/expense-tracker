import React from "react";
import Expense from "./Expense";
import FilterExpenseYear from "./FilterExpenseYear";
import "./DisplayExpense.css";



function DisplayExpense(props){

    const dateChangeManager = changedYear => {
        console.log("DisplayExpense:");
        console.log(changedYear);
    }
    
    return (
        <div className = "display-expenses">
            <FilterExpenseYear dateChangePasser={dateChangeManager}/>
            {props.expenses.map(expense => (
            <Expense 
                name={expense.name} 
                date={expense.date} 
                price={expense.price}
            />
            ))}
        </div>
    );
}


export default DisplayExpense;