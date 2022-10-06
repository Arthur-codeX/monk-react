import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="flex flex-row h-screen w-screen">
      <SideBar />
      <div className=" flex-1 text-white h-full">
        <Outlet />
      </div>
    </div>
  );
  // return <div>sfdfsdno Dashboard</div>;
};

export default Dashboard;
