import React from 'react';
import Navbar from './components/NavbarMember';
import './index.css';
import MyPage from './pages/MyPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Spinner/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;