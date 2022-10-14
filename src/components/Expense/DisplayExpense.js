import React, {useState} from "react";
import FilterExpenseYear from "./FilterExpenseYear";
import ExpenseList from "./ExpenseList";
import "./DisplayExpense.css";
import DisplayExpenseChart from "./DisplayExpenseChart";

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
            <DisplayExpenseChart expenseList={filteredExpenseItems} />
            <ExpenseList expenses={filteredExpenseItems} />
        </div>
    );
}


export default DisplayExpense;