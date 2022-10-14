import React from "react";

import ExpenseChartBar from "./ExpenseChartBar";

import "./ExpenseChart.css";

function ExpenseChart(props){
    return <div className="expense-chart">
        {props.data.map((dataPt) => (
            <ExpenseChartBar 
                id={dataPt.label}
                val={dataPt.value} 
                maxVal={null}
                label={dataPt.label}
            />
        ))}
    </div>
}


export default ExpenseChart;

