import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== "/" && <Header />}
      <Outlet />
    </div>
  );
};

export default Layout;
