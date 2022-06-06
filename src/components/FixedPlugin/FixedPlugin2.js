import React, { Component } from "react";

function FixedPlugin2() {
  const [classes, setClasses] = React.useState("dropdown show");
  const handleClick = () => {
    if (classes === "dropdown") {
      setClasses("dropdown show");
    } else {
      setClasses("dropdown");
    }
  };

  return (
    <div className="fixed-plugin">
      <div className={classes}>
        <div onClick={handleClick}>
          <i className="fa fa-cog fa-2x" />
        </div>
        {/* <ul className="dropdown-menu show">
          <li className="header-title">SIDEBAR BACKGROUND</li>
          <li className="adjustments-line">
            <div className="badge-colors text-center">
              <span
                className={"badge filter badge-yellow active"
                }
                data-color="yellow"
                onClick={() => {
                  
                }}
              />
              <span
                className={"badge filter badge-blue active"
                }
                data-color="blue"
                onClick={() => {
                  
                }}
              />
              <span
                className={"badge filter badge-green active"
                }
                data-color="green"
                onClick={() => {
                  
                }}
              />
              <span
                className={"badge filter badge-orange active"
                }
                data-color="orange"
                onClick={() => {
                 
                }}
              />
              <span
                className={"badge filter badge-red active"
                }
                data-color="red"
                onClick={() => {
                  
                  
                }}
              />
            </div>
          </li>

          <li className="button-container">
            <a
              href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=nudr-fixed-plugin"
              target="_blank"
              className="btn btn-primary btn-block btn-round"
            >
              Buy pro
            </a>
            <a
              href="https://www.creative-tim.com/product/now-ui-dashboard-react?ref=nudr-fixed-plugin"
              target="_blank"
              className="btn btn-warning btn-block btn-round"
            >
              Download free
            </a>
            <a
              href="https://demos.creative-tim.com/now-ui-dashboard-react/#/documentation/tutorial?ref=nudr-fixed-plugin"
              className="btn btn-block btn-round btn-info"
            >
              Documentation
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default FixedPlugin2;
