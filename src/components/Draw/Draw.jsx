import React, { useRef, useState, useEffect} from 'react';
import SignatureCanvas from 'react-signature-canvas';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as WEraser } from '../../assets/Draw/WEraser.svg';
import { ReactComponent as WGoback } from '../../assets/Draw/WGoback.svg';
import { ReactComponent as WPencil } from '../../assets/Draw/WPencil.svg';
import { ReactComponent as WTrash } from '../../assets/Draw/WTrash.svg';
import { ReactComponent as WAll } from '../../assets/Draw/WAll.svg';
import { ReactComponent as BEraser } from '../../assets/Draw/BEraser.svg';
import { ReactComponent as BGoback } from '../../assets/Draw/BGoback.svg';
import { ReactComponent as BPencil } from '../../assets/Draw/BPencil.svg';
import { ReactComponent as BTrash } from '../../assets/Draw/BTrash.svg';
import { ReactComponent as BAll } from '../../assets/Draw/BAll.svg';
import Description from '../Draw/Description';
import { ReactComponent as Shape } from '../../assets/Draw/Shape.svg';
import { ReactComponent as Rectangle } from '../../assets/Draw/Rectangle.svg';
import { theme } from '../../theme';
import { useRecoilValue } from 'recoil';
//import { calculatedCanvasSizeState } from './atoms';




