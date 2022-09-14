import 'bootstrap/dist/css/bootstrap.min.css';

import expenses from "./expenses";
import DisplayExpense from "./components/DisplayExpense";

function App() {

  return ( 
  <>
    <DisplayExpense expenses={expenses}/>
  </>
  );
}

export default App;
