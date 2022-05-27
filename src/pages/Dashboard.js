import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LoginService from "../services/login.service";
import { logout } from "../actions/login";

import "../css/Login.css";

export default function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { userInfo } = useSelector((state) => state.loginReducers); 

  const handleLogout = (e) => {
    e.preventDefault();
    LoginService.logout();
    dispatch(logout());
    history.push("/login");
  };

  return (
    <div className="login-wrapper">
      <h1>Dashboard</h1>
      <h2>Welcome {userInfo.username ?? ""}</h2>
      <div className="form-group">
        <button
          className="btn btn-primary btn-block"
          type="submit"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
