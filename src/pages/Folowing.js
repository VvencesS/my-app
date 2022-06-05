import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../css/Login.css";

export default function Following() {
  const dispatch = useDispatch();

  const { isLoading, isLoggedIn, error } = useSelector((state) => state.login);


  return (
    <div className="">
      <h1>Following</h1>
    </div>
  );
}
