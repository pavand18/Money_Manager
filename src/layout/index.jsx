import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="main">
        <Navbar />
        <div className="main_content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
