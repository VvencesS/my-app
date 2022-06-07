import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import { login } from "../store/actions/authentication";

import "../css/Login.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-notifications/lib/notifications.css";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn } = useSelector((state) => state.login);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      NotificationManager.warning("Vui lòng nhập đủ tên đăng nhập và mật khẩu!");
      return;
    }

    const data = {
      username: username,
      password: password,
    };

    dispatch(await login(data))
      .then((respone) => {
        NotificationManager.success("Đăng nhập thành công!");
      })
      .catch((error) => {
        NotificationManager.error("Tên tài khoản hoặc mật khẩu không đúng!");
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img
                src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
                alt="IMG"
              />
            </div>
            <form
              className="login100-form validate-form"
              onSubmit={handleLogin}
            >
              <span className="login100-form-title"></span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onInput={(e) => setUsername(e.target.value)}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-user" aria-hidden="true" />
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onInput={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Login</button>
              </div>
              <div className="text-center p-t-12">
                <span className="txt1">Forgot</span>
                <a className="txt2" href="#">
                  Username / Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default Login;
