import React from "react";

import "./ExpenseChartBar.css";

function ExpenseChartBar(props){
    let barHeight = '0%';

    if(props.maxVal > 0){
        console.log(props.maxVal);
        barHeight = (Math.round((props.val / props.maxVal) * 100)) + '%';
        console.log(barHeight);
    }
    return (
    <div className="chart-bar">
        <div className="inner-chart">
            <div
                className="fill-bar" 
                style={{height: barHeight}}
            ></div>
        </div>
        <div className="label-bar">{props.label}</div>
    </div>
    );
}


export default ExpenseChartBar;