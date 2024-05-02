import React, {useState} from 'react';
import Navbar from './components/NavbarMember';
import './index.css';
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarNoMember from './components/NavbarNoMember';
import MyPage from './pages/MyPage';
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () =>{
        setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <BrowserRouter>
    {/* <GlobalStyle/> */}
    < NavbarNoMember toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(false)}/>
      <Routes>
        <Route path="/" element={<MyPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
