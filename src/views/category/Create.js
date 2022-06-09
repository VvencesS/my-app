import React, { useState } from "react";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import Select from "react-select";

import PanelHeader from "../../components/PanelHeader/PanelHeader";

function CreateCategory() {
  const options = [
    { value: true, label: "Active" },
    { value: false, label: "Inactive" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      <PanelHeader size="sm" />

      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <Card>
              <CardHeader>
                <h5 className="title">Thêm Category</h5>
              </CardHeader>
              <CardBody>
                <Formik
                  initialValues={{
                    code: "",
                    name: "",
                    description: "",
                    status: true,
                  }}
                  validate={(values) => {}}
                  onSubmit={async (values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                      }}
                    >
                      <Row>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Mã</label>
                            <Input
                              placeholder="Nhập mã danh mục..."
                              type="text"
                              name="code"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                          <FormGroup>
                            <label>Tên</label>
                            <Input
                              placeholder="Nhập tên danh mục..."
                              type="text"
                              name="name"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="10">
                          <FormGroup>
                            <label>Mô tả</label>
                            <Input
                              cols="80"
                              placeholder="Nhập mô tả..."
                              rows="4"
                              type="textarea"
                              name="description"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="2">
                          <FormGroup>
                            <label>Trạng thái</label>
                            <select
                              name="status"
                              className="custom-select"
                              style={{ fontSize: "0.8571em" }}
                            >
                              <option value="true">Active</option>
                              <option value="false">Inactive</option>
                            </select>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <div className="justify-content-center d-flex">
                            <button
                              type="submit"
                              className="btn btn-info"
                              data-dismiss="modal"
                              disabled={isSubmitting}
                            >
                              Lưu
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                              disabled={isSubmitting}
                            >
                              Hủy
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CreateCategory;
