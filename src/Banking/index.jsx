import React, { useState } from "react";

import Current from "./Current";
import Deposit from "./Deposit";
import WithDraw from "./WithDraw";

const BankingApp = () => {
  const [amount, setAmount] = useState(1000);

  return (
    <div style={{ padding: "40px" }}>
      <p>
        <Current amount={amount} />
      </p>
      <p>
        <Deposit amount={amount} setAmount={setAmount} />
      </p>
      <p>
        <WithDraw amount={amount} setAmount={setAmount} />
      </p>
    </div>
  );
};

export default BankingApp;
