import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Shape } from '../../assets/Draw/Shape.svg';
import { ReactComponent as Rectangle } from '../../assets/Draw/Rectangle.svg';
import { theme } from '../../theme';

const Bar = () => {

  return (

    <BarBox>
        <StyledShape>
            <Shape/>
        </StyledShape>

        <StyledRectangle>
            <Rectangle/>
        </StyledRectangle>
    </BarBox>

  );
}

export default Bar;

const BarBox = styled.div`
  background: #f3f3f6;
  width: 1.25rem; //20px;
  height: 4.375rem; //70px;
  position: relative;
  top: 50%; /* 상단 위치를 중앙으로 조정 */
  transform: translateY(-50%); /* 세로 중앙 정렬을 위한 변환 */
  right: 0; /* 오른쪽 정렬 */
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */

  ${theme.media.mobile`
  `}
`;

const StyledShape = styled.div`
position: absolute;
z-index: 2;
`;

const StyledRectangle = styled.div`
position: relative;
z-index: 1;
`;
