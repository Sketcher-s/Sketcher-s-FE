import React, { useRef, useState, useEffect} from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as WEraser } from '../../assets/Draw/WEraser.svg';
import { ReactComponent as WPencil } from '../../assets/Draw/WPencil.svg';
import { ReactComponent as WTrash } from '../../assets/Draw/WTrash.svg';
import { ReactComponent as BEraser } from '../../assets/Draw/BEraser.svg';
import { ReactComponent as BPencil } from '../../assets/Draw/BPencil.svg';
import { ReactComponent as BTrash } from '../../assets/Draw/BTrash.svg';
import { ReactComponent as Shape } from '../../assets/Draw/Shape.svg';
import { ReactComponent as Rectangle } from '../../assets/Draw/Rectangle.svg';
import MBar from './MBar';
import MDescription from './MDescription';
import Description from '../Draw/Description';
import { Wrap, OutContainer, Icon, DrawingArea, CanvasContainer, ButtonContainer, Button } from './DrawStyle';
import { WStyledWrapper, BStyledWrapper, BarBox, StyledShape, StyledRectangle, MobileContainer, DMobileContainer  } from './DrawStyle';
import {} from 'recoil';
//import { useRecoilValue } from 'recoil';
//import { useRecoilState } from 'recoil';
import { atom, useRecoilState } from 'recoil';

// Recoil을 사용하여 캔버스의 내용을 상태로 관리합니다.
const canvasContentState = atom({
  key: 'canvasContentState',
  default: null,
});

function Draw() {
  const [canvasContent, setCanvasContent] = useRecoilState(canvasContentState);

  // Ref를 사용하여 Signaturecanvas 컴포넌트에 접근한다.
  const signatureCanvasRef = useRef(null);
  //그림 저장 상태
  const [savedSignatures, setSavedSignatures] = useState([]);


  // 버튼 클릭했을 때 화면 이동
  const Navigate = useNavigate();

  // function handleDoneClick() {
  //   Navigate('/loading');
  // }

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

  const handleClear = () => {
    if (signatureRef.current) { // null 체크 추가
      signatureRef.current.clear();
    }
  };
  
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  // 펜의 최소 두께와 최대 두께
  const minPenSize = 1;
  const maxPenSize = 1000;

  // 펜 사이즈 상태
  const [penSize, setPenSize] = useState({ minWidth: minPenSize, maxWidth: maxPenSize });

  const changePenSize = (maxPenSize) => {
    setPenSize(maxPenSize);
  };

  // const changePenSize = () => {
  //   if (signatureCanvasRef.current) {
  //     signatureCanvasRef.current.penSize = { // 펜의 최소 두께와 최대 두께 설정
  //       minWidth: minPenSize,
  //       maxWidth: maxPenSize,
  //     };
  //   }
  // };

  const handleClick = (buttonName) => {
    setIsButtonClicked(buttonName === isButtonClicked ? null : buttonName); // 현재 클릭된 버튼이면 상태를 null로 변경하고 아니면 버튼 이름으로 변경
    if (buttonName === 'WTrash') {
      handleClear(); // 클릭 시 지우기 기능 호출
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

        if (canvasContent && signatureCanvasRef.current) {
          const ctx = signatureCanvasRef.current.getContext('2d');
          const img = new Image();
          img.onload = function () {
            ctx.drawImage(img, 0, 0);
          };
          img.src = canvasContent;
        }
      };
  
      // 컴포넌트가 마운트될 때와 화면 크기가 변경될 때마다 크기를 업데이트
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [canvasContent]);

    //연동 후 그림 서버에 저장하고 loading, result page에 다시 불러오기
    const handleDoneClick = () => {
      if (signatureCanvasRef.current) {
        const dataURL = signatureCanvasRef.current.toDataURL("image/png");
        setSavedSignatures(prevSignatures => [...prevSignatures, dataURL]);
        Navigate('/loading', { state: { imageData: dataURL } });
      }
    };

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
          <WPencil onClick={() => {handleClick('WPencil'); handleColorChange('black'); changePenSize(minPenSize);}} />
        </WStyledWrapper>
      ) : (
        <BStyledWrapper>
          <BPencil onClick={() => handleClick('WPencil')} />
        </BStyledWrapper>
      )}

      {/* BEraser 버튼 */}
      {isButtonClicked !== 'WEraser' ? (
        <WStyledWrapper>
          <WEraser onClick={() => {handleClick('WEraser'); handleColorChange('white'); changePenSize(maxPenSize);}} />
        </WStyledWrapper>
      ) : (
        <BStyledWrapper>
          <BEraser onClick={() => handleClick('WEraser')} />
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

        </Icon>

            <CanvasContainer>
            <SignatureCanvas
                ref={signatureRef}
                penColor={color}
                penSize={penSize} // penSize 상태를 전달
                canvasProps={{ width: canvasSize.width, height: canvasSize.height }}
                // 서명이 완료될때마다 저장된다.
                onEnd={() => {
                  // 자동으로 저장됩니다.
                  const dataURL = signatureRef.current.toDataURL();
                  setSavedSignatures([...savedSignatures, dataURL])
                }}
                onMouseDown={() => {
                  if (canvasContent) {
                    const ctx = signatureCanvasRef.current.getContext('2d');
                    const img = new Image();
                    img.onload = function () {
                      ctx.drawImage(img, 0, 0);
                    };
                    img.src = canvasContent;
                  }
                }}
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