function Draw() {
  //const [calculatedCanvasSize, setCalculatedCanvasSize] = useState({ width: 0, height: 0 });
  //const calculatedCanvasSize = useRecoilValue(calculatedCanvasSizeState);

  // Ref를 사용하여 Signaturecanvas 컴포넌트에 접근한다.
  const signatureCanvasRef = useRef();

  // 버튼 클릭했을 때 화면 이동
  const Navigate = useNavigate();
  function handleDoneClick() {
    Navigate('/loading');
  }

  //Todo// 완료 버튼 클릭시 그림 저장 및 화면 이동 :아직 미구현
  const handleButtonClick = () => {
    saveSignature();
    handleDoneClick();
  };

  // Todo//그림 저장 함수 : 아직 미구현
  function saveSignature() {
    // toDataURL() 메서드를 사용하여 그림을 이미지로 변환
    const imageDataUrl = signatureCanvasRef.current.toDataURL();
    console.log(imageDataUrl); // 이미지 데이터 출력
  }

  //토글 구현
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  //Description <-> Bar 토글 버튼 클릭 시 상태 변경
  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  // BarBox 클릭 시 Description 토글
  const toggleBarBox = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  //각 버튼 클릭시 버튼 변경
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  // 버튼 클릭 시 상태 변경 함수
  // const handleClick = () => {
  //   setIsButtonClicked(!isButtonClicked); // 현재 버튼 상태를 반전
  // };
  const handleUndo = () => {
    if (signatureRef.current) { // null 체크 추가
      signatureRef.current.undo();
    }
  };

  const handleClear = () => {
    if (signatureRef.current) { // null 체크 추가
      signatureRef.current.clear();
    }
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleClick = (buttonName) => {
    setIsButtonClicked(buttonName === isButtonClicked ? null : buttonName); // 현재 클릭된 버튼이면 상태를 null로 변경하고 아니면 버튼 이름으로 변경
    if (buttonName === 'WTrash') {
      handleClear(); // 클릭 시 지우기 기능 호출
    } else if (buttonName === 'WGoback' && signatureRef.current) {
      handleUndo(); // 클릭 시 지우기 기능 호출
    }
  };

    //그림판 구현
    const signatureRef = useRef(null);
    const [canvasSize, setCanvasSize] = useState({ width: '21.125rem', height: '21.125rem' });
    const [color, setColor] = useState("black");
  
    useEffect(() => {
      const handleResize = () => {
        // 화면 크기에 따라 canvas 크기를 조정
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const newSize = Math.min(screenWidth, screenHeight) * 0.657; // 캔버스 크기를 화면의 80%로 설정
  
        setCanvasSize({ width: newSize, height: newSize });
      };
  
      // 컴포넌트가 마운트될 때와 화면 크기가 변경될 때마다 크기를 업데이트
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    //화면 크기가 변경될때마다 상태관리 recoil로 구현
  

  

  return (
    <Wrap>
      <OutContainer>

          <DrawingArea>

        <Icon>

        {/* WPencil 버튼 */}
      {isButtonClicked !== 'WPencil' ? (
        <WStyledWrapper>
          <WPencil onClick={() => handleClick('WPencil')} />
        </WStyledWrapper>
      ) : (
        <BStyledWrapper>
          <BPencil onClick={() => handleClick('WPencil')} />
        </BStyledWrapper>
      )}


      {/* BEraser 버튼 */}
      {isButtonClicked !== 'WEraser' ? (
        <WStyledWrapper>
          <WEraser onClick={() => {handleClick('WEraser'); handleColorChange('white'); }} />
        </WStyledWrapper>
      ) : (
        <BStyledWrapper>
          <BEraser onClick={() => handleClick('WEraser')} />
        </BStyledWrapper>
      )}

      {/* BGoback 버튼 */}
      {isButtonClicked !== 'WGoback' ? (
        <WStyledWrapper>
          <WGoback onClick={() => handleClick('WGoback')} />
        </WStyledWrapper>
      ) : (
        <BStyledWrapper>
          <BGoback onClick={() => handleClick('WGoback')} />
        </BStyledWrapper>
      )}

      {/* BTrash 버튼 */}
      {isButtonClicked !== 'WTrash' ? (
        <WStyledWrapper>
          <WTrash onClick={() => handleClick('WTrash')} />
        </WStyledWrapper>
      ) : (
        <BStyledWrapper>
          <BTrash onClick={() => handleClick('WTrash')} />
        </BStyledWrapper>
      )}


      {/* BAll 버튼 */}
      {isButtonClicked !== 'WAll' ? (
        <WStyledWrapper>
          <WAll onClick={() => handleClick("WAll")} />
        </WStyledWrapper>
      ) : (
        <BStyledWrapper>
          <BAll onClick={() => handleClick('WAll')} />
        </BStyledWrapper>
      )}

        </Icon>

            <CanvasContainer>
            <SignatureCanvas
                ref={signatureRef}
                penColor={color}
                canvasProps={{ width: canvasSize.width, height: canvasSize.height }}
            />
            </CanvasContainer>

        </DrawingArea>

        <ButtonContainer onClick={handleDoneClick}>
          <Button>완료</Button>
        </ButtonContainer>

      </OutContainer>

      {/* <Description/> */}
      {!isDescriptionVisible && (
      <BarBox onClick={toggleDescription}>
          <StyledShape>
            <Shape/>
          </StyledShape>

          <StyledRectangle>
            <Rectangle/>
          </StyledRectangle>
        </BarBox>
      )}

{isDescriptionVisible && <Description onClick={toggleBarBox} />}



    </Wrap>

  );
}

export default Draw;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between; /* 컨테이너 사이의 여백을 최대로 확보하여 내부 요소를 양쪽으로 분산 배치 */
`;

const OutContainer = styled.div`
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
  `}
`;

const Icon = styled.div`
  left: 13.1875rem; //211px;
  top: 7.25rem; //116px;
  display: flex;
  flex-direction: column;

  ${theme.media.mobile`
  flex-direction: row;
  margin-top: 1.25rem;
`}

`;


const DrawingArea = styled.div`
  left: 13.1875rem; //211px;
  top: 7.25rem; //116px;
  display: flex;
  flex-direction: row;

  ${theme.media.mobile`
  flex-direction: column-reverse;
  display: flex;
`}
`;


const CanvasContainer = styled.div`
  // width: 30.125rem;
  // height: 30.125rem;
  width: ${({ canvasWidth }) => canvasWidth}px;
  height: ${({ canvasHeight }) => canvasHeight}px;
  //width: 100%; /* 너비를 부모 요소에 맞게 설정 */
  //height: 60vh; /* 높이를 화면 높이의 60%로 설정 */
  background: white;
  box-shadow: 0.3125rem 0.3125rem 0.625rem rgba(0, 0, 0, 0.04);

  ${theme.media.mobile`
  // width: 21.125rem;
  // height: 21.125rem;
`}

`;

const ButtonContainer = styled.div`
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

const Button = styled.div`
  width: 7.5rem; //120px;
  text-align: center;
  color: white;
  font-size: 1rem; //16px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 1.5rem; //24px
  word-wrap: break-word;

  ${theme.media.mobile`
  `}
`;



// 스타일 컴포넌트 정의
const WStyledWrapper = styled.div`
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

const BStyledWrapper = styled.div`
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

const BarBox = styled.div`
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

  position: fixed;
  top: 12.5%; /* 화면 위쪽 가운데로 */
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto; /* 필요에 따라 너비 조정 */
  height: auto; /* 필요에 따라 높이 조정 */
  transform: translate(-50%, -50%) rotate(-90deg); /* 왼쪽으로 회전 */

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
