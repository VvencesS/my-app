import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import { NotificationManager } from "react-notifications";

import PanelHeader from "../../components/PanelHeader/PanelHeader";

import { addCategory } from "../../store/actions/categorie";
import { showModal } from "../../store/actions/modal";

function CreateCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    code: "",
    name: "",
    description: "",
    status: true,
  };

  const validateForm = async (values) => {
    const errors = {};
    if (!values.code || !values.name) {
      errors.code = "Required";
      errors.name = "Required";
      // NotificationManager.warning(
      //   "Trường mã và tên danh mục không được để trống!"
      // );
    }
    return errors;
  };

  const clickShowModal = async (title, content, actionType) => {
    dispatch(
      await showModal(title, content, {
        acceptFunc: () => {
          navigate("/dashboard", { replace: true });
        },
        cancelFunc: () => {},
      })
    );
  };

  const handleAdd = async (values, { setSubmitting }) => {
    dispatch(
      await addCategory(
        values.code,
        values.name,
        values.description,
        values.status
      )
    )
      .then((respone) => {
        NotificationManager.success(`Thêm bản ghi thành công!`);
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        NotificationManager.error("Có lỗi xảy ra!");
      });
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    clickShowModal(
      "Xác nhận",
      "Bạn chắc chắn muốn hủy thao tác đang thực hiện?",
      null
    );
  };

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
                  initialValues={initialValues}
                  validate={validateForm}
                  onSubmit={handleAdd}
                >
                  {({
                    values,
                    errors,
                    touched,
                    isValidating,
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
                            <label>
                              Mã <span style={{ color: "red" }}>*</span>
                            </label>
                            <Input
                              placeholder="Nhập mã danh mục..."
                              type="text"
                              name="code"
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                          <FormGroup>
                            <label>
                              Tên <span style={{ color: "red" }}>*</span>
                            </label>
                            <Input
                              placeholder="Nhập tên danh mục..."
                              type="text"
                              name="name"
                              onChange={handleChange}
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
                              onChange={handleChange}
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
                              onChange={handleChange}
                            >
                              <option value="true">Active</option>
                              <option value="false">Inactive</option>
                            </select>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <div className="justify-content-between d-flex">
                            <div>
                              <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                disabled={isSubmitting}
                                onClick={handleCancel}
                              >
                                <i className="now-ui-icons arrows-1_minimal-left"></i>
                                &nbsp; Quay lại
                              </button>
                            </div>
                            <div>
                              <button
                                type="submit"
                                className="btn btn-info"
                                data-dismiss="modal"
                                disabled={isSubmitting && isValidating}
                              >
                                <i className="now-ui-icons ui-1_check"></i>
                                &nbsp; Lưu
                              </button>
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                disabled={isSubmitting}
                                onClick={handleCancel}
                              >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                &nbsp; Hủy
                              </button>
                            </div>
                            <div></div>
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
