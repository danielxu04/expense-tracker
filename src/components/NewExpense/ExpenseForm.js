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
    };

    const [displayForm, setDisplayForm] = useState(false);

    const editForm = () => {
        setDisplayForm(true);
    }

    let buttonOrForm = <button onClick={editForm}>Add Expense</button>;

    if(displayForm){
        buttonOrForm = <CreateExpenseForm newExpenseData={passNewExpenseData}/>;
    }

    return (
    <div className = "expense-form-container">
        {buttonOrForm}
    </div >
    );
}

export default ExpenseForm;