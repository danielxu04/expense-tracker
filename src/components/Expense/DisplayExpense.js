import React, {useState} from "react";
import FilterExpenseYear from "./FilterExpenseYear";
import ExpenseList from "./ExpenseList";
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
            <ExpenseList expenses={filteredExpenseItems}/>
        </div>
    );
}


export default DisplayExpense;