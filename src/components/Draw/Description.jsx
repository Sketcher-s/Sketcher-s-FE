//import React, { useRef, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as GCheck } from '../../assets/Draw/GCheck.svg';
import { ReactComponent as PrepareDraw1 } from '../../assets/Draw/PrepareDraw1.svg';
//import { ReactComponent as Shape } from '../../assets/Draw/Shape.svg';
//import { ReactComponent as Rectangle } from '../../assets/Draw/Rectangle.svg';

const Description = () => {

  return (
    <Container>

    <StyledContainer>

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
 
  );
}

export default Description;

const Container = styled.div`
  background: #f3f3f6;
  position: absolute;
  right: 0; /* 오른쪽에 위치하도록 설정 */
`;

const StyledContainer = styled.div`
  width: 206px;
  height: 622px;
  padding: 30px 18px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: inline-flex;
`;

const StyledMissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const StyledMissionTag = styled.div`
  padding: 2px 8px;
  background: #E7EFFF;
  border-radius: 50px;
  color: #6487E2;
  font-size: 11px;
  font-family: Pretendard-Regular;
  font-weight: 500;
  line-height: 16.5px;
  word-wrap: break-word;
`;

const StyledMissionText = styled.div`
  color: #27282B;
  font-size: 14px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 21px;
  word-wrap: break-word;
`;

const StyledItemContainer = styled.div`
  padding: 18px 16px;
  background: #FDFDFF;
  border-radius: 10px;
  border: 0.6px #E0E1E9 solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: flex;
`;

const StyledItem = styled.div`
  display: inline-flex;
  gap: 10px;
  align-items: flex-start;
`;

const StyledIconContainer = styled.div`
  width: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const StyledContent = styled.div`
  width: 150px;
  color: #27282B;
  font-size: 12px;
  font-family: Pretendard-Regular;
  font-weight: 500;
  line-height: 18px;
  word-wrap: break-word;
`;