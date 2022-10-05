import TopNav from "./../Components/TopNav";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <TopNav />
      <Outlet />
    </div>
  );
};

export default App;
