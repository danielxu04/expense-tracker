import React from "react";

import "./ExpenseChartBar.css";

function ExpenseChartBar(props){
    return <div className="chart-bar">
        <div className="inner-chart">
            <div className="fill-bar"></div>
        </div>
        <div className="label-bar">{props.label}</div>
    </div>
}


export default ExpenseChartBar;