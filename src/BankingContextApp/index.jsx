import React, { useState } from "react";

import BankingContext from "./context";

import Current from "./Current";
import Deposit from "./Deposit";
import WithDraw from "./WithDraw";

const BankingApp = () => {
  const [amount, setAmount] = useState(1000);

  return (
    <BankingContext.Provider value={{ amount: amount, setAmount: setAmount }}>
      <div style={{ padding: "40px" }}>
        <p>
          <Current />
        </p>
        <p>
          <Deposit />
        </p>
        <p>
          <WithDraw />
        </p>
      </div>
    </BankingContext.Provider>
  );
};

export default BankingApp;
