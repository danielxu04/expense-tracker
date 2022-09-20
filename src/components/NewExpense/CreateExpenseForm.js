import React from "react";

import "./CreateExpenseForm.css";

function CreateExpenseForm(){
    return (<form>
        <div className="form-items">
            <div className="form-item">
                <label>Expense</label>
                <input type="text"></input>
            </div>
            <div className="form-item">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2024-12-31"></input>
            </div>
            <div className="form-item">
                <label>Price</label>
                <input type="number" min="0.01" step="0.01"></input>
            </div>
        </div>

        <div>
            <button type="submit">Submit Expense</button>
        </div>
    </form>
    );
}


export default CreateExpenseForm;