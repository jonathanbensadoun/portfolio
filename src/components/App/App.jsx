import React from 'react';

import Navbar from '../Navbar/Navbar';

import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage/HomePage';
import ProjectPage from '../../pages/ProjectPage/ProjectPage';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:title" element={<ProjectPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
