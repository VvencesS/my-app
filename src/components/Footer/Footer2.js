import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer2() {
  return (
    <footer className={"footer" }>
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.creative-tim.com?ref=nudr-footer"
                target="_blank"
              >
                Creative Tim
              </a>
            </li>
            <li>
              <a
                href="https://presentation.creative-tim.com?ref=nudr-footer"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://blog.creative-tim.com?ref=nudr-footer"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright">
          &copy; {1900 + new Date().getYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Invision
          </a>
          . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nudr-footer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Tim
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

Footer2.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer2;
