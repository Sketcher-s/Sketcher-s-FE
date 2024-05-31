import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // prop-types 추가
import { ReactComponent as GCheck } from '../../assets/Draw/GCheck.svg';
import { ReactComponent as PrepareDraw1 } from '../../assets/Draw/PrepareDraw1.svg';
import { ReactComponent as Shape } from '../../assets/Draw/Shape.svg';
import { ReactComponent as RectangleH } from '../../assets/Draw/RectangleH.svg';
import { ReactComponent as Rectangle } from '../../assets/Draw/Rectangle.svg';

import { theme } from '../../theme';

// Container 컴포넌트
export const Container = styled.div`
  display: flex; 
  z-index: 999;
  position: relative;


  ${theme.media.mobile`
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    position: fixed;
    z-index: 999;
    margin-top: -10rem;

  `}
  ${theme.media.desktop`
    right: 0;
  `}
`;

const Ver3=({onClick}) => {
    const [isBarBoxVisible, setBarBoxVisible] = useState(true);

    const toggleBarBox = () => {
        setBarBoxVisible(!isBarBoxVisible);
        onClick(); // Description을 클릭했을 때 상위 컴포넌트의 onClick 함수 호출
      };

    Ver3.propTypes = {
        onClick: PropTypes.func.isRequired, // onClick prop의 유효성 검사 추가
    };

  return (
    <Container>
        <DeskBtn>
        {isBarBoxVisible && (
      <BarContainer>
          <BarBox onClick={toggleBarBox}>
            <StyledShape>
                <Shape/>
            </StyledShape>
            <StyledRectangle>
              <Rectangle />
            </StyledRectangle>
          </BarBox>
      </BarContainer>
      )}
        </DeskBtn>
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
      <MobileBtn>
          {isBarBoxVisible && (
          <BarContainer>
              <BarBox onClick={toggleBarBox}>
                <StyledShape>
                    <Shape/>
                </StyledShape>
                <StyledRectangle>
                  <RectangleH />
                </StyledRectangle>
              </BarBox>
          </BarContainer>
          )}
      </MobileBtn>

    </Container>
  );
}

export default Ver3;

export const StyledContainer = styled.div`
  width: 12.875rem; //206px;
  padding: 1.875rem 1.125rem; //30px 18px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap:  1.25rem; //20px;
  display: flex;
  // height: 42.625rem;
  height: 100vh;
  box-shadow: 0px 0px 10px rgba(39, 40, 43, 0.05);

  ${theme.media.mobile`
  width: 100%;
  height: 20%;
  z-index:1;

  `}

`;

export const StyledMissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem; //10px;

  ${theme.media.mobile`
  width: 85%;
  align-self: center;
  text-align: left;
  `}
`;

export const StyledMissionTag = styled.div`
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

export const StyledMissionText = styled.div`
  color: #27282B;
  font-size: 0.875rem; //14px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 1.3125rem; //21px;
  word-wrap: break-word;

  ${theme.media.mobile`
  justify-content: center;
  align-items: center;
  text-align: flex-start;

`}
`;

export const StyledItemContainer = styled.div`
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
  width: 80%;
  align-self: center;


`}

`;

export const StyledItem = styled.div`
  display: flex;
  gap: 0.625rem; //10px;
  align-items: flex-start;
  ${theme.media.mobile`
  

`}
`;

export const StyledIconContainer = styled.div`
  width: 1rem; //16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem; //10px;
  ${theme.media.mobile`
  align-items: flex-start;
`}
`;

export const StyledContent = styled.div`
  width: 9.375rem; //150px;
  color: #27282B;
  font-size: 0.75rem; //12px;
  font-family: Pretendard-Regular;
  font-weight: 500;
  line-height: 1.125rem; //18px;
  word-wrap: break-word;
  ${theme.media.mobile`
  width: 90%;
`}
`;

export const BarContainer = styled.div`
display: flex;
position: relative;
cursor: pointer;

${theme.media.mobile`
width: 100%;
justify-content: center;
`}
${theme.media.desktop`
display: flex;
//align-items: center;
position: relative;


`}
`
export const BarBox = styled.div`
align-items: center; /* 수직 중앙 정렬 */
justify-content: center;

${theme.media.mobile`
width: auto;
height: auto;
position: relative;

`}
${theme.media.desktop`
width: 1.25rem; //20px;
height: 4.375rem; //70px;
justify-content: center; /* 수평 중앙 정렬 */
//padding-top: 10%;

padding-top: 1000%;

`}
`;

export const StyledShape = styled.div`
position: absolute;
z-index: 2;

${theme.media.mobile`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg); // Shape를 중앙에 위치시킵니다.
`}
${theme.media.desktop`
  margin-top: 1.5625rem; //25px;
  margin-left: 0.4375rem; //7px;
`}
`;

export const StyledRectangle = styled.div`
position: relative;
z-index: 1;
`;

export const DeskBtn = styled.div`
${theme.media.mobile`
    display: none;
`}
${theme.media.desktop`
    display: flex;
    z-index: 99;

    // position: relative;
    // left: 98.5%;
    
`}
`;

export const MobileBtn = styled.div`
${theme.media.mobile`
    width: 100%;
    display: flex;
    flex-direction: column;
`}
${theme.media.desktop`
    display: none;
`}
`;
