import 'bootstrap/dist/css/bootstrap.min.css';

import expenses from "./components/Expense/expenses";
import DisplayExpense from "./components/DisplayExpense";

function App() {

  return ( 
  <>
    <DisplayExpense expenses={expenses}/>
  </>
  );
}

export default App;
