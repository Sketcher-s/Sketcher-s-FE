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
      signatureCanvasRef.current.fromDataURL(savedData);
    }
}, []);

  useEffect(() => {
    //컴포넌트가 언마운트 되거나 창 크기가 변경 되기 전에 로컬 스토리지에 저장
    const saveCanvasData = () => {
      if(signatureCanvasRef.current){
        const dataUrl = signatureCanvasRef.current.toDataURL();
        localStorage.setItem('canvasData', dataUrl);
        console.log('Saved image to localStorage:', dataUrl); // 로그 추가
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
  //const Navigate = useNavigate();


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
    if (signatureCanvasRef.current) { // null 체크 추가
      signatureCanvasRef.current.clear();
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

    // ref가 잘 작동되는지 콘솔을 찍어봄
    useEffect(() => {
    if (signatureCanvasRef.current) {
      console.log("Ref is set", signatureCanvasRef.current);
      try {
        const ctx = signatureCanvasRef.current.getContext('2d');
        console.log("Context is accessible");
      } catch (error) {
        console.error("Failed to get context", error);
      }
    } else {
      console.error("Ref is not set");
    }
  }, []);


    useEffect(() => {
      const handleResize = () => {
        if (signatureCanvasRef.current) {
          const canvasElement = signatureCanvasRef.current.getCanvas(); // 실제 canvas 요소를 가져옵니다.
          const ctx = canvasElement.getContext('2d'); // 이제 getContext를 호출할 수 있습니다.
    
          // 임시 캔버스를 생성하고, 기존 캔버스의 내용을 임시 캔버스에 복사합니다.
          const tempCanvas = document.createElement('canvas');
          const tempCtx = tempCanvas.getContext('2d');
          tempCanvas.width = canvasElement.width;
          tempCanvas.height = canvasElement.height;
          tempCtx.drawImage(canvasElement, 0, 0); // 기존 캔버스의 내용을 임시 캔버스에 복사
    
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
    
          canvasElement.width = newWidth; // 캔버스 크기를 재설정
          canvasElement.height = newHeight;
          ctx.drawImage(tempCanvas, 0, 0, newWidth, newHeight); // 임시 캔버스의 내용을 새 크기의 캔버스에 그립니다.
        }
      };
    
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);


  useEffect(() => {
    const checkSize = () => {
      let width, height;
      if (window.innerWidth < 768) { // 가정: 768px 미만은 모바일로 간주
        width = 250;
        height = 300;
      } else {
        width = 750;
        height = 425;
      }
      setCanvasSize({ width, height });
    };
    checkSize(); // 컴포넌트 마운트 시 실행
    window.addEventListener('resize', checkSize); // 창 크기 변경 시 실행

    return () => window.removeEventListener('resize', checkSize); // 클린업
}, []);




  // const sigCanvasRef = useRef(null);
  //const sigCanvasRef = useRef(null);
  //const [imageURL, setImageURL] = useState('');
  const navigate = useNavigate();

  // useEffect를 사용하여 컴포넌트가 마운트될 때 토큰을 가져옵니다.
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    setjwtToken(token);
  }, []);

  const [jwtToken, setjwtToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  // dataURI를 Blob으로 변환하는 함수
  function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }


  // 이미지 데이터를 서버로 전송하는 함수
  const uploadImageToServer = async (imageData) => {
    console.log(" 이미지를 서버로 전송 "); // 로그 시작

    if (!jwtToken) {
        console.error("로그인 인증 안됨");
        return;
    }

    //FormData 객체 생성
    const formData = new FormData();
    const blob = dataURItoBlob(imageData); // Base64 데이터를 Blob으로 변환
    formData.append('file', blob, 'image.png'); // 여기서 'file'로 변경

      
    // setIsLoading(true);

    // 로그 추가: 요청 전송 직전
    console.log('Sending POST request to server with form data:');


    try {
      const response = await fetch('https://dev.catchmind.shop/api/picture', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
          // 추가적으로 인증 헤더를 포함할 수 있습니다.
        },
        // body: JSON.stringify({ image: imageData })
        body: formData // JSON.stringify를 사용하지 않고 FormData를 직접 전송
      });

      //   // 응답 확인
      //   if (response.ok) {
      //     const data = await response.json();
      //     console.log('File uploaded successfully:', data);
      //      // 파일 업로드 성공 후 result 페이지로 이동
      //      navigate('/result', { state: { response: data } });
      //   } else {
      //     console.error('File upload failed', await response.text());
      //   }
      // } catch (error) {
      //   console.error('Error uploading file:', error.response.status, error.response.statusText);
      // } finally {
      //   setIsLoading(false); // 업로드 완료 시 로딩 상태 비활성화
      // }



    // 응답 확인
    if (response.ok) {
      const data = await response.json();
      console.log('File uploaded successfully:', data);
      
       // 파일 업로드 성공 후 result 페이지로 이동
       navigate('/result', { state: { response: data } });
    } else {
      console.error('File upload failed', await response.text());
    }
  } catch (error) {
    console.error('Error uploading file:', error.response.status, error.response.statusText);
  } finally {
    setIsLoading(false); // 업로드 완료 시 로딩 상태 비활성화
  }

    };


  // 완료 버튼 클릭 이벤트 핸들러
  const handleDoneClick = () => {
    console.log('완료 버튼 클릭'); // 로그 찍기
    if (signatureCanvasRef.current) {
      const imageDataURL = signatureCanvasRef.current.toDataURL('image/png');
      console.log("Image data URL generated:", imageDataURL); // 데이터 URL 생성 로그
      localStorage.setItem('savedCanvasImage', imageDataURL); // 로컬 스토리지 저장 로그
       uploadImageToServer(imageDataURL); // 서버 전송 호출 로그
      //await uploadImageToServer(imageDataURL); // 서버 전송 호출
    } else {
      console.error("No signatureCanvasRef available."); // 참조 에러 로그
    }
  };

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
                ref={signatureCanvasRef}
                penColor={color}
                penSize={penSize} // penSize 상태를 전달
                canvasProps={{ width: canvasSize.width, height: canvasSize.height }}
                // 서명이 완료될때마다 저장된다.
                onEnd={() => {
                  // 자동으로 저장됩니다.
                  const dataURL = signatureCanvasRef.current.toDataURL();
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