import React from "react";

// reactstrap components
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "../components/PanelHeader/PanelHeader";

function Notifications() {
  const notificationAlert = React.useRef();
  
  console.log('Notifications');
  return (
    <>
      <PanelHeader
        content={
          <div className="header text-center">
            <h2 className="title">Notifications</h2>
            <p className="category">
              Please Checkout{" "}
              <a
                href="https://github.com/creativetimofficial/react-notification-alert"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Full Documentation
              </a>
              .
            </p>
          </div>
        }
      />
      <div className="content">
        <Row>
          <Col md={6} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notifications Style</CardTitle>
              </CardHeader>
              <CardBody>
                <Alert color="info">
                  <span>This is a plain notification</span>
                </Alert>
                <Alert color="info" isOpen={true} toggle={() => {}}>
                  <span>This is a notification with close button.</span>
                </Alert>
                <Alert
                  color="info"
                  className="alert-with-icon"
                  isOpen={true}
                  toggle={() => {}}
                >
                  <span
                    data-notify="icon"
                    className="now-ui-icons ui-1_bell-53"
                  />
                  <span data-notify="message">
                    This is a notification with close button and icon.
                  </span>
                </Alert>
                <Alert
                  color="info"
                  className="alert-with-icon"
                  isOpen={true}
                  toggle={() => {}}
                >
                  <span
                    data-notify="icon"
                    className="now-ui-icons ui-1_bell-53"
                  />
                  <span data-notify="message">
                    This is a notification with close button and icon and have
                    many lines. You can see that the icon and the close button
                    are always vertically aligned. This is a beautiful
                    notification. So you don't have to worry about the style.
                  </span>
                </Alert>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notification states</CardTitle>
              </CardHeader>
              <CardBody>
                <Alert color="primary" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Primary - </b> This is a regular notification made with
                    color="primary"
                  </span>
                </Alert>
                <Alert color="info" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Info - </b> This is a regular notification made with
                    color="info"
                  </span>
                </Alert>
                <Alert color="success" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Success - </b> This is a regular notification made with
                    color="success"
                  </span>
                </Alert>
                <Alert color="warning" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Warning - </b> This is a regular notification made with
                    color="warning"
                  </span>
                </Alert>
                <Alert color="danger" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Danger - </b> This is a regular notification made with
                    color="danger"
                  </span>
                </Alert>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default Notifications;
