/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Mathematics from './pages/Mathematics';
import Quotes from './pages/Quotes';
import Home from './pages/Home';

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/Calculator"
          element={<Mathematics />}
        />
        <Route
          path="/Quote"
          element={<Quotes />}
        />
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
