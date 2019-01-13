import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, disabled, onClick }) => {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

z
Button.defaultProps = {
  disabled: false
};

export default Button;
