import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  InputGroup,
  Input,
} from "reactstrap";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Modal from "../components/Modal/Modal";
import { debounce } from "lodash";
import CustomPaginationActionsTable from "../components/DataTable/CustomPaginationActionsTable";

import { getListOfCategories } from "../store/actions/categorie";

function Dashboard() {
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState("");
  const { categories } = useSelector((state) => state.category);
  const [search, setSearch] = useState("");

  const debouncedSearch = debounce(async (criteria) => {
    setSearch(criteria);
  }, 500);

  const handleSearch = async (e) => {
    debouncedSearch(e.target.value);
  };

  const fetchCategories = async () => {
    dispatch(await getListOfCategories())
      .then((respone) => {
        NotificationManager.success("Lấy thông tin Category thành công!");
        NotificationManager.info(
          "Category có: " + respone.payload.data.categoryTotal + " bản ghi!"
        );
      })
      .catch((error) => {
        NotificationManager.error("Có lỗi xảy ra khi lấy danh sách Category!");
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  console.log("Dashboard");
  return (
    <>
      <div className="content" style={{ marginTop: 100 }}>
        <Row>
          <Col xs={12} md={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Categories</CardTitle>
              </CardHeader>
              <CardBody>
                <CustomPaginationActionsTable
                  categories={categories}
                  fetchCategories={fetchCategories}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Card>
              <CardHeader>
                <h5 className="card-category">All Category List</h5>
                <CardTitle tag="h4">Categories</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="justify-content-end d-flex">
                  <form style={{ width: 300 }}>
                    <InputGroup className="no-border">
                      <Input
                        placeholder="Tìm kiếm..."
                        onChange={handleSearch}
                      />
                    </InputGroup>
                  </form>
                </div>

                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center">Id</th>
                      <th className="text-center">Code</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Description</th>
                      <th className="text-center">Deleted</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories
                      .filter(
                        (row) =>
                          !search.length ||
                          row.code
                            .toString()
                            .toLowerCase()
                            .includes(search.toString().toLowerCase()) ||
                          row.name
                            .toString()
                            .toLowerCase()
                            .includes(search.toString().toLowerCase())
                      )
                      .map((category, index) => (
                        <tr key={index + 1}>
                          <td>{index + 1}</td>
                          <td>{category?.code ?? ""}</td>
                          <td>{category?.name ?? ""}</td>
                          <td>{category?.description ?? ""}</td>
                          <td className="text-center">
                            {category?.deleted === false ? (
                              <i
                                className="fa fa-ban"
                                style={{ color: "red" }}
                              ></i>
                            ) : (
                              <i
                                className="fa fa-check"
                                style={{ color: "green" }}
                              ></i>
                            )}
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-toggle="modal"
                              data-target="#exampleModal"
                              onClick={() => {
                                setCategoryId(category?.id ?? "");
                              }}
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal categoryId={categoryId} fetchCategories={fetchCategories} />
        <NotificationContainer />
      </div>
    </>
  );
}

export default Dashboard;
