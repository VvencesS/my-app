import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../store/actions/login";
import LoginService from "../services/login.service";

import "../css/Login.css";
import "../css/bootstrap.min.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn } = useSelector((state) => state.login);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    const response = await LoginService.login(data) 
    // .then((response) => {
    //   return response
    // })
    // .catch((error)=>{

    // });

    await dispatch(login(response ?? ""));
    await history.push("/dashboard");
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
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
    </div>
  );
};

export default Login;
