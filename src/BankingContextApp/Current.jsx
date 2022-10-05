import React, { useContext } from "react";

//import BankingContext from "./context";

import useMyContext from "./useMyContext";

const Current = () => {
  //const { amount } = useContext(BankingContext);
  const { amount, taxable } = useMyContext();
  return (
    <div>
      <h2>
        Acc Bal <b>{amount}</b>
      </h2>
      <h2>
        Taxable <b>{taxable}</b>
      </h2>
    </div>
  );
};

export default Current;
