import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
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
import { AsyncPaginate } from "react-select-async-paginate";

import { showModal } from "../../store/actions/modal";
import { getListOfModalType } from "../../store/actions/modelType";
import { getListOfModalTypeParam } from "../../store/actions/modelTypeParam";
import DynamicInput from "../../components/DynamicInput/DynamicInput";
import { addModelTypeInfo } from "../../store/actions/modelTypeInfo";

function CreateModalTypeInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mergerList, setMergerList] = useState([]);
  const [modelTypeParamList, setModelTypeParamList] = useState([]);
  const [columnsDynamic, setColumnsDynamic] = useState({});

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });

  const loadModalTypeOptions = async (search, loadedOptions, { page }) => {
    await sleep(1000);

    let option = [];
    await dispatch(
      await getListOfModalType(15, (page - 1) * 15, "desc", search, "")
    )
      .then((response) => {
        if (response?.payload?.data?.modelTypeList) {
          option = response?.payload?.data?.modelTypeList?.map((item) => ({
            value: item.id,
            label: `${item.code} - ${item.name}`,
          }));
        }
      })
      .catch((error) => {
        console.log(error);
        NotificationManager.error(error.message);
        return {};
      });
    return {
      options: option,
      hasMore: false,
      additional: {
        page: 1,
      },
    };
  };

  const loadTypeOfModalOptions = async (search, loadedOptions, { page }) => {
    await sleep(1000);
    const authToken = await localStorage.getItem("accessToken");
    const response = await fetch(
      `http://10.254.61.24:8095/api/categoryData/typeOfModel/autocomplete?max=15&offset=${
        (page - 1) * 15
      }&order=desc&query=${search}&sort=id`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken,
        },
      }
    );
    let options = [];
    const responseJSON = await response.json();
    if (responseJSON?.categoryDataList) {
      options = responseJSON?.categoryDataList?.map((item) => ({
        value: item.id,
        label: `${item.code} - ${item.name}`,
      }));
    }
    return {
      options: options,
      hasMore: false,
      additional: {
        page: page + 1,
      },
    };
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
    console.log(values);
    dispatch(await addModelTypeInfo(values))
      .then((response) => {
        console.log(response);
        if (response?.payload?.data?.success == true) {
          NotificationManager.success(response?.payload?.data?.msg);
          navigate("/modal-type-info", { replace: true });
        } else {
          NotificationManager.error(response?.payload?.data?.msg);
        }
      })
      .catch((error) => {
        console.error(error);
        NotificationManager.error(error.message);
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

  const handleMergerList = async () => {
    let newList = [];
    for (let index = 0; index < modelTypeParamList.length; index += 2) {
      let subArr = await [
        modelTypeParamList[index],
        modelTypeParamList[index + 1] ?? null,
      ];
      await newList.push(subArr);
    }
    setMergerList(newList);
  };

  const fetchModelTypeParamList = async () => {
    dispatch(await getListOfModalTypeParam())
      .then((response) => {
        setModelTypeParamList(response?.payload?.data?.modelTypeParamList);
        const map = new Map();
        response?.payload?.data?.modelTypeParamList?.map((d) => {
          map.set(`${d.code}`, "");
        });
        setColumnsDynamic(Object.fromEntries(map));
      })
      .catch((error) => {
        console.log(error);
        NotificationManager.error(error.message);
      });
  };

  useEffect(() => {
    fetchModelTypeParamList();
  }, []);

  useEffect(() => {
    if (modelTypeParamList.length > 0) handleMergerList();
  }, [modelTypeParamList]);

  const formik = useFormik({
    initialValues: {
      modelType: "",
      code: "",
      name: "",
      typeOfModal: "",
      description: "",
      sortOrder: 0,
      status: true,
      effectiveDate: null,
      expireDate: null,
      ...columnsDynamic,
    },
    initialErrors: false,
    validate: (values) => {
      //validateForm
      const errors = {};
      if (!values.code) {
        errors.code = "Required";
      } else if (!values.name) {
        errors.name = "Required";
      }
      return errors;
    },
    onSubmit: handleAdd,
  });

  return (
    <>
      <div className="panel-header panel-header-sm" />

      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <Card>
              <CardHeader>
                <h5 className="title">Thêm Modal type info</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>
                          Modal type <span style={{ color: "red" }}>*</span>
                        </label>
                        <AsyncPaginate
                          name="modalType"
                          style={{ fontSize: "0.8571em" }}
                          loadOptions={loadModalTypeOptions}
                          onChange={(selectedOption) =>
                            formik.setFieldValue(
                              "modelType",
                              selectedOption.value
                            )
                          }
                          additional={{ page: 1 }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>
                          Mã <span style={{ color: "red" }}>*</span>
                        </label>
                        <Input
                          placeholder="Nhập mã..."
                          type="text"
                          name="code"
                          onChange={formik.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>
                          Tên <span style={{ color: "red" }}>*</span>
                        </label>
                        <Input
                          placeholder="Nhập tên danh mục..."
                          type="text"
                          name="name"
                          onChange={formik.handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>
                          Type of modal <span style={{ color: "red" }}>*</span>
                        </label>
                        <AsyncPaginate
                          name="typeOfModal"
                          style={{ fontSize: "0.8571em" }}
                          loadOptions={loadTypeOfModalOptions}
                          onChange={(selectedOption) =>
                            formik.setFieldValue(
                              "typeOfModal",
                              selectedOption.value
                            )
                          }
                          additional={{ page: 1 }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Mô tả</label>
                        <Input
                          cols="80"
                          placeholder="Nhập mô tả..."
                          rows="4"
                          type="textarea"
                          name="description"
                          onChange={formik.handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>
                          Hiệu lực{" "}
                          <Input
                            type="checkbox"
                            style={{ marginLeft: "1rem" }}
                            name="status"
                            onChange={formik.handleChange}
                          />
                        </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Ngày bắt đầu hiệu lực</label>
                        <Input
                          placeholder="Nhập Ngày bắt đầu hiệu lực..."
                          type="date"
                          name="effectiveDate"
                          onChange={formik.handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Ngày kết thúc</label>
                        <Input
                          placeholder="Nhập Ngày kết thúc..."
                          type="date"
                          name="expireDate"
                          onChange={formik.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <DynamicInput
                    formik={formik}
                    handleChange={formik.handleChange}
                    mergerList={mergerList}
                  />
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
                            disabled={formik.isSubmitting}
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
                            disabled={
                              formik.isSubmitting && formik.isValidating
                            }
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
                            disabled={formik.isSubmitting}
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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CreateModalTypeInfo;
