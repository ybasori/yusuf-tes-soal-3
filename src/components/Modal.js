import React from "react";
import "./Modal.scss";

const Modal = ({ onClose }) => {
    return (
        <div className="modal-comp">
            <div className="background" onClick={() => onClose(false)}></div>
            <div className="modal">Roar</div>
        </div>
    );
};
export default Modal;
