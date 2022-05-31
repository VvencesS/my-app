import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { publicRoutes, privateRoutes } from "./routes";
import DefaultLayout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout;

            const Page = route.component;
            return (
              <Route key={index + "pub"} path={route.path} element={<Page />} />
            );
          })}
          {privateRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route key={index + "pri"} path={route.path} element={<Page />} />
            );
          })}
          {/* <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default App;
