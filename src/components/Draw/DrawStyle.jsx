import styled from 'styled-components';
import { theme } from '../../theme';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between; /* 컨테이너 사이의 여백을 최대로 확보하여 내부 요소를 양쪽으로 분산 배치 */

`;

export const OutContainer = styled.div`
  width: 100%;
  //height: 100%;
  padding-top: 2.5rem; //40px;
  padding-bottom: 2.5rem; //40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.875rem; // 30px;
  display: inline-flex;
  background: #f3f3f6;
  border-radius: 10px;
  overflow: hidden;
  
  ${theme.media.mobile`
  padding-top: 1rem;
  `}
`;

export const Icon = styled.div`
  left: 13.1875rem; //211px;
  top: 7.25rem; //116px;
  display: flex;
  flex-direction: column;

  ${theme.media.mobile`
  flex-direction: row;
  margin-top: 1.25rem;
`}

`;


export const DrawingArea = styled.div`
  left: 13.1875rem; //211px;
  top: 7.25rem; //116px;
  display: flex;
  flex-direction: row;

  ${theme.media.mobile`
  flex-direction: column-reverse;
  display: flex;
`}
`;


export const CanvasContainer = styled.div`
  width: ${({ canvasWidth }) => canvasWidth}px;
  height: ${({ canvasHeight }) => canvasHeight}px;
  //width: 100%; /* 너비를 부모 요소에 맞게 설정 */
  //height: 60vh; /* 높이를 화면 높이의 60%로 설정 */
  background: white;
  box-shadow: 0.3125rem 0.3125rem 0.625rem rgba(0, 0, 0, 0.04);

  ${theme.media.mobile`

`}

`;

export const ButtonContainer = styled.div`
  width: 10rem; //160px;
  height: 2.75rem; //44px; 
  padding-left: 1.25rem; //20px;
  padding-right: 1.25rem; //20px;
  background: #6487E2;
  border-radius: 0.25rem; //4px;
  justify-content: center;
  align-items: center;
  display: inline-flex;

  ${theme.media.mobile`
  `}
`;

export const Button = styled.div`
  width: 7.5rem; //120px;
  text-align: center;
  color: white;
  font-size: 1rem; //16px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 1.5rem; //24px
  word-wrap: break-word;

  ${theme.media.mobile`

  display: flex;
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 중앙 정렬 */
  width: 100%; /* 화면 너비에 맞게 설정 */
  margin-left: 1.625rem;
  margin-right: 1.625rem;
  `}
`;



// 스타일 컴포넌트 정의
export const WStyledWrapper = styled.div`
  width: 1.25rem; //20px;
  height: 1.25rem; //20px;
  padding: 0.625rem; //10px;
  background: white;
  box-shadow: 0rem 0.25rem 0.25rem rgba(39, 40, 43, 0.10);
  border-radius:18.75rem; //300px;
  justify-content: center;
  align-items: center;
  gap: 0.625rem; //10px;
  display: inline-flex;
  margin-right: 1.25rem; //20px;
  margin-bottom: 1rem; //16px;

  ${theme.media.mobile`
  `}
`;

export const BStyledWrapper = styled.div`
  width: 1.25rem; //20px;
  height: 1.25rem; //20px;
  padding: 0.625rem; //10px;
  background: #6487E2;
  box-shadow: 0rem 0.25rem 0.25rem rgba(39, 40, 43, 0.10);
  border-radius:18.75rem; //300px;
  justify-content: center;
  align-items: center;
  gap: 0.625rem; //10px;
  display: inline-flex;
  margin-right: 1.25rem; //20px;
  margin-bottom: 1rem; //16px;

  ${theme.media.mobile`
  `}
`;

export const BarBox = styled.div`
  width: 1.25rem; //20px;
  height: 4.375rem; //70px;
  position: absolute;
  top: 50%; /* 상단 위치를 중앙으로 조정 */
  transform: translateY(-50%); /* 세로 중앙 정렬을 위한 변환 */
  right: 0; /* 오른쪽 정렬 */
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  boarder-radius: none;
  
  display: flex;

  ${theme.media.mobile`

    display: none;
  `}

`;

export const StyledShape = styled.div`
position: absolute;
z-index: 2;
`;

export const StyledRectangle = styled.div`
position: relative;
z-index: 1;
`;

export const MobileContainer = styled.div`

  display: none;  

  ${theme.media.mobile`
    display: flex;
    justify-content: center; /* 중앙 정렬 */
    align-items: center; /* 중앙 정렬 */
    width: 100%; /* 화면 너비에 맞게 설정 */
    margin-left: 1.625rem;
    margin-right: 1.625rem;
  `}

`;


export const DMobileContainer = styled.div`

display: none;  

${theme.media.mobile`
display: flex;
justify-content: center; /* 중앙 정렬 */
align-items: center; /* 중앙 정렬 */
width: 100%; /* 화면 너비에 맞게 설정 */
margin-left: 1.625rem;
margin-right: 1.625rem;

`}

`;