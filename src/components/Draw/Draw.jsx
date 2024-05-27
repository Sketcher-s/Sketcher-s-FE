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
import { Wrap, OutContainer, Icon, DrawingArea, CanvasContainer, ButtonContainer, Button } from './DrawStyle';
import { WStyledWrapper, BStyledWrapper} from './DrawStyle';
import { BarBox, StyledShape, StyledRectangle, BarContainer, DeskBtn, MobileBtn, StyledMissionContainer, StyledMissionTag, StyledMissionText, StyledContainer } from './Description';
import { Container } from './Description';
import { ReactComponent as RectangleH } from '../../assets/Draw/RectangleH.svg';
import {} from 'recoil';
//import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';
import { atom } from 'recoil';
import Ver3 from './Description';
// import { calculatedCanvasSizeState } from './atoms'
//import { canvasContentState } from './atoms';

// Recoil을 사용하여 캔버스의 내용을 상태로 관리
const canvasContentState = atom({
  key: 'canvasContentState',
  default: null,
});

function Draw() {  

  //상태관리
  const [canvasContent, setCanvasContent] = useRecoilState(canvasContentState);

  // Ref를 사용하여 Signaturecanvas 컴포넌트에 접근한다.
  const signatureCanvasRef = useRef(null);
  //그림 저장 상태
  const [savedSignatures, setSavedSignatures] = useState([]);
  const [canvasData, setCanvasData] = useState('');

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 저장된 그림 데이터를 복원한다.
    const savedData = localStorage.getItem('canvasData');
    if(savedData){
      setCanvasData(savedData);
      signatureRef.current.fromDataURL(savedData);
    }
}, []);

  useEffect(() => {
    //컴포넌트가 언마운트 되거나 창 크기가 변경 되기 전에 로컬 스토리지에 저장
    const saveCanvasData = () => {
      if(signatureRef.current){
        const dataUrl = signatureRef.current.toDataURL();
        localStorage.setItem('canvasData', dataUrl);
      }
    };

    window.addEventListener('beforeunload', saveCanvasData);
    window.addEventListener('resize', saveCanvasData);

    return () => {
      window.removeEventListener('beforeunload', saveCanvasData);
      window.removeEventListener('resize', saveCanvasData);
    };
  }, []);


  // 버튼 클릭했을 때 화면 이동
  const Navigate = useNavigate();


  //토글 구현
  const [isDescriptionVisible, setDescriptionVisible] = useState(false)


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

  const handleClick = (buttonName) => {
    setIsButtonClicked(buttonName === isButtonClicked ? null : buttonName); // 현재 클릭된 버튼이면 상태를 null로 변경하고 아니면 버튼 이름으로 변경
    if (buttonName === 'WTrash') {
      handleClear(); // 클릭 시 지우기 기능 호출
    } 
  };


    // //그림판 구현
    const signatureRef = useRef(null);
    const [canvasSize, setCanvasSize] = useState({ width: 250, height: 300 });
    const [color, setColor] = useState("black");


    
    //그림판 : 그림판의 크기가 화면에 따라 크기 조정되지만 크기 조정될때마다 그림이 날라가는 코드
    // useEffect(() => {
    //   const handleResize = () => {
    //     // 화면 크기에 따라 canvas 크기를 조정
    //     const screenWidth = window.innerWidth;
    //     const screenHeight = window.innerHeight;
    //     let newWidth, newHeight;

    //   if (screenWidth < screenHeight) {
    //     // 모바일 세로 화면일 때 (A4 세로 비율)
    //     newWidth = screenWidth * 0.7;
    //     newHeight = newWidth * 1.414;
    //   } else {
    //     // 데스크탑 가로 화면일 때 (A4 가로 비율)
    //     newWidth = screenWidth * 0.6;
    //     newHeight = newWidth / 1.414;

    //     // 높이가 화면을 초과할 경우, 높이 기준으로 너비를 계산
    //     if (newHeight > screenHeight * 0.7) {
    //       newHeight = screenHeight * 0.7;
    //       newWidth = newHeight * 1.414;
    //     }
    //   }

    //   setCanvasSize({ width: newWidth, height: newHeight });

    //     if (canvasContent && signatureCanvasRef.current) {
    //       const ctx = signatureCanvasRef.current.getContext('2d');
    //       const img = new Image();
    //       img.onload = function () {
    //         ctx.drawImage(img, 0, 0);
    //       };
    //       img.src = canvasContent;
    //     }
    //   };
      
  
    //   // 컴포넌트가 마운트될 때와 화면 크기가 변경될 때마다 크기를 업데이트
    //   handleResize();
    //   window.addEventListener('resize', handleResize);
    //   return () => window.removeEventListener('resize', handleResize);
    // }, [canvasContent]);



    //그림판 : 그림판의 크기가 고정되지만 그림은 날라가지 않는 코드(데스크탑규격과 모바일 규격 두개로 나눠서 작성)
    useEffect(() => {
      const handleResize = () => {
        if (signatureCanvasRef.current) {
          const ctx = signatureCanvasRef.current.getContext('2d');
          const tempCanvas = document.createElement('canvas');
          const tempCtx = tempCanvas.getContext('2d');
          tempCanvas.width = signatureCanvasRef.current.width;
          tempCanvas.height = signatureCanvasRef.current.height;
          tempCtx.drawImage(signatureCanvasRef.current, 0, 0);
  
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          let newWidth, newHeight;
  
          if (screenWidth < screenHeight) {
            newWidth = screenWidth * 0.5;
            newHeight = newWidth * 1;
          } else {
            newWidth = screenWidth * 0.5;
            newHeight = newWidth / 1;
            if (newHeight > screenHeight * 0.5) {
              newHeight = screenHeight * 0.5;
              newWidth = newHeight * 1;
            }
          }
  
          setCanvasSize({ width: newWidth, height: newHeight });
  
          signatureCanvasRef.current.width = newWidth;
          signatureCanvasRef.current.height = newHeight;
          ctx.drawImage(tempCanvas, 0, 0, newWidth, newHeight); // 새로운 크기로 이미지 데이터를 다시 그림
        }
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 창 크기에 따라 캔버스 크기 조정
    useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth < 768) { // 가정: 768px 미만은 모바일로 간주
        setCanvasSize({ width: 250, height: 300 });
      } else {
        setCanvasSize({ width: 750, height: 425 });
      }
    };
    checkSize(); // 컴포넌트 마운트 시 실행
    window.addEventListener('resize', checkSize); // 창 크기 변경 시 실행

    return () => window.removeEventListener('resize', checkSize); // 클린업
  }, []);


    //연동 후 그림 서버에 저장하고 loading, result page에 다시 불러오기
    const handleDoneClick = () => {
      // 화면 테스트를 위해 loading으로 화면 이동! 연동 후 삭제하기
      Navigate('/loading');
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

      <MobileBtn>
        {!isDescriptionVisible && (
        <Container>
          <StyledContainer>
            <StyledMissionContainer>
            <StyledMissionTag>Mission</StyledMissionTag>
            <StyledMissionText>집, 나무, 사람을 그려주세요!</StyledMissionText>
            </StyledMissionContainer>
          </StyledContainer>
          <BarContainer>
              <BarBox onClick={toggleDescription}>
                  <StyledShape>
                    <Shape/>
                  </StyledShape>
                  <StyledRectangle>
                    <RectangleH/>
                  </StyledRectangle>
                </BarBox>
            </BarContainer>
        </Container>
        )}
        {isDescriptionVisible && <Ver3 onClick={toggleBarBox} />}
      </MobileBtn>

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

            <CanvasContainer style={{ width: `${canvasSize.width}px`, height: `${canvasSize.height}px` }}>
            {/* <CanvasContainer> */}
            <SignatureCanvas
                ref={signatureRef}
                penColor={color}
                penSize={penSize} // penSize 상태를 전달
                canvasProps={{ width: canvasSize.width, height: canvasSize.height }}
                // 서명이 완료될때마다 저장된다.
                onEnd={() => {
                  // 자동으로 저장됩니다.
                  const dataURL = signatureRef.current.toDataURL();
                  setCanvasData(dataURL);
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

        {/* <DMobileContainer>
        <MDescription/>
      </DMobileContainer> */}

      </OutContainer>

      {/* <Description/> */}
      <DeskBtn>
        {!isDescriptionVisible && (
        <BarContainer>
          <BarBox onClick={toggleDescription}>
              <StyledShape>
                <Shape/>
              </StyledShape>
              <StyledRectangle>
                <Rectangle/>
              </StyledRectangle>
            </BarBox>
        </BarContainer>
        )}
        {isDescriptionVisible && <Ver3 onClick={toggleBarBox} />}
      </DeskBtn>

      


    </Wrap>

  );
}

export default Draw;