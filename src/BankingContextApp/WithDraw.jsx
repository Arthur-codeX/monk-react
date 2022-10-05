import React, { useState, useContext } from "react";

import BankingContext from "./context";

const WithDraw = () => {
  const [w, setW] = useState(0);
  const contextValues = useContext(BankingContext);
  function handleWithdraw() {
    if (w > contextValues.amount) {
      alert("You cant withdraw more than what is in your account");
      return;
    }
    // setAmount((c) => c + amount);
    contextValues.setAmount(parseInt(contextValues.amount) - parseInt(w));
    alert("Withdraw Succefull");
  }
  return (
    <div>
      <h2>WithDraw</h2>
      <input onChange={(e) => setW(e.target.value)} value={w} type="Number" />
      <p>
        <button onClick={handleWithdraw}>Submit</button>
      </p>
    </div>
  );
};

export default WithDraw;
