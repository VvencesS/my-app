import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";

import logo from "../../logo-white.svg";
import dashRoutes from "../../routes/routes";

function Sidebar({location}) {

  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  return (
    <div className="sidebar" data-color={"blue"}>
      <div className="logo">
        <a href="/" className="simple-text logo-mini">
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a>
        <a href="/" className="simple-text logo-normal">
          Creative Tim
        </a>
      </div>
      <div className="sidebar-wrapper">
        <Nav>
          {dashRoutes.map((route, key) => {
            if (route.redirect) return null;
            return (
              <li className={activeRoute(route.path)} key={key}>
                <NavLink to={route.path} className="nav-link">
                  <i className={"now-ui-icons " + route.icon} />
                  <p>{route.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
