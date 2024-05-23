import React, {useState} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import PrepareDraw from './components/Draw/PrepareDraw';
import Draw from './components/Draw/Draw';
import Loading from './components/Draw/Loading';
import './assets/font/font.css';
import PreparePicture from './components/Draw/PreparePic';
import Login from './pages/Login';
import Register from './pages/Register';
import MyPage from './pages/MyPage';
import Result from './pages/Result';
import Main from './pages/Main';
import Camera from './components/Draw/Camera';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { RecoilRoot } from 'recoil';

function App() {
    return (
      <div>
        <RecoilRoot>
          <BrowserRouter>
              <Navbar/>
              <Sidebar/>
              <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/mypage" element={<MyPage/>} />
                <Route path="/preparedraw" element={<PrepareDraw/>} />
                <Route path="/draw" element={<Draw/>} />
                <Route path="/preparepicture" element={<PreparePicture/>} />
                <Route path="/loading" element={<Loading/>} />
                <Route path="/" element={<Main/>} />
                <Route path="/result" element={<Result/>} />
                <Route path="/camera" element={<Camera/>} />
              </Routes>
            </BrowserRouter>
        </RecoilRoot>
      </div>
    );

}

export default App;

// const Background = styled.div`
//   height: 100vh;
//   color : gray;
// `;