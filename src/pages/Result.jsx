import React from 'react';
import styled from 'styled-components';
import NavbarMember from '../components/NavbarNoMember'
import ResultButton from '../components/Result/ResultButton';
import ResultContent from '../components/Result/ResultContent';
import ResultTitle from '../components/Result/ResultTitle';
import { theme } from '../theme';
function Result() {
  return (
    <div>
      <Wrapper>
        <DrawingSection>
          <ResultTitle/>
          <ResultContent/>
          <ResultButton/>
        </DrawingSection>
      </Wrapper>
    </div>
  );
}
export default Result;

const Wrapper = styled.div`
width: 100%;
position: relative;
background: #f3f3f6;
display: flex;
flex-direction: column;
align-items: center; // 중앙 정렬을 위해 추가
justify-content: center; // 중앙 정렬을 위해 추가
padding: 20px 0; // 상하 패딩 추가
${theme.media.mobile`

`}
`;

const DrawingSection = styled.div`
  width: 810px;
  height: auto; // 높이를 auto로 조정
  justify-content: center;
  background: white;
  border-radius:10px;
padding: 50px 80px 50px 80px;
border-radius: 10px;


  ${theme.media.mobile`  
  width:338px;
padding: 30px 20px 30px 20px;
border-radius: 10px;
margin-bottom:50px;
`}
`;