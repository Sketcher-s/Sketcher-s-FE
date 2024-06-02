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
import { atom } from 'recoil';
import Ver3 from './Description';
import Loading from '../Draw/Loading';
import Modal from '../Modal';
import { useRecoilState } from 'recoil';
import { LoginState } from '../../recoil/recoilState';

// Recoil을 사용하여 캔버스의 내용을 상태로 관리
const canvasContentState = atom({
  key: 'canvasContentState',
  default: null,
});

// default 값이 type 이 default
WPencil.defaultProps = {
  type: "default",
};


function Draw() {  

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleModalOpen = (message) => {
    setModalMessage(message);  // 모달에 표시할 메시지 설정
    setModalOpen(true);   // 모달을 열기
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalMessage('');
    Navigate('/result'); // 모달을 닫고 결과 페이지로 이동
  }

  // const [modalOpen, setModalOpen] = useState(false); // 모달의 열림/닫힘 상태를 관리합니다.
 
  // const handleModalOpen = () => {
  //   setModalOpen(true); // 모달을 열기 위해 상태를 변경하는 함수
  // };

  // const handleModalClose = () => {
  //   setModalOpen(false);
  //   Navigate('/result'); //결과페이지로 이동
  // }

  // 버튼 클릭했을 때 화면 이동
  const Navigate = useNavigate();

  // 로그인 상태
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  if(!isLoggedIn){
    Navigate('/');
  }

  useEffect(() => {
    // 페이지 컴포넌트가 마운트되면 body 태그에 클래스를 추가
    document.body.classList.add('draw-page-style');

    // 컴포넌트 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove('draw-page-style');
    };
  }, []);

  // Ref를 사용하여 Signaturecanvas 컴포넌트에 접근한다.
  const signatureCanvasRef = useRef(null);
  //그림 저장 상태
  const [savedSignatures, setSavedSignatures] = useState([]);
  const [canvasData, setCanvasData] = useState('');

  // 흰색 배경
  useEffect(() => {
    // 캔버스 배경을 흰색으로 설정
    const canvas = signatureCanvasRef.current.getCanvas();
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF'; // 흰색 배경 설정
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 이 후의 그림 그리기는 흰색 배경 위에 수행
  }, []);


