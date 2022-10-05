import React, { useState } from "react";

const Deposit = ({ amount, setAmount }) => {
  const [deposit, setDeposit] = useState(0);
  function handleDeposit() {
    if (deposit < 0) {
      alert("You cant deposit negative amount");
      return;
    }
    // setAmount((c) => c + amount);
    setAmount(parseInt(amount) + parseInt(deposit));
    alert("Deposit Succefull");
  }
  return (
    <h2>
      <h2>Deposit</h2>
      <input
        onChange={(e) => setDeposit(e.target.value)}
        value={deposit}
        type="Number"
      />
      <p>
        <button onClick={handleDeposit}>Submit</button>
      </p>
    </h2>
  );
};

export default Deposit;
