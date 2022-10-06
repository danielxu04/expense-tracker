import 'bootstrap/dist/css/bootstrap.min.css';

import expenses from "./components/Expense/expenses";
import DisplayExpense from "./components/Expense/DisplayExpense";
import ExpenseForm from "./components/NewExpense/ExpenseForm";

function App() {

  const addExpenseDataPasser = expense => {
    console.log("In App");
    console.log(expense);
  }

  return ( 
  <>

    <ExpenseForm addExpense={addExpenseDataPasser} />

    <DisplayExpense expenses={expenses}/>
  </>
  );
}

export default App;
