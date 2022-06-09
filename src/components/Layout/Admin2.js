import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

import Modal from "../Modal/Modal";
import Sidebar2 from "../Sidebar/Sidebar2";
import DemoNavbar2 from "../Navbars/DemoNavbar2";
import Footer2 from "../Footer/Footer2";
import FixedPlugin2 from "../FixedPlugin/FixedPlugin2";

import { userInfoRetrieve } from "../../store/actions/user/index";

function Admin2({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = React.useState("blue");

  const fetchUserInfo = async () => {
    dispatch(await userInfoRetrieve());
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);


  return (
    <div className="wrapper">
      <Sidebar2 backgroundColor={backgroundColor} location={location}/>
      <div className="main-panel">
        <DemoNavbar2 />
        {children}
        <Footer2 fluid />
      </div>
      {/* <FixedPlugin2 bgColor={backgroundColor} /> */}
      <Modal />
      <NotificationContainer />
    </div>
  );
}

export default Admin2;
