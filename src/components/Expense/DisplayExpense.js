import React, {useState} from "react";
import Expense from "./Expense";
import FilterExpenseYear from "./FilterExpenseYear";
import "./DisplayExpense.css";

function DisplayExpense(props){

    const [changedDate, setChangedDate] = useState('2022');

    const dateChangeManager = changedYear => {
        setChangedDate(changedYear);
    }

    const filteredExpenseItems = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === changedDate;
    });

    return (
        <div className = "display-expenses">
            <FilterExpenseYear 
            selectedDate = {changedDate}
            dateChangePasser={dateChangeManager}
            />
            
            {filteredExpenseItems.map(expense => (
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