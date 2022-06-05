import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../store/actions/authentication';

import "../css/Login.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, isLoggedIn, error } = useSelector((state) => state.login);
  // const { isLoading, isLoggedIn, error } = useSelector((state) => state.login);

  const dispatch = useDispatch();



  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    dispatch(await login(data));

  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="login-wrapper">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          <p>Username</p>
          <input
            type="text"
            name="username"
            onInput={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            onInput={(e) => setPassword(e.target.value)}
          />
        </label>

        <div className="form-group">
          <button className="btn btn-primary btn-block" type="submit">
            <span>Login</span>
          </button>
        </div>
      </form>
      <div className="form-group">
        {isLoading && <h3>Loading...</h3>}
        {error && <h3 style={{ color: 'red' }}>{error.message}</h3>}
      </div>
    </div>
  );
};

export default Login;
