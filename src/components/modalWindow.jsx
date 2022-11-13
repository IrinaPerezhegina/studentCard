import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const ModalWindow = ({ show, onClose }) => {
    if (!show) {
        return null;
    }
    const history = useHistory();
    const handleClick = () => {
        history.push("/");
    };
    return (
        <div className="modalWindow">
            <div className="modalСontent">
                <div className="modalBody">Обновлено!</div>
                <div className="modalFooter">
                    <button
                        onClick={handleClick}
                        type="button"
                        className="btn-modal btn text-primary"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
ModalWindow.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func
};
export default ModalWindow;
