import React, {useState} from "react";

import "./CreateExpenseForm.css";

function CreateExpenseForm(){

    {/* item object that utilizes useState to modify properties */}
    let [enterItem, setItem] = useState({
        expense: "",
        price: "",
        date: new Date("")
    });

    const expenseChanger = event => {
        setItem( (prevState) => {
            return {...prevState, expense: event.target.value};
        });
    };

    const priceChanger = event => {
        setItem( (prevState) => {
            return {...prevState, price: event.target.value};
        });
    };

    const dateChanger = event => {
        setItem( (prevState) => {
            return {...prevState, date: event.target.value}
        });
    };

    const submitter = (event) => {
        event.preventDefault(); /* continue handling with javascript */

        console.log(enterItem);
    }

    return (<form onSubmit={submitter}>
        <div className="form-items">
            <div className="form-item">
                <label>Expense</label>
                <input type="text" onChange={expenseChanger}></input>
            </div>
            <div className="form-item">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2024-12-31" onChange={dateChanger}></input>
            </div>
            <div className="form-item">
                <label>Price</label>
                <input type="number" min="0.01" step="0.01" onChange={priceChanger}></input>
            </div>
        </div>

        <div>
            <button type="submit">Submit Expense</button>
        </div>
    </form>
    );
}


export default CreateExpenseForm;