/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

const Header = () => (
  <header>
    <div className={classes.HeaderContent}>
      <div className={classes.HeaderLogo}>
        <h2>Math Magicians</h2>
      </div>
      <div className={classes.HeaderNav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/Quote">Quote</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
