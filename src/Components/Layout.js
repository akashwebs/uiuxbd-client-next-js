import React from "react";
import Footers from "../Shared/Footers";
import Navbar from "../Shared/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footers></Footers>
    </>
  );
}

export default Layout;
