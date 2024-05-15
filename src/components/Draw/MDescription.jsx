import React, { useState } from 'react';
//import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { ReactComponent as GCheck } from '../../assets/Draw/GCheck.svg';
import { ReactComponent as PrepareDraw1 } from '../../assets/Draw/PrepareDraw1.svg';
import { ReactComponent as Shape } from '../../assets/Draw/Shape.svg';
import { ReactComponent as Rectangle } from '../../assets/Draw/Rectangle.svg';

const MDescription = () => {
   

  return (

    <Wrap>
        <Title>
        도움말
        </Title>

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

  </Wrap>
  );

}

export default MDescription;


const Wrap = styled.div`

    display: none;

  ${theme.media.mobile`
    display: flex;
    margin : 1rem;
    flex-direction: column;
    flex-wrap: wrap; /* 요소들이 줄어들 수 있도록 함 */

  `}

`;

const Title = styled.div`

    display: none;

  ${theme.media.mobile`
    display: flex;
    flex-direction: column;
    padding: 0.625rem;
    color: black;

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
  display: flex;
//   width: 21.125rem;
  width: 100%;

`}

`;

const StyledItem = styled.div`
  display: inline-flex;
  gap: 0.625rem; //10px;
  align-items: flex-start;

  ${theme.media.mobile`

  gap: 0.625rem; //10px;
  align-items: center;
`}
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
  font-size: 0.875rem; //12px;
  font-family: Pretendard-Regular;
  font-weight: 500;
  line-height: 1.125rem; //18px;
  word-wrap: break-word;

  ${theme.media.mobile`
  width: 17.625rem;

`}
`;