useEffect(() => {
  const savedData = localStorage.getItem('canvasData');
  if (savedData) {
    setCanvasData(savedData);
    const img = new Image();
    img.onload = () => {
      const canvas = signatureCanvasRef.current.getCanvas();
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // 이미지를 캔버스 크기에 맞게 그립니다.
    };
    img.src = savedData;
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

   // window.addEventListener('beforeunload', saveCanvasData);
    window.addEventListener('resize', saveCanvasData);

    return () => {
     // window.removeEventListener('beforeunload', saveCanvasData);
      window.removeEventListener('resize', saveCanvasData);
    };
  }, []);

  


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

    //서버에 전송후 토큰 삭제
    const handleClear = () => {
      if (signatureCanvasRef.current) { // null 체크 추가
        signatureCanvasRef.current.clear();
      }
    };

  //서버에 전송후 토큰 삭제
  // const handleTokenClear = () => {
  //   if (signatureCanvasRef.current) { // null 체크 추가
  //     signatureCanvasRef.current.clear();

  //     //이부분 추가
  //     localStorage.removeItem('canvasData');
  //     console.log('Canvas cleared and data removed from localStorage');
  //     setCanvasData(null);
  //     setSavedSignatures([]);
  //   }
  // };

  
  
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  // 그림판 초기화: 펜 색상과 크기를 설정
  useEffect(() => {
    if (signatureCanvasRef.current) {
      console.log('Default pencil is set');
      setColor('black'); // 펜 색상을 검정색으로 설정
      setPenSize(1); // 펜 크기를 1로 설정
      // 이후 필요한 추가 초기화 작업을 수행할 수 있습니다.
    }
  }, []);


  useEffect(() => {
    handleClick('WPencil'); // 컴포넌트 마운트 시 연필 도구 활성화
  }, []);

  // 펜의 최소 두께와 최대 두께
  const minPenSize = 1;
  const maxPenSize = 10;

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
    const [canvasSize, setCanvasSize] = useState({ width: 400, height: 300 });
    const [color, setColor] = useState("black");

    // ref가 잘 작동되는지 콘솔을 찍어봄
    useEffect(() => {
    if (signatureCanvasRef.current) {
      console.log("Ref is set", signatureCanvasRef.current);
      try {
        // const ctx = signatureCanvasRef.current.getContext('2d');
        console.log("Context is accessible");
      } catch (error) {
        console.error("Failed to get context", error);
      }
    } else {
      console.error("Ref is not set");
    }
  }, []);


  //캔버스를 벗어날때 캔버스 초기화
  useEffect(() => {
    const clearCanvas = () => {
      if (signatureCanvasRef.current) {
        signatureCanvasRef.current.clear();
      }
    };
  
    const handleBeforeUnload = () => {
      clearCanvas();
      localStorage.removeItem('canvasData'); // 페이지를 벗어나면 로컬 스토리지에서 캔버스 데이터를 제거합니다.
    };
  
    window.addEventListener('beforeunload', handleBeforeUnload);
  
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
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


  // 기존 캔버스의 이미지 데이터를 임시 변수에 저장
  const tempImage = new Image();
  tempImage.src = canvasElement.toDataURL(); // 이미지 데이터 URL 생성


      if (screenWidth < 768) {
        newWidth = 310;
        newHeight = 310;
      } else if(768 <= screenWidth && screenWidth < 1500){
        newWidth = 570;
        newHeight = 400;
      }else {
        newWidth = 1000;
        newHeight = 550;
        if (newHeight > screenHeight * 0.6) {
          newHeight = screenHeight * 0.6;
          newWidth = newHeight * 1;
        }
      }


      // // 기존 캔버스의 비율을 유지하면서 크기를 변경합니다.
      // const scaleWidth = newWidth / tempCanvas.width;
      // const scaleHeight = newHeight / tempCanvas.height;
      // const scale = Math.min(scaleWidth, scaleHeight);

      // canvasElement.width = tempCanvas.width * scale;
      // canvasElement.height = tempCanvas.height * scale;
      // ctx.drawImage(tempCanvas, 0, 0, canvasElement.width, canvasElement.height); // 임시 캔버스의 내용을 새 크기의 캔버스에 그립니다.


    // 기존 캔버스의 이미지를 새로운 크기의 캔버스에 그리기
    tempImage.onload = () => {
      ctx.drawImage(tempImage, 0, 0, newWidth, newHeight); // 새로운 크기의 캔버스에 이미지 그리기
    };
    }


    // 그림 저장
    if (signatureCanvasRef.current) {
      const dataURL = signatureCanvasRef.current.toDataURL();
      setCanvasData(dataURL);
      setSavedSignatures([...savedSignatures, dataURL]);
      localStorage.setItem('canvasData', dataURL); // 로컬 스토리지에 저장
    }

  };

  // 크기 변경 이벤트 리스너 등록
  window.addEventListener('resize', handleResize);


  const checkSize = () => {
    let width, height;
  //   if (window.innerWidth < 768) { // 가정: 768px 미만은 모바일로 간주
  //     width = 300;
  //     height = 250;
  //   } else {
  //     width = 630;
  //     height = 470;
  //   }
  //   setCanvasSize({ width, height });
  // };

  if (window.innerWidth < 768) { // 가정: 768px 미만은 모바일로 간주
    width = 310;
    height = 310;
  } else if(768 <= window.innerWidth && window.innerWidth < 1500){
    width = 570;
    height = 400;
  }else {
    width = 1000;
    height = 550;
  }
  setCanvasSize({ width, height });
};

  handleResize(); // 초기 캔버스 크기 조정
  checkSize(); // 컴포넌트 마운트 시 실행

  window.addEventListener('resize', handleResize); // 창 크기 변경 시 실행
  window.addEventListener('resize', checkSize); // 창 크기 변경 시 실행

  return () => {
    window.removeEventListener('resize', handleResize); // 클린업
    window.removeEventListener('resize', checkSize); // 클린업
  };
}, []);


  // useEffect를 사용하여 컴포넌트가 마운트될 때 토큰을 가져옵니다.
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    setjwtToken(token);
  }, []);

  const [jwtToken, setjwtToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    // 컴포넌트가 언마운트될 때 로컬 스토리지에 저장
    const saveCanvasData = () => {
      if (signatureCanvasRef.current) {
        const dataUrl = signatureCanvasRef.current.toDataURL();
        localStorage.setItem('canvasData', dataUrl);
        console.log('Saved image to localStorage:', dataUrl);
      }
    };

    window.addEventListener('beforeunload', saveCanvasData);
    window.addEventListener('resize', saveCanvasData);
    return () => {
      window.removeEventListener('beforeunload', saveCanvasData);
      window.removeEventListener('resize', saveCanvasData);
    };
  }, []);

  // 데이터 url blob로 변화하기
  const dataURLtoBlob = (dataURL) => {
    const byteString = atob(dataURL.split(',')[1]);
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

 // 이미지 데이터를 서버로 전송하는 함수
const uploadImageToServer = async () => {

  const token = localStorage.getItem('jwtToken');
  if (!token) {
    console.error("JWT token not found in local storage");
    return;
  }

  console.log('JWT token found:', token);

  const imageData = signatureCanvasRef.current.toDataURL('image/png'); // 이미지를 PNG 형식으로 변환
  console.log('Image data URL:', imageData);

  const blob = dataURLtoBlob(imageData);

  const formData = new FormData();
  formData.append('file', blob, 'image.png'); // Blob을 파일로 처리하여 추가

  // 로그 추가: 요청 전송 직전
  console.log('Sending POST request to server with form data:');
  for (let pair of formData.entries()) {
    console.log(pair[0], pair[1]);
  }


  setIsLoading(true);

  try {

    const response = await fetch('https://dev.catchmind.shop/api/picture', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }
   
    // 응답이 비어 있는지 확인
    const text = await response.text();
    if (!text) {
      console.error("응답이 비어 있습니다");
      throw new Error("응답이 비어 있습니다");
    }

    // JSON 데이터가 있는지 안전하게 확인
    let data;
    try {
      data = JSON.parse(text);
    } catch (error) {
      console.error("응답 데이터가 JSON 형식이 아닙니다:", text);
      throw new Error("응답 데이터가 JSON 형식이 아닙니다");
    }

    console.log('파일 업로드 성공:', data);
    Navigate('/result', { state: { response: data } }); // 업로드 완료 후 결과 페이지로 이동

    //흔적 남아있는 부분 지우기
    handleClear(); // 서버로 파일이 성공적으로 업로드된 후 캔버스를 클리어합니다.

  } catch (error) {
    console.error('파일 업로드 실패:', error.message);
    console.log('모달 열리나 ?');
    handleModalOpen();
  }finally {
    setIsLoading(false); // 로딩 상태 비활성화
  }
};


const handleDoneClick = () => {
  console.log('완료 버튼 클릭');
  //addWhiteBack(signatureCanvasRef.current);
  const imageData = signatureCanvasRef.current.toDataURL('image/png');
    Navigate('/loading', { state: { imageData } });
    uploadImageToServer(imageData); // 서버로 이미지 전송
   // handleTokenClear(); //캔버스 토큰 삭제
  uploadImageToServer(); // 서버로 이미지 전송
};


  return (

    <>
    {/* 모달 */}
    {modalOpen && (
        <Modal
          title="그림 확인이 필요해요 !"
          message="집, 나무, 사람이 제대로 그려졌는지 확인해주세요."
          close={handleModalClose} // 모달을 닫는 핸들러를 전달
        />
      )}
    {isLoading ? (
        <Loading />
      ) : (

    <Wrap className="scrollContainer">

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
                backgroundColor='white'
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
                  if (canvasContentState) {
                    const ctx = signatureCanvasRef.current.getContext('2d');
                    const img = new Image();
                    img.onload = function () {
                      ctx.drawImage(img, 0, 0);
                    };
                    img.src = canvasContentState;
                  }
                }}
                minWidth={penSize} // 펜의 최소 두께
                maxWidth={penSize} // 펜의 최대 두께
  
            />
            </CanvasContainer>

        </DrawingArea>

        <ButtonContainer onClick={handleDoneClick}>
          <Button>완료</Button>
        </ButtonContainer>

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
      )}
      </>


  );
}

export default Draw;
