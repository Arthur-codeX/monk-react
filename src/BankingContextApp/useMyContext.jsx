import React, { useContext } from "react";

import BankingContext from "./context";

const useMyContext = () => {
  const { amount } = useContext(BankingContext);

  const taxable = amount * 16 * 0.01;

  return { amount: amount, taxable: taxable };
};

export default useMyContext;
