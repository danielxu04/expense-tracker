import React from "react";

import "./ExpenseForm.css";
import CreateExpenseForm from "./CreateExpenseForm";

function ExpenseForm (){
    function uniqueId(){
        return Math.floor((Math.random() + 1) * 0x10000).toString(16).substring(1);
    }

    const passNewExpenseData = (expenseData) => {
        const data = {
            ...expenseData,
            id: uniqueId()
        };

        console.log(data);
    };

    return (
    <div className = "expense-form-container"> 
        <CreateExpenseForm newExpenseData={passNewExpenseData}/>
    </div >
    );
}

export default ExpenseForm;