/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Calculator.scss';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { output } = this.props;
    return <div className="text">{output}</div>;
  }
}

export default Result;
