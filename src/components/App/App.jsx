import './App.scss';
import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import { Routes, Route } from 'react-router-dom';
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
