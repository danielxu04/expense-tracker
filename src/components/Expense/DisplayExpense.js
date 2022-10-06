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
            <Expense 
                name={props.expenses[0].name}
                date={props.expenses[0].date}
                price={props.expenses[0].price}
            />
            <Expense 
                name={props.expenses[1].name}
                date={props.expenses[1].date}
                price={props.expenses[1].price}
            />
            <Expense 
                name={props.expenses[2].name}
                date={props.expenses[2].date}
                price={props.expenses[2].price}
            />
            <Expense 
                name={props.expenses[3].name}
                date={props.expenses[3].date}
                price={props.expenses[3].price}
            />
        </div>
    );
}


export default DisplayExpense;