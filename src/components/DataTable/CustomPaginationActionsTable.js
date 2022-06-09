import * as React from "react";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { Input, InputGroup } from "reactstrap";

import * as constants from "../../constants/constants";

const columns = [
  { id: "stt", label: "STT", minWidth: 20, align: "center" },
  { id: "code", label: "Code", minWidth: 100, align: "center" },
  { id: "name", label: "Name", minWidth: 100, align: "center" },
  { id: "description", label: "Description", minWidth: 100, align: "center" },
  { id: "status", label: "Status", minWidth: 100, align: "center" },
  { id: "actions", label: "Actions", minWidth: 100, align: "center" },
];

export default function CustomPaginationActionsTable({
  fetchSearch,
  cancelSearch,
  changePage,
  changeRowsPerPage,
  clickShowModal,
}) {
  const { categories, categoryTotal } = useSelector((state) => state.category);
  const { page, rowsPerPage, searchVal } = useSelector((state) => state.table);

  const handleClick = async (event) => {
    const id = await event.currentTarget.attributes["id"].value;
    await clickShowModal(
      id,
      "Xác nhận",
      `Bạn chắc chắn muốn xóa bản ghi này? (id=${id})`, 
      constants.DELETE
    );
  };

  const handleCancel = async () => {
    cancelSearch();
  };

  const handleChangePage = (event, newPage) => {
    changePage(newPage);
  };

  const handleChangeRowsPerPage = async (event) => {
    changeRowsPerPage(event.target.value);
  };

  const handleSearch = async (e) => {
    fetchSearch(e.target.value);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <div className="justify-content-end d-flex">
        <form style={{ width: 300 }}>
          <InputGroup className="no-border">
            <Input
              placeholder="Tìm kiếm..."
              onChange={handleSearch}
              value={searchVal}
            />
            {searchVal && (
              <i
                className="now-ui-icons ui-1_simple-remove"
                style={{
                  position: "absolute",
                  right: "0.25rem",
                  top: "0.7rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  zIndex: 10,
                }}
                onClick={handleCancel}
              />
            )}
          </InputGroup>
        </form>
      </div>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {categories
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell style={{ width: 160 }} align="center">
                      {index + 1}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="left">
                      {row.code}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="left">
                      {row.name}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="left">
                      {row.description}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">
                      {row?.status === false ? (
                        <i className="fa fa-ban" style={{ color: "red" }}></i>
                      ) : (
                        <i
                          className="fa fa-check"
                          style={{ color: "green" }}
                        ></i>
                      )}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        id={row?.id}
                        onClick={handleClick}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={categoryTotal}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
