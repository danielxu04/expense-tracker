import 'bootstrap/dist/css/bootstrap.min.css';

import expenses from "./components/Expense/expenses";
import DisplayExpense from "./components/Expense/DisplayExpense";
import ExpenseForm from "./components/NewExpense/ExpenseForm";

function App() {

  return ( 
  <>

    <ExpenseForm />

    <DisplayExpense expenses={expenses}/>
  </>
  );
}

export default App;
