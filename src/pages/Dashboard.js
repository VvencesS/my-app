import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import "../css/Login.css";
import { logout } from '../store/actions/authentication';



export default function Dashboard() {
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.user);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };


  return (
    <div className="login-wrapper">
      <h1>Dashboard</h1>
      <h2>Welcome {user?.fullname ?? ''}</h2>
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
