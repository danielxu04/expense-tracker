import React from "react";

import ExpenseChartBar from "./ExpenseChartBar";

import "./ExpenseChart.css";

function ExpenseChart(props){
    const dataPtVals = props.data.map(dataPt => dataPt.value);
    const maximum = Math.max(...dataPtVals);

    return <div className="expense-chart">
        {props.data.map((dataPt) => (
            <ExpenseChartBar 
                id={dataPt.label}
                val={dataPt.value} 
                maxVal={maximum}
                label={dataPt.label}
            />
        ))}
    </div>
}


export default ExpenseChart;

