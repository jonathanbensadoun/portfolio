import './App.scss';
import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Description from '../Description/Description';
import { Routes, Route } from 'react-router-dom';
import scrollUtils from '../../utils/scrollAnimation';
import Contact from '../Contact/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Projects />
              <Description />
              <Contact />
            </>
          }
        />
        <Route
          path="/project/:title"
          element={
            <>
              <Header />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
