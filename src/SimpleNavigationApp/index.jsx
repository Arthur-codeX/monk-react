import React, { useState } from "react";
import TopNav from "./Components/TopNav";
import Outlet from "./Outlet";

const SimpleNavigationApp = () => {
  const [page, setPage] = useState("Home");
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <TopNav page={page} setPage={setPage} />
      <Outlet page={page} />
    </div>
  );
};

export default SimpleNavigationApp;
