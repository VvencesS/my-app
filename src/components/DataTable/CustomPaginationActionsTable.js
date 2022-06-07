import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import Modal from "../Modal/Modal";
import { NotificationContainer } from "react-notifications";
import { Input, InputGroup } from "reactstrap";
import { debounce } from "@mui/material";

const columns = [
  { id: "id", label: "Id", minWidth: 20, align: "center" },
  { id: "code", label: "Code", minWidth: 100, align: "center" },
  { id: "name", label: "Name", minWidth: 100, align: "center" },
  { id: "description", label: "Description", minWidth: 100, align: "center" },
  { id: "deleted", label: "Deleted", minWidth: 100, align: "center" },
  { id: "actions", label: "Actions", minWidth: 100, align: "center" },
];

export default function CustomPaginationActionsTable({
  categories,
  fetchCategories,
}) {
  const [page, setPage] = React.useState(0);
  const [categoryId, setCategoryId] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState(categories);
  const [search, setSearch] = React.useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const requestSearch = (searchVal) => {
    const filteredRows = rows.filter((row) => {
      return (
        row.code.toLowerCase().includes(searchVal.toLowerCase()) ||
        row.name.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    // setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearch("");
    requestSearch(search);
  };

  const debouncedSearch = debounce(async (criteria) => {
    setSearch(criteria);
  }, 500);

  const handleSearch = async (e) => {
    debouncedSearch(e.target.value);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <div className="justify-content-end d-flex">
        <form style={{ width: 300 }}>
          <InputGroup className="no-border">
            <Input placeholder="Tìm kiếm..." onChange={handleSearch} />
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
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell style={{ width: 160 }} align="center">
                      {row.id}
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
                      {row?.deleted === false ? (
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
                        onClick={() => {
                          setCategoryId(row?.id);
                        }}
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
        count={categories.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Modal categoryId={categoryId} fetchCategories={fetchCategories} />
      <NotificationContainer />
    </Paper>
  );
}
