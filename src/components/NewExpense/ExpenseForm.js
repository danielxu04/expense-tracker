import React, {useState} from "react";

import "./ExpenseForm.css";
import CreateExpenseForm from "./CreateExpenseForm";

function ExpenseForm (props){

    function uniqueId(){
        return Math.floor((Math.random() + 1) * 0x10000).toString(16).substring(1);
    }

    const passNewExpenseData = (expenseData) => {
        const data = {
            ...expenseData,
            key: uniqueId()
        };
        props.addExpense(data);
        setDisplayForm(false);
    };

    const [displayForm, setDisplayForm] = useState(false);

    const editForm = () => {
        setDisplayForm(true);
    }
    const showButton = () => {
        setDisplayForm(false);
    }

    let buttonOrForm = <button onClick={editForm}>Add Expense</button>;

    if(displayForm){
        buttonOrForm = <CreateExpenseForm newExpenseData={passNewExpenseData} b={showButton}/>;
    }

    return (
    <div className = "expense-form-container">
        {buttonOrForm}
    </div >
    );
}

export default ExpenseForm;