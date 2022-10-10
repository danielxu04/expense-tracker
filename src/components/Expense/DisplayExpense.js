import React from "react";
import Expense from "./Expense";
import FilterExpenseYear from "./FilterExpenseYear";
import "./DisplayExpense.css";

function DisplayExpense(props){

    const [changedDate, setChangedDate] = useState("2020");

    const dateChangeManager = changedYear => {
        setChangedDate(changedYear);
    }

    return (
        <div className = "display-expenses">
            <FilterExpenseYear 
            selectedDate = {changedDate}
            dateChangePasser={dateChangeManager}
            />
            
            {props.expenses.map(expense => (
            <Expense 
                key={expense.key}
                name={expense.name}
                date={expense.date}
                price={expense.price}
            />
            ))}
        </div>
    );
}


export default DisplayExpense;