import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import PrepareDraw from './components/Draw/PrepareDraw';
import Draw from './components/Draw/Draw';
import Loading from './components/Draw/Loading';
import styled from 'styled-components';
import './assets/font/font.css';
import PreparePicture from './components/Draw/PreparePic';
//import DrawPage from '/Users/jangnanyoung/Desktop/sketchers-fe/src/pages/Draw';
import Description from './components/Draw/Description';
import Bar from './components/Draw/Bar';
import DrawPage from './pages/Draw';


function App() {
    return (
      <div>
        <Background>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PrepareDraw/>} />
              <Route path="/Draw" element={<Draw/>} />
              <Route path="/PreparePicture" element={<PreparePicture/>} />
              <Route path="/Loading" element={<Description/>} />
              {/* <Route path="/Loading" element={<Bar/>} /> */}
            </Routes>
          </BrowserRouter>
        </Background>
      </div>
    );

}

export default App;

const Background = styled.div`
  height: 100vh;
  color : gray;
`;