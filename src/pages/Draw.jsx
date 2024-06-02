import React from 'react';
import styled from 'styled-components';
//import { useRecoilState, useRecoilValue } from 'recoil';
//import { searchToggleState, searchResultState, searchTextState } from '../recoil';
import Description from '../components/Draw/Description';
import Draw from '../components/Draw/Draw';
import { theme } from '../theme';
import MDescription from '../components/Draw/MBar';


export default function DrawPage() {


  return (
    <Container>
        <Draw/>
        <Description />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  display: inline-flex;
  background: #f3f3f6;
  border-radius: 10px;

  ${theme.media.mobile`

`}
  
`;