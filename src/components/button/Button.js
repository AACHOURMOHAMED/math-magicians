/* eslint-disable react/prop-types, react/prefer-stateless-function */

import React, { Component } from 'react';
import './button.scss';

export class button extends Component {
  render() {
    const { children, buttonStyle, onClick } = this.props;
    const STYLES = ['btn--primary', 'btn--sec', 'btn--zero'];
    const CheckBtnStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    return (
      <div>
        <button className={`btn ${CheckBtnStyles}`} onClick={onClick} value={children} type="button">{children}</button>
      </div>
    );
  }
}

export default button;
