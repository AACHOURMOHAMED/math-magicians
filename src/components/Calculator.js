import React, { useState } from 'react';
import Button from './button/Button';
import './Calculator.scss';
import Result from './result';
import calculate from '../logic/calculate';

let obj = {};

const Calculator = () => {
  const [output, setOutput] = useState(0);

  const handleButtonClick = (buttonName) => {
    obj = calculate(obj, buttonName);

    let outStr = '';
    if (obj.total) {
      outStr += obj.total;
    }
    if (obj.operation) {
      outStr += obj.operation;
    }
    if (obj.next) {
      outStr += obj.next;
    }
    if (outStr === '') {
      outStr += '0';
    }

    setOutput(outStr);
  };
  return (
    <main className="Hero">
      <div className="container">
        <div className="buttons">
          <Result output={output} />
          <Button handleButtonClick={handleButtonClick}>AC</Button>
          <Button handleButtonClick={handleButtonClick}>+/-</Button>
          <Button handleButtonClick={handleButtonClick}>%</Button>
          <Button buttonStyle="btn--sec" handleButtonClick={handleButtonClick}>÷</Button>
          <Button handleButtonClick={handleButtonClick}>7</Button>
          <Button handleButtonClick={handleButtonClick}>8</Button>
          <Button handleButtonClick={handleButtonClick}>9</Button>
          <Button buttonStyle="btn--sec" handleButtonClick={handleButtonClick}>x</Button>
          <Button handleButtonClick={handleButtonClick}>4</Button>
          <Button handleButtonClick={handleButtonClick}>5</Button>
          <Button handleButtonClick={handleButtonClick}>6</Button>
          <Button buttonStyle="btn--sec" handleButtonClick={handleButtonClick}>-</Button>
          <Button handleButtonClick={handleButtonClick}>1</Button>
          <Button handleButtonClick={handleButtonClick}>2</Button>
          <Button handleButtonClick={handleButtonClick}>3</Button>
          <Button buttonStyle="btn--sec" handleButtonClick={handleButtonClick}>+</Button>
          <Button buttonStyle="btn--zero" handleButtonClick={handleButtonClick}>0</Button>
          <Button handleButtonClick={handleButtonClick}>.</Button>
          <Button buttonStyle="btn--sec" handleButtonClick={handleButtonClick}>=</Button>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
