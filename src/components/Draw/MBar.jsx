import React, { useState } from 'react';
//import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const MBar = () => {
   

  return (

    <StyledMissionContainer>
        <StyledMissionTag>Mission</StyledMissionTag>
        <StyledMissionText>집, 나무, 사람을 그려주세요!</StyledMissionText>
    </StyledMissionContainer>
  );

}

export default MBar;

const StyledMissionContainer = styled.div`

    display: flex;
    width: 21.125rem;
    flex-direction: column;
    gap: 0.625rem;
    background: white;
    border-radius: 0.625rem;
    //margin: 1.625rem;
    justify-content: center;
    align-items: flex-start;
    padding: 1.25rem;

    ${theme.media.mobile`
    flex-wrap: wrap; /* 요소들이 줄어들 수 있도록 함 */
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
    ${theme.media.mobile`
    `}

`;

const StyledMissionText = styled.div`

    color: #27282B;
    font-size: 0.875rem; //14px;
    font-family: Pretendard-Regular;
    font-weight: 700;
    line-height: 1.3125rem; //21px;
    word-wrap: break-word;

    ${theme.media.mobile`

    justify-content: center;
    align-items: center;

    `}

`;