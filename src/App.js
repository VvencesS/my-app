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
    {/* {isLoggedIn} */}
      <DefaultLayout>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route key={index + "pub"} path={route.path} element={<Page />} />
            );
          })}
          {isLoggedIn &&
            privateRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route
                  key={index + "pri"}
                  path={route.path}
                  element={<Page />}
                />
              );
            })}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default App;
