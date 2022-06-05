import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { userInfoRetrieve } from '../../store/actions/user';


function DefaultLayout({ children }) {

  const dispatch = useDispatch();

  const fetchUserInfo = async () => {
    dispatch(await userInfoRetrieve())
  };

  useEffect(() => {
    fetchUserInfo()
  }, [])

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <Sidebar />
          </div>
          <div className="col-sm-10">
            <div className="content">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
