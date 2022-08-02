/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Calculator } from './components/Calculator';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
