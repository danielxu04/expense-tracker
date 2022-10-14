import React from "react";

import "./ExpenseChartBar.css";

function ExpenseChartBar(props){
    let barHeight = '0%';

    if(props.maxVal > 0){
        barHeight = Math.round((props.value / props.maxVal) * 100) + "%";
    }
    return <div className="chart-bar">
        <div className="inner-chart">
            <div className="fill-bar" style={{height: barHeight}}></div>
        </div>
        <div className="label-bar">{props.label}</div>
    </div>
}


export default ExpenseChartBar;