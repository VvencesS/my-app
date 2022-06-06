import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { publicRoutes } from "./routes";
import Admin2 from "./components/Layout/Admin2";
import dashRoutes from "./routes/routes";

const App = () => {
  console.log("App");
  
  const { accessToken } = useSelector((state) => state.login);
  return (
    <BrowserRouter>
      {accessToken?.length > 0 ? (
        <Routes>
          {dashRoutes.map((route, key) => {
            const Page = route.component;
            return (
              <Route
                path={route.path}
                element={
                  <Admin2>
                    <Page />
                  </Admin2>
                }
                key={key}
              />
            );
          })}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index + "pub"}
                path={route.path}
                element={
                  <Fragment>
                    <Page />
                  </Fragment>
                }
              />
            );
          })}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
