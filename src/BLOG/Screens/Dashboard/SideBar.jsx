import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      style={{ width: "15%", height: "100%" }}
      className=" bg-slate-600 flex flex-col gap-y-3"
    >
      <NavLink
        to=""
        style={({ isActive }) =>
          isActive ? { backgroundColor: "rgba(0,0,255,0.2)" } : undefined
        }
      >
        <p className=" p-3 active:bg-blue-400 cursor-pointer">Dashboard</p>
      </NavLink>
      <NavLink
        to="post"
        style={({ isActive }) =>
          isActive ? { backgroundColor: "rgba(0,0,255,0.2)" } : undefined
        }
      >
        <p className="p-3 active:bg-blue-400 cursor-pointer">Posts</p>
      </NavLink>
    </div>
  );
};

export default SideBar;
