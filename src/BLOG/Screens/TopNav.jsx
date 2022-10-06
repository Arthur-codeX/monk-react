import React, { useEffect } from "react";
import { useLocation, useNavigate, Link, NavLink } from "react-router-dom";

const TopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  useEffect(() => {
    let id = location.pathname.split("/");
    console.log(id[id.length - 1]);
  }, [location]);

  return (
    <div className="flex gap-x-6">
      <div
        onClick={() => navigate("")}
        className={`cursor-pointer ${
          location.pathname === "/" ? "bg-green-400" : ""
        } `}
      >
        Home
      </div>
      <Link to={"login"}>
        <div
          className={`cursor-pointer ${
            location.pathname === "/login" ? "bg-green-400" : ""
          } `}
        >
          Login
        </div>
      </Link>
      <NavLink
        to={"sign-up"}
        style={({ isActive }) =>
          isActive ? { backgroundColor: "green" } : undefined
        }
      >
        <div className={`cursor-pointer`}>SignUp</div>
      </NavLink>
      <div
        onClick={() => navigate("dashboard")}
        className={`cursor-pointer ${
          location.pathname.includes("/dashboard") ? "bg-green-400" : ""
        } `}
      >
        Dashboard
      </div>
    </div>
  );
};

export default TopNav;
