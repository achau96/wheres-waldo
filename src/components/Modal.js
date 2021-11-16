import React from 'react';

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Title Here</h4>
          <button>Close</button>
        </div>
        <div className="modal-body">This is modal content</div>
        <div className="modal-footer">
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
