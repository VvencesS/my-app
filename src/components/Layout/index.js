import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container-md">
        <div className="row">
          <div className="col-sm-4">
            <Sidebar />
          </div>
          <div className="col-sm-8">
            <div className="content">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
