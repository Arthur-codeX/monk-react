import React from "react";
import ReactDOM from "react-dom/client";

import SimpleNavigationApp from "./SimpleNavigationApp";

import SimpleNavigationAppRouting from "./SimpleNavigationAppRouting";

import FormsApp from "./FormsApp";

import BankingApp from "./Banking";

import BankingContextApp from "./BankingContextApp";

import Current from "./BankingContextApp/Current";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <SimpleNavigationApp /> */}
    <SimpleNavigationAppRouting />
    {/* <FormsApp /> */}
    {/* <BankingApp /> */}
    {/* <BankingContextApp /> */}
  </React.StrictMode>
);
