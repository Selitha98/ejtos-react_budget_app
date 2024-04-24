import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";

import { AppProvider } from "./context/AppContext";
const App = () => {

  const [currency, setCurrency] = useState('');

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>

        <div className="row mt-3">
          <div className="col-sm">
            <Budget currency={currency}/>
          </div>
          <div className="col-sm">
            <Remaining currency={currency}/>
          </div>
          <div className="col-sm">
            <ExpenseTotal currency={currency}/>
          </div>
          <div className="col-sm">
            <select class="form-select" aria-label="Default select example" onChange={handleCurrencyChange}
        value={currency}>
              <option selected>Choose the Currency</option>
              <option value="$">$ Dollar</option>
              <option value="£">£ Pound</option>
              <option value="€">€ Euro</option>
              <option value="₹">₹ Ruppee</option>
            </select>
          </div>
        </div>
        <h3 className="mt-3">Allocation</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList currency={currency}/>
          </div>
        </div>
        <h3 className="mt-3">Change allocation</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AllocationForm  currency={currency}/>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
