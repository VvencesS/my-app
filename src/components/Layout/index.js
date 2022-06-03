import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
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
