import 'bootstrap/dist/css/bootstrap.min.css';

import Expense from "./components/Expense";
import expenses from "./expenses";

function App() {

  return ( <>

  <Expense 
    name={expenses[0].name} 
    date={expenses[0].date} 
    price={expenses[0].cost}
    />
  <Expense 
    name={expenses[1].name} 
    date={expenses[1].date} 
    price={expenses[1].cost}
    />
  <Expense 
    name={expenses[2].name} 
    date={expenses[2].date} 
    price={expenses[2].cost}
    />
  <Expense 
    name={expenses[3].name}
    date={expenses[3].date} 
    price={expenses[3].cost}
    />

  
  </>
  );
}

export default App;
