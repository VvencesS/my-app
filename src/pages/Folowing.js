import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../thunks/login";

import "../css/Login.css";

export default function Following() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.login);
  const { isLoading, isLoggedIn, error } = useSelector((state) => state.login);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="login-wrapper">
      <h1>Following</h1>
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
      <div className="form-group">
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>{error.message}</h3>}
      </div>
    </div>
  );
}
