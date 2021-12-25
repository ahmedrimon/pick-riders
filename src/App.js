import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login/Login';
import Navbar from './component/Home/Navbar/Navbar';

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </section>
  );
}

export default App;
