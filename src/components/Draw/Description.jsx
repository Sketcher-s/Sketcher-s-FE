import React, { useState } from 'react';
//import React from 'react';
import PropTypes from 'prop-types'; // prop-types 추가
import styled from 'styled-components';
import { ReactComponent as GCheck } from '../../assets/Draw/GCheck.svg';
import { ReactComponent as PrepareDraw1 } from '../../assets/Draw/PrepareDraw1.svg';
import { ReactComponent as Shape } from '../../assets/Draw/Shape.svg';
import { ReactComponent as Rectangle } from '../../assets/Draw/Rectangle.svg';
import { theme } from '../../theme';

const Description = ({onClick}) => {
    const [isBarBoxVisible, setBarBoxVisible] = useState(true);

    const toggleBarBox = () => {
        setBarBoxVisible(!isBarBoxVisible);
        onClick(); // Description을 클릭했을 때 상위 컴포넌트의 onClick 함수 호출
      };

    Description.propTypes = {
        onClick: PropTypes.func.isRequired, // onClick prop의 유효성 검사 추가
    };

  return (
    <div>
    
    <Container>

        {isBarBoxVisible && (
    <BarBox onClick={toggleBarBox}>
        <StyledShape>
            <Shape/>
        </StyledShape>

        <StyledRectangle>
            <Rectangle/>
        </StyledRectangle>
    </BarBox>
    )}

    <StyledContainer onClick={toggleBarBox}>

      <StyledMissionContainer>
        <StyledMissionTag>Mission</StyledMissionTag>
        <StyledMissionText>집, 나무, 사람을 그려주세요!</StyledMissionText>
      </StyledMissionContainer>
      
      <StyledItemContainer>
        <StyledItem>
          <StyledIconContainer>
            <GCheck/>
          </StyledIconContainer>
          <StyledContent>아이가 검정색으로 그림을 완성할 수 있도록 도와주세요.</StyledContent>
        </StyledItem>
        <StyledItem>
          <StyledIconContainer>
            <PrepareDraw1 />
          </StyledIconContainer>
          <StyledContent>새로고침을 하면 그림이 초기화 됩니다.</StyledContent>
        </StyledItem>
        <StyledItem>
          <StyledIconContainer>
          <PrepareDraw1 />
          </StyledIconContainer>
          <StyledContent>검정색 이외의 색상은 지원하지 않습니다.</StyledContent>
        </StyledItem>
      </StyledItemContainer>
    </StyledContainer>

    </Container>
    </div>
  );
}

export default Description;

const Container = styled.div`

  background: #f3f3f6;
  position: relative;
  display: flex;
  // right: 0; /* 오른쪽에 위치하도록 설정 */
  //justify-content: flex-end; /* 모든 내용을 컨테이너의 오른쪽 끝에 배치 */
  align-items: center; /* 세로 가운데 정렬 */

  ${theme.media.mobile`
  width: 12.875rem; //206px;
  height: 38.875rem; //622px;

`}
`;


const StyledContainer = styled.div`
  width: 12.875rem; //206px;
  //height: 38.875rem; //622px;
  padding:  1.875rem 1.125rem; //30px 18px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap:  1.25rem; //20px;
  display: inline-flex;
  height: 42.625rem;

  ${theme.media.mobile`
  width: 100%;
  height: 7.5rem;

  justify-content: center;
  align-items: center;

  `}

`;

const StyledMissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem; //10px;

  ${theme.media.mobile`


  `}

`;

const StyledMissionTag = styled.div`
  padding: 0.125rem 0.5rem; //2px 8px;
  background: #E7EFFF;
  border-radius: 3.125rem; //50px;
  color: #6487E2;
  font-size: 0.6875rem; //11px;
  font-family: Pretendard-Regular;
  font-weight: 500;
  line-height: 1.0313rem; //16.5px;
  word-wrap: break-word;
`;

const StyledMissionText = styled.div`
  color: #27282B;
  font-size: 0.875rem; //14px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 1.3125rem; //21px;
  word-wrap: break-word;

  ${theme.media.mobile`

  width: 17.625rem;
  height: 8.625rem;
  justify-content: center;
  align-items: center;

`}
`;

const StyledItemContainer = styled.div`
  padding: 1.125rem 1rem; //18px 16px;
  background: #FDFDFF;
  border-radius: 0.625rem; //10px;
  border: 0.0375rem #E0E1E9 solid; //0.6px
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem; //12px;
  display: flex;

  ${theme.media.mobile`



`}

`;

const StyledItem = styled.div`
  display: inline-flex;
  gap: 0.625rem; //10px;
  align-items: flex-start;
`;

const StyledIconContainer = styled.div`
  width: 1rem; //16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem; //10px;
`;

const StyledContent = styled.div`
  width: 9.375rem; //150px;
  color: #27282B;
  font-size: 0.75rem; //12px;
  font-family: Pretendard-Regular;
  font-weight: 500;
  line-height: 1.125rem; //18px;
  word-wrap: break-word;
`;

const BarBox = styled.div`
//background: #f3f3f6;
width: 1.25rem; //20px;
height: 4.375rem; //70px;
justify-content: center; /* 수평 중앙 정렬 */
align-items: center; /* 수직 중앙 정렬 */
// width: 100vw; /* 화면 너비 전체 */
// height: 100vh; /* 화면 높이 전체 */
//margin-right: auto; /* BarBox를 왼쪽으로 밀어서 모든 내용을 오른쪽으로 밀어냄 */




`;

const StyledShape = styled.div`
position: absolute;
margin-top: 1.5625rem; //25px;
margin-left: 0.4375rem; //7px;
z-index: 2;

${theme.media.mobile`
//position: fixed;
top: 25.5%; /* 화면 위쪽 가운데로 */
left: 50%;
transform: translate(-50%, -50%);
width: auto; /* 필요에 따라 너비 조정 */
height: auto; /* 필요에 따라 높이 조정 */
transform: translate(-50%, -50%) rotate(-90deg); /* 왼쪽으로 회전 */

`}
`;

const StyledRectangle = styled.div`
position: relative;
z-index: 1;

`;

// const MobileModalContainer = styled.div`
//   display: none;

//   ${theme.media.mobile`
//   background: white;
//   width: 100%;
//   height: 7.5rem;
//   position: fixed;
//   left: 0;
//   z-index: 9999;
//   display: flex;
//   flex-direction: column;

//   `}

// `;
