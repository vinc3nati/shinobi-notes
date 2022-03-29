import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="notes-container">
        <Sidebar />
        <main className="main-notes">
          <Outlet />
        </main>
      </div>
    </>
  );
};
