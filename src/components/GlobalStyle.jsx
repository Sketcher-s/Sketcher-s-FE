import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html{
    width:100%;
    height:100%;
    margin: 0;
    padding: 0;
    background-color: #F3F3F6;
  }
  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
