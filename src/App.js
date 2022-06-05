import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { publicRoutes, privateRoutes } from "./routes";
import DefaultLayout from "./components/Layout";
import Login from "./pages/Login";

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.login);
  return (
    <BrowserRouter>
      {isLoggedIn
        ? (
          <DefaultLayout>
            <Routes>
              {privateRoutes.map((route, index) => {
                const Page = route.component;
                return (
                  <Route
                    exact
                    key={index + "pri"}
                    path={route.path}
                    element={<Page />}
                  />
                );
              })}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </DefaultLayout>
        )
        : (
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route
                  exact
                  key={index + "pub"} path={route.path} element={<Page />} />
              );
            })}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
    </BrowserRouter >
  );
};

export default App;
