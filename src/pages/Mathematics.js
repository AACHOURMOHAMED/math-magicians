import React from 'react';
import '../styles/Mathematics.css';
import Calculator from '../components/Calculator';

function Mathematics() {
  return (
    <section className="calculator-page">
      <div className="calculator-content">
        <h2>Let&apos;s do some math!</h2>
      </div>
      <Calculator />
    </section>
  );
}

export default Mathematics;
