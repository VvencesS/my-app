import React from "react";
import { useSelector } from "react-redux";

export default () => {
  const { itemId, title, content, handleFunction } = useSelector(
    (state) => state.modal
  );

  const handleAccept = async () => {
    await handleFunction.acceptFunc(itemId);
  };

  const handleCancel = async () => {
    await handleFunction.cancelFunc();
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
              {title}
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
          <div className="modal-body">{content}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleCancel}
            >
              Hủy
            </button>

            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={handleAccept}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
