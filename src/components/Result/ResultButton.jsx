import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {theme} from '../../theme';


function ResultButton() {
  const Navigate = useNavigate();
  function handleMyPageClick() {
    Navigate('/MyPage');
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
  gap: 50px; /* 버튼 간격 */
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom:40px;
  ${theme.media.mobile`
  display:flex;
  flex-direction:column;
  `}
`;

const MyPageButtonBox = styled.div`
  width: 160px;
  height: 44px;
  padding: 0 20px;
  border-radius: 4px;
  border: 1px solid #6487e2;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.media.mobile`
  width:268px;
  margin-top:-30px;
  `}
`;

const MyPageButton = styled.div`
  width: 120px;
  text-align: center;
  color: #6487e2;
  font-size: 16px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;

`;

const MainButton = styled.div`
  width: 120px;
  text-align: center;
  color: white;
  font-size: 16px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
  
`;

const MainButtonBox = styled.div`
  width: 160px;
  height: 44px;
  padding: 0 20px;
  background: #6487e2;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.media.mobile`
  width:268px;
  `}
`;