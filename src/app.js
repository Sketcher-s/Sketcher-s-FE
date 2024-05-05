import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import styled from 'styled-components';
import './assets/font/font.css';

import Result from './pages/Result';
import Main from './pages/Main';

function App() {
    return (
      <div>
        <Background>
          <BrowserRouter>
            <Routes>
              <Route path="/Result" element={<Result/>} />
              <Route path="/Main" element={<Main/>} />
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