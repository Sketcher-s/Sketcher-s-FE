import React, { useRef, useState, useEffect} from 'react';
import SignatureCanvas from 'react-signature-canvas';
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
import { ReactComponent as Shape } from '../../assets/Draw/Shape.svg';
import { ReactComponent as Rectangle } from '../../assets/Draw/Rectangle.svg';
import MBar from './MBar';
import MDescription from './MDescription';
import Description from '../Draw/Description';
import { Wrap, OutContainer, Icon, DrawingArea, CanvasContainer, ButtonContainer, Button } from './DrawStyle';
import { WStyledWrapper, BStyledWrapper, BarBox, StyledShape, StyledRectangle, MobileContainer, DMobileContainer  } from './DrawStyle';




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

  // 펜의 최소 두께와 최대 두께
  const minPenSize = 0.5;
  const maxPenSize = 20;
  
  // 펜의 최소 두께와 최대 두께를 설정하는 함수
  const changePenSize = () => {
    signatureCanvasRef.current.penSize = { // 펜의 최소 두께와 최대 두께 설정
      minWidth: minPenSize,
      maxWidth: maxPenSize,
  };
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

    //화면 크기가 변경될때마다 상태관리 필요 -> 연동후 예정

  return (
    <Wrap>
      <OutContainer>

          <MobileContainer>
          <MBar/>
          </MobileContainer>

          <DrawingArea>

        <Icon>

        {/* WPencil 버튼 */}
      {isButtonClicked !== 'WPencil' ? (
        <WStyledWrapper>
          <WPencil onClick={() => {handleClick('WPencil'); handleColorChange('black');}} />
        </WStyledWrapper>
      ) : (
        <BStyledWrapper>
          <BPencil onClick={() => handleClick('WPencil')} />
        </BStyledWrapper>
      )}


      {/* BEraser 버튼 */}
      {isButtonClicked !== 'WEraser' ? (
        <WStyledWrapper>
          <WEraser onClick={() => {handleClick('WEraser'); handleColorChange('white');}} />
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
                PenSize={maxPenSize}
                canvasProps={{ width: canvasSize.width, height: canvasSize.height }}
            />
            </CanvasContainer>

        </DrawingArea>

        <ButtonContainer onClick={handleDoneClick}>
          <Button>완료</Button>
        </ButtonContainer>

        <DMobileContainer>
        <MDescription/>
      </DMobileContainer>

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




