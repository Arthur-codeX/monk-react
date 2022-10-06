import { BrowserRouter, Routes, Route } from "react-router-dom";

import Screens from "./Screens";

import Home from "./Screens/Home";

import Login from "./Screens/Login";

import SignUp from "./Screens/SignUp";

import Dashboard from "./Screens/Dashboard";

import Dash from "./Screens/Dashboard/Pages/Dash";

import Posts from "./Screens/Dashboard/Pages/Posts";

import SinglePost from "./Screens/Dashboard/Pages/SinglePost";

const BLOG = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Screens />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="" element={<Dash />} />
            <Route path="post" element={<Posts />} />
            <Route path="post/:id" element={<SinglePost />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BLOG;
