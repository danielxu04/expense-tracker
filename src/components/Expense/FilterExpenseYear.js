import React from "react";

import "./FilterExpenseYear.css";

function FilterExpenseYear(){

    const dateChangeManager = (event) => {
      console.log(event.target.value);
    };

    return (
        <div className="dropdown-container">
        <div className="dropdown-selectors">
          <label>Filter by year</label>
          <select onChange={dateChangeManager}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
    );
};


export default FilterExpenseYear;