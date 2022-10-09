import React, {useState} from "react";

import "./CreateExpenseForm.css";

function CreateExpenseForm(props){

/*
    STORE USERINPUT - using OBJECT

    let [enterItem, setItem] = useState({
        expense: '',
        price: '',
        date: new Date('')
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
        event.preventDefault(); 
        console.log(enterItem);
    }
*/
    const [titleItem, setTitleItem] = useState('');
    const [priceItem, setPriceItem] = useState('');
    const [dateItem, setDateItem] = useState('');

    const titleChanger = event => {
        setTitleItem(event.target.value);
    };
    const priceChanger = event => {
        setPriceItem(event.target.value);
    };
    const dateChanger = event => {
        setDateItem(event.target.value);
    }


    const submitter = event => {
        event.preventDefault();

        const expenseItems = {
            name: titleItem,
            price: priceItem,
            date: new Date(dateItem)
        };

        props.newExpenseData(expenseItems);

        /* Reset Items */
        setTitleItem('');
        setPriceItem('');
        setDateItem('');
    }

    return (<form onSubmit={submitter}>
        <div className="form-items">
            <div className="form-item">
                <label>Expense</label>
                <input type="text" value={titleItem} onChange={titleChanger}></input>
            </div>
            <div className="form-item">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2024-12-31" value={dateItem} onChange={dateChanger}></input>
            </div>
            <div className="form-item">
                <label>Price</label>
                <input type="number" min="0.01" step="0.01" value={priceItem} onChange={priceChanger}></input>
            </div>
        </div>

        <div>
            <button type="submit">Submit Expense</button>
        </div>
    </form>
    );
}


export default CreateExpenseForm;