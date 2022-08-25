import { FormGroup, Row, Col } from "reactstrap";

function LayoutRow({ children1, children2 }) {
  return (
    <Row>
      <Col className="pr-1" md="6">
        {children1}
      </Col>
      <Col className="pl-1" md="6">
        {children2}
      </Col>
    </Row>
  );
}

export default LayoutRow;
