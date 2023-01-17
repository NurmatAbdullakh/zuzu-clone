import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
