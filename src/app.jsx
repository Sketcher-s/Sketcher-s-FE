import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
//import PrepareDraw from './components/Draw/PrepareDraw';
//import Draw from './components/Draw/Draw';
import styled from 'styled-components';
import './assets/font/font.css';


function App() {
    return (
      <div>
        <Background>
          <BrowserRouter>
            <Routes>
              {/* 라우팅 주소 변경 부탁 !! */}
              {/* <Route path="/" element={<PrepareDraw/>} />
              <Route path="/Draw" element={<Draw/>} /> */}
            </Routes>
          </BrowserRouter>
        </Background>
      </div>
    );

}

export default App;

const Background = styled.div`
  height: 100vh;
`;