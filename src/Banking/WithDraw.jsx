import React, { useState } from "react";

const WithDraw = ({ amount, setAmount }) => {
  const [w, setW] = useState(0);
  function handleWithdraw() {
    if (w > amount) {
      alert("You cant withdraw more than what is in your account");
      return;
    }
    // setAmount((c) => c + amount);
    setAmount(parseInt(amount) - parseInt(w));
    alert("Withdraw Succefull");
  }
  return (
    <h2>
      <h2>WithDraw</h2>
      <input onChange={(e) => setW(e.target.value)} value={w} type="Number" />
      <p>
        <button onClick={handleWithdraw}>Submit</button>
      </p>
    </h2>
  );
};

export default WithDraw;
