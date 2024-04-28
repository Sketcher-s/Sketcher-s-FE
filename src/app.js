import React from 'react';
import Login from './pages/Login'; // Login.jsx를 상대 경로로 import
import Navbar from './components/Navbar';
import GlobalStyle from './components/GlobalStyle';
import Register from './pages/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
