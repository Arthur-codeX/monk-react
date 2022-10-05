import React, { useState, useContext } from "react";

import BankingContext from "./context";

const Deposit = () => {
  const [deposit, setDeposit] = useState(0);
  const contextValues = useContext(BankingContext);

  function handleDeposit() {
    if (deposit < 0) {
      alert("You cant deposit negative amount");
      return;
    }
    // setAmount((c) => c + amount);
    contextValues.setAmount(parseInt(contextValues.amount) + parseInt(deposit));
    alert("Deposit Succefull");
  }
  return (
    <div>
      <h2>Deposit</h2>
      <input
        onChange={(e) => setDeposit(e.target.value)}
        value={deposit}
        type="Number"
      />
      <p>
        <button onClick={handleDeposit}>Submit</button>
      </p>
    </div>
  );
};

export default Deposit;
