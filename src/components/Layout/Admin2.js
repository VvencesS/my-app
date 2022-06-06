import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Sidebar2 from "../Sidebar/Sidebar2";
import DemoNavbar2 from "../Navbars/DemoNavbar2";
import Footer2 from "../Footer/Footer2";
import FixedPlugin2 from "../FixedPlugin/FixedPlugin2";

import { userInfoRetrieve } from "../../store/actions/user/index";

function Admin2({ children }) {
  const dispatch = useDispatch();

  const fetchUserInfo = async () => {
    dispatch(await userInfoRetrieve());
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const [backgroundColor, setBackgroundColor] = React.useState("blue");

  return (
    <div className="wrapper">
      <Sidebar2 backgroundColor={backgroundColor} />
      <div className="main-panel">
        <DemoNavbar2 />
        {children}
        <Footer2 fluid />
      </div>
      <FixedPlugin2 bgColor={backgroundColor} />
    </div>
  );
}

export default Admin2;
