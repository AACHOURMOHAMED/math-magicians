/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Button from './button/Button';
import './Calculator.scss';

export class Calculator extends Component {
  render() {
    return (
      <main className="Hero">
        <div className="container">
          <div className="buttons">
            <span>0</span>
            <div className="text" />
            <Button>AC</Button>
            <Button>+/-</Button>
            <Button>%</Button>
            <Button buttonStyle="btn--sec">÷</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button buttonStyle="btn--sec">x</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button buttonStyle="btn--sec">-</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button buttonStyle="btn--sec">+</Button>
            <Button buttonStyle="btn--zero">0</Button>
            <Button>.</Button>
            <Button buttonStyle="btn--sec">=</Button>
          </div>
        </div>
      </main>
    );
  }
}

export default Calculator;
