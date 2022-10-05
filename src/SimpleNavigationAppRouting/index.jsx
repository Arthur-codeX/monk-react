import React, { useState } from "react";
import TopNav from "./Components/TopNav";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";

const SimpleNavigationApp = () => {
  return (
    <BrowserRouter>
      {/* <div style={{ height: "100vh", width: "100vw" }}>
        <TopNav />
      </div> */}
      {/* <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes> */}
      <Routes>
        <Route path="myapp" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SimpleNavigationApp;
