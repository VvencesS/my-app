import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../thunks/login";
import { getUserInfo } from "../thunks/user";

import "../css/Login.css";

export default function Dashboard() {
  const dispatch = useDispatch();
  
  const { isLoading, isLoggedIn, error, userInfo } = useSelector((state) => state.login);
  const { publicInfo, isLoading1, error1 } = useSelector((state) => state.user);
  
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  // if (!isLoggedIn) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div className="login-wrapper">
      <h1>Dashboard</h1>
      <h2>Welcome {userInfo.username ?? ""}</h2>

      <div className="col-sm-4">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>id: </th>
              <td>{publicInfo && publicInfo.id}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>username: </th>
              <td>{publicInfo && publicInfo.username}</td>
            </tr>
            <tr>
              <th>fullname: </th>
              <td>{publicInfo && publicInfo.fullname}</td>
            </tr>
            <tr>
              <th>email: </th>
              <td>{publicInfo && publicInfo.email}</td>
            </tr>
            <tr>
              <th>chucVu: </th>
              <td>{publicInfo && publicInfo.chucVu}</td>
            </tr>
            <tr>
              <th>branch: </th>
              <td>{publicInfo && publicInfo.branch}</td>
            </tr>
            <tr>
              <th>roles: </th>
              <td>{publicInfo && JSON.stringify(publicInfo.roles)}</td>
            </tr>
          </tbody>
        </table>
      </div>

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
        {isLoading1 && <h3>Loading...</h3>}
        {error1 && <h3>{error1.message}</h3>}
      </div>
    </div>
  );
}
