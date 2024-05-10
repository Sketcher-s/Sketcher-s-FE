import React from 'react';
import Login from './pages/Login'; // Login.jsx를 상대 경로로 import
import Navbar from './components/Navbar';
import GlobalStyle from './components/GlobalStyle';
//import M_Login from './pages/Mobile/M_Login';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Login />
    </>
  );
}

export default App;
