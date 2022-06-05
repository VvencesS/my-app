import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { publicRoutes, privateRoutes } from "./routes";
import DefaultLayout from "./components/Layout";

const App = () => {

  const { accessToken } = useSelector((state) => state.login);

  return (
    <BrowserRouter>
      {accessToken?.length > 0
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
