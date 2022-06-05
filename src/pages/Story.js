import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import "../css/Login.css";

export default function Story() {
  const dispatch = useDispatch();



  return (
    <div className="login-wrapper">
      <h1>Story</h1>
    </div>
  );
}
