import React from "react";
import NavBar from "../navbar";
import Footer from "../footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
