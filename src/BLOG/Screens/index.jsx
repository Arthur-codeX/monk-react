import { Outlet } from "react-router-dom";

import TopNav from "./TopNav";

const Screens = () => {
  return (
    <div>
      <TopNav />
      <Outlet />
    </div>
  );
};

export default Screens;
