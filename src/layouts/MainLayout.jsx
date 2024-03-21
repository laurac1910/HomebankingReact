import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

import { useDispatch } from "react-redux";
import authActions from "../redux/actions/authActions";

const MainLayout = (props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
    window.location.href = "/";
  };

  return (
    <div className="main-layout">
      <SideBar onLogout={handleLogout} />
      <NavBar onLogout={handleLogout} />
      {props.children}
    </div>
  );
};

export default MainLayout;
