/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React from 'react';
import Button from './button/Button';
import './Calculator.scss';
import Result from './result';
import calculate from '../logic/calculate';

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { output: '0' };
    this.obj = {};
  }

  handleButtonClick = (buttonName) => {
    this.obj = calculate(this.obj, buttonName);

    if (this.obj.operation && !this.obj.next) {
      this.setState({ output: this.obj.operation });
    } else if (this.obj.next) {
      this.setState({ output: this.obj.next });
    } else if (this.obj.total) {
      this.setState({ output: this.obj.total });
    } else {
      this.setState({ output: 0 });
    }
  }

  render() {
    const { output } = this.state;
    return (
      <main className="Hero">
        <div className="container">
          <div className="buttons">
            <Result output={output} />
            <Button handleButtonClick={this.handleButtonClick}>AC</Button>
            <Button handleButtonClick={this.handleButtonClick}>+/-</Button>
            <Button handleButtonClick={this.handleButtonClick}>%</Button>
            <Button buttonStyle="btn--sec" handleButtonClick={this.handleButtonClick}>÷</Button>
            <Button handleButtonClick={this.handleButtonClick}>7</Button>
            <Button handleButtonClick={this.handleButtonClick}>8</Button>
            <Button handleButtonClick={this.handleButtonClick}>9</Button>
            <Button buttonStyle="btn--sec" handleButtonClick={this.handleButtonClick}>x</Button>
            <Button handleButtonClick={this.handleButtonClick}>4</Button>
            <Button handleButtonClick={this.handleButtonClick}>5</Button>
            <Button handleButtonClick={this.handleButtonClick}>6</Button>
            <Button buttonStyle="btn--sec" handleButtonClick={this.handleButtonClick}>-</Button>
            <Button handleButtonClick={this.handleButtonClick}>1</Button>
            <Button handleButtonClick={this.handleButtonClick}>2</Button>
            <Button handleButtonClick={this.handleButtonClick}>3</Button>
            <Button buttonStyle="btn--sec" handleButtonClick={this.handleButtonClick}>+</Button>
            <Button buttonStyle="btn--zero" handleButtonClick={this.handleButtonClick}>0</Button>
            <Button handleButtonClick={this.handleButtonClick}>.</Button>
            <Button buttonStyle="btn--sec" handleButtonClick={this.handleButtonClick}>=</Button>
          </div>
        </div>
      </main>
    );
  }
}

export default Calculator;
