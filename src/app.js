import React, {useState} from 'react';
import Navbar from './components/Navbar_mobile';
import './index.css';
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarNoMember from './components/NavbarNoMember';
import MyPage from './pages/MyPage';
import Register from './pages/Register';
import Sidebar from './components/SideBar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () =>{
        setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <BrowserRouter>
    <GlobalStyle/>
    < Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(false)}/>
      <Routes>
        <Route path="/" element={<MyPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
