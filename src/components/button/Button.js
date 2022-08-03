/* eslint-disable react/prop-types, react/prefer-stateless-function */

import React, { Component } from 'react';
import './button.scss';

export class button extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleButtonClick(e) {
    const { handleButtonClick } = this.props;
    handleButtonClick(e.target.textContent);
  }

  render() {
    const { children, buttonStyle } = this.props;
    const STYLES = ['btn--primary', 'btn--sec', 'btn--zero'];
    const CheckBtnStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    return (
      <button className={`btn ${CheckBtnStyles}`} onClick={this.handleButtonClick} type="button">{children}</button>
    );
  }
}

export default button;
