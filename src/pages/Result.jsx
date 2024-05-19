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
  overflow: hidden;
  background: #f3f3f6;
  display: flex;
  flex-direction: column;
  align-items: center; // 중앙 정렬
  justify-content: center; // 중앙 정렬
  padding: 20px 0; // 상하 패딩
  ${theme.media.mobile`
    padding: 15px 10px; // 모바일에서 패딩 조정
  `}
`;

const DrawingSection = styled.div`
  width: 70%; // 기본 화면에서의 너비
  height: auto;
  justify-content: center;
  background: white;
  border-radius: 0.8rem;
  margin-top:2rem;
  padding: 3rem 5rem; // 데스크탑에서의 패딩
  ${theme.media.mobile`  
 
    padding: 30px 20px; // 모바일에서 패딩 조정
    margin-bottom: 30px; // 하단 마진 추가
  `}
`;