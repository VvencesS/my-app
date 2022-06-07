import React from "react";
import { useDispatch } from "react-redux";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import {
  deleteCategory,
  getListOfCategories,
} from "../../store/actions/categorie";
export default ({ categoryId,  fetchCategories}) => {
  const dispatch = useDispatch();
  const fetchDeleteCategory = async () => {
    dispatch(await deleteCategory(categoryId))
      .then((respone) => {
        NotificationManager.success(
          `Xóa bản ghi id = ${categoryId} thành công!`
        );
      })
      .catch((error) => {
        NotificationManager.error(
          "Không tìm thấy danh mục hoặc không xóa được danh mục này!"
        );
      });
  };
  const handleDeleteCategory = async () => {
    NotificationManager.info(`Đang xóa bản ghi id = ${categoryId}!`);
    await fetchDeleteCategory();
    await fetchCategories();
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Xác nhận
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            Bạn chắc chắn muốn xóa bản ghi này (id={categoryId})?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Hủy
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={handleDeleteCategory}
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
