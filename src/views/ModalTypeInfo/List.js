import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import CustomPaginationActionsTable from "../../components/DataTable/CustomPaginationActionsTable";

import * as constants from "../../constants/constants";
import {
  setPage,
  setRowsPerPage,
  setSearchVal,
} from "../../store/actions/table";
import { removeItemId, setItemId, showModal } from "../../store/actions/modal";
import {
  deleteModelTypeInfo,
  getListOfModelTypeInfo,
} from "../../store/actions/modelTypeInfo";

function ModelTypeInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { page, rowsPerPage, searchVal } = useSelector((state) => state.table);
  const [modelTypeInfoList, setModelTypeInfoList] = useState([]);
  const [modelTypeInfoTotal, setModelTypeInfoTotal] = useState(0);
  const columns = [
    { id: "stt", label: "STT", minWidth: 20, align: "center" },
    { id: "code", label: "Code", minWidth: 100, align: "center" },
    { id: "name", label: "Name", minWidth: 100, align: "center" },
    { id: "description", label: "Description", minWidth: 100, align: "center" },
    { id: "status", label: "Status", minWidth: 100, align: "center" },
    { id: "actions", label: "Actions", minWidth: 100, align: "center" },
  ];

  const debouncedSearch = debounce(async (criteria) => {
    dispatch(await setSearchVal(criteria));
    await fetchModelTypeInfo();
  }, 500);

  const fetchSearch = async (data) => {
    debouncedSearch(data);
  };

  const cancelSearch = () => {
    debouncedSearch("");
  };

  const changePage = async (data) => {
    dispatch(await setPage(data));
  };

  const changeRowsPerPage = async (data) => {
    dispatch(await setRowsPerPage(+data));
    dispatch(await setPage(0));
  };

  const redirectToUpdatePage = async (id, url) => {
    dispatch(await setItemId(id));
    await handleRedirectTo(url);
  };

  const clickShowModal = async (id, title, content, actionType) => {
    dispatch(await setItemId(id));
    dispatch(
      await showModal(title, content, {
        acceptFunc:
          actionType === constants.DELETE ? fetchDeleteModelTypeInfo : () => {},
        cancelFunc: clickCancel,
      })
    );
  };

  const fetchModelTypeInfo = async () => {
    dispatch(await getListOfModelTypeInfo(rowsPerPage, page, searchVal))
      .then((response) => {
        if (response?.payload?.data?.modelTypeInfoTotal > 0) {
          setModelTypeInfoList(response?.payload?.data?.modelTypeInfoList);
          setModelTypeInfoTotal(response?.payload?.data?.modelTypeInfoTotal);
        }
      })
      .catch((error) => {
        console.error(error);
        NotificationManager.error("Có lỗi xảy ra khi lấy danh sách!");
      });
  };

  const fetchDeleteModelTypeInfo = async (itemId) => {
    dispatch(await deleteModelTypeInfo(itemId))
      .then((response) => {
        if (response?.payload?.data?.success) {
          NotificationManager.success(`Xóa bản ghi id = ${itemId} thành công!`);
        } else {
          NotificationManager.error(response?.payload?.data?.msg);
        }
      })
      .catch((error) => {
        console.error(error);
        NotificationManager.error(
          "Không tìm thấy danh mục hoặc không xóa được danh mục này!"
        );
      });
    dispatch(await removeItemId());
  };

  const clickCancel = async () => {
    dispatch(await removeItemId());
  };

  const handleRedirectTo = (url) => {
    navigate(url, { replace: true });
  };

  useEffect(() => {
    fetchModelTypeInfo();
  }, [page, rowsPerPage, searchVal]);

  return (
    <>
      <div className="content" style={{ marginTop: 100 }}>
        <Row>
          <Col xs={12} md={12}>
            <div className="justify-content-end d-flex">
              <form>
                <Button
                  className="btn btn-info"
                  onClick={() => handleRedirectTo("/modal-type-info/create")}
                >
                  <i className="now-ui-icons ui-1_simple-add"></i>
                  &nbsp; Tạo mới
                </Button>
              </form>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Model type info</CardTitle>
              </CardHeader>
              <CardBody>
                <CustomPaginationActionsTable
                  columns={columns}
                  list={modelTypeInfoList}
                  total={modelTypeInfoTotal}
                  fetchSearch={fetchSearch}
                  cancelSearch={cancelSearch}
                  changePage={changePage}
                  changeRowsPerPage={changeRowsPerPage}
                  clickShowModal={clickShowModal}
                  redirectToUpdatePage={redirectToUpdatePage}
                  urlRedirect="/modal-type-info/update"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ModelTypeInfo;
