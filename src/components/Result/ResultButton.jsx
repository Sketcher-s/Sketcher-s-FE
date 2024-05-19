import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {theme} from '../../theme';


function ResultButton() {
  const Navigate = useNavigate();
  function handleMyPageClick() {
    Navigate('/mypage');
  }
  function handleMainClick() {
    Navigate('/Main');
  }
  return (
    <div>
        <ButtonBox>
        <MainButtonBox >
            <MainButton onClick={handleMainClick}>메인페이지로 이동</MainButton>
          </MainButtonBox>
        <MyPageButtonBox >
            <MyPageButton onClick={handleMyPageClick}>마이페이지로 이동</MyPageButton>
          </MyPageButtonBox>
  
          
        </ButtonBox>
    </div>
  );
}
export default ResultButton;

const ButtonBox = styled.div`
  display: flex;
  gap: 3.125rem; /* 버튼 간격 */
  justify-content: center;
  align-items: center;
  margin-top: 3.25rem;
  margin-bottom:2.5rem;
  ${theme.media.mobile`
  flex-direction:column;
  `}
`;

const MyPageButtonBox = styled.div`
  width: 10rem;
  height: 2.75rem;
  padding: 0 1.25rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid #6487e2;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.media.mobile`
  width:16.75rem;
  margin-top:-1.875rem;
  `}
`;

const MyPageButton = styled.div`
  width: 7.5rem;
  text-align: center;
  color: #6487e2;
  font-size: 1rem;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 1.5rem;
  word-wrap: break-word;

`;

const MainButton = styled.div`
  width: 7.5rem;
  text-align: center;
  color: white;
  font-size: 1rem;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 1.5rem;
  word-wrap: break-word;
  
`;

const MainButtonBox = styled.div`
  width: 10rem;
  height: 2.75rem;
  padding: 0 1.25rem;
  background: #6487e2;
  border-radius: 0.25rem;
  border: 0.0625rem solid #6487e2;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.media.mobile`
  width:16.75rem;
  `}
`;