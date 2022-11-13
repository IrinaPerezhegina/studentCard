import React from "react";
import PropTypes from "prop-types";

const FormInput = ({
    onChange,
    value,
    labelTitle,
    name,
    type,
    onDecrement,
    onIncrement,
    error
}) => {
    const getInputClasses = (error) => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="mb-4">
            <label htmlFor={name}></label>
            <div>{labelTitle}</div>
            <div className="input-group has-validation">
                <>
                    {name === "birthYear" ? (
                        <div className="input-group ">
                            <input
                                name={name}
                                className={getInputClasses(error)}
                                type={type}
                                value={value}
                                onChange={handleChange}
                            />
                            <div className="invalid-feedback">{error}</div>
                            <div className="d-flex align-items-end flex-column new ">
                                <button
                                    name={name}
                                    onClick={onIncrement}
                                    className="btn btn-sm p-0 border-0"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="13"
                                        fill="currentColor"
                                        className="bi bi-caret-up-square"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                        <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={onDecrement}
                                    className="btn  btn-sm  p-0 border-0"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="13"
                                        fill="currentColor"
                                        className="bi bi-caret-down-square"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z" />
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <input
                                name={name}
                                className={getInputClasses(error)}
                                type={type}
                                value={value}
                                onChange={handleChange}
                            />
                            <div className="invalid-feedback">{error}</div>
                        </>
                    )}
                </>
            </div>
        </div>
    );
};
FormInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    onDecrement: PropTypes.func,
    onIncrement: PropTypes.func,
    labelTitle: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.string
};
export default FormInput;
