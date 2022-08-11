import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const button = (props) => {
  const handleButtonClick = (e) => {
    const { handleButtonClick } = props;
    handleButtonClick(e.target.textContent);
  };
  const { children, buttonStyle } = props;
  const STYLES = ['btn--primary', 'btn--sec', 'btn--zero'];
  const CheckBtnStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  return (
    <button className={`btn ${CheckBtnStyles}`} onClick={handleButtonClick} type="button">{children}</button>
  );
};

export default button;

button.defaultProps = {
  buttonStyle: 'btn--primary',
  children: '',
  handleButtonClick: () => {},
};

button.prototype = {
  buttonStyle: PropTypes.node,
  children: PropTypes.node,
  handleButtonClick: PropTypes.func,
};
