import React from "react";

import "./ExpenseForm.css";
import CreateExpenseForm from "./CreateExpenseForm";

function ExpenseForm (){
    return (
    <div className = "expense-form-container"> 
        <CreateExpenseForm />
    </div >
    );
}

export default ExpenseForm;