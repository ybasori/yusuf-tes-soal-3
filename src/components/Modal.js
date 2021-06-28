import React from "react";
import "./Modal.scss";

const Modal = ({ onClose, children }) => {
    return (
        <div className="modal-comp">
            <div className="background" onClick={() => onClose(false)}></div>
            <div className="modal">{children}</div>
        </div>
    );
};
export default Modal;
