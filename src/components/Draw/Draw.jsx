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

// // imgFile props에 대한 유효성 검사를 추가
// Draw.propTypes = {

//   // imgFile은 File 객체로 전달되어야 합니다.
//   imgFile: Draw.instanceOf(File),
  
// };

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


// //이미지 데이터를 서버로 전송하는 함수
// const uploadImageToServer = async () => {
//   const canvas = signatureCanvasRef.current;
//   if (!canvas) {
//     console.error("Canvas is not initialized");
//     return;
//   }

//   // 이미지를 JPEG 형식으로 추출 (품질 1.0)
//   const imageDataUrl = canvas.toDataURL('image/jpeg', 1.0);

//   // 이미지 데이터를 Blob으로 변환
//   const response = await fetch(imageDataUrl);
//   const blob = await response.blob();

//   // FormData 객체 생성 및 설정
//   const formData = new FormData();
//   formData.append('picture', blob, 'canvasImage.jpg');

//   try {
//     // 서버로 POST 요청 보내기
//     const serverResponse = await fetch('https://dev.catchmind.shop/api/picture', {
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Authorization': `Bearer ${jwtToken}`, // 필요한 경우 인증 토큰 추가
//       },
//     });

//   //   if (!serverResponse.ok) throw new Error('Failed to upload image');
//   //   const result = await serverResponse.json();
//   //   console.log('Image uploaded successfully:', result);
//   // } catch (error) {
//   //   console.error('Error uploading image:', error);
//   // }

//   if (!response.ok) {
//     console.error(`HTTP error! status: ${response.status}`);
//     const errorBody = await response.text();  // Assuming the server sends a text response for errors
//     console.error(`Error details: ${errorBody}`);
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();
//   console.log('File uploaded successfully:', data);
// } catch (error) {
//   console.error('File upload failed:', error.message);
// }

// };



  // 이미지 데이터를 서버로 전송하는 함수
  const uploadImageToServer = async () => {

    const token = localStorage.getItem('jwtToken');
    if (token) {
      console.log('사용자 인증 완료');

      setjwtToken(token);
    } else {
      console.error("JWT token not found in local storage");
    }




  const imageData = signatureCanvasRef.current.toDataURL(); // 이미지를 JPEG 형식으로 변환 
  const base64Response = await fetch(imageData);  // Base64 문자열에서 필요하지 않은 부분을 제거
  const blob = await base64Response.blob(); // Blob으로 변환
  const formData = new FormData();
  // formData.append('file', blob, "filename.png"); // Blob을 파일로 처리하여 추가
  formData.append('file', blob);

  // 요청 세부 정보 로깅
  console.log('Prepared FormData:');
  formData.forEach((value, key) => {
  console.log(key, typeof value, value);
  });

  // 로그 추가: 요청 전송 직전
  console.log('Sending POST request to server with form data:', formData);



    try {
      const response = await fetch('https://dev.catchmind.shop/api/picture', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
        },
        body: formData,
        credentials: 'include', // 쿠키를 포함하려면 추가
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

     // 응답이 비어 있는지 확인
     const text = await response.text();
     if (!text) {
       throw new Error("응답이 비어있습니다");
     }
 
     // JSON 데이터가 있는지 안전하게 확인
     let data;
     try {
       data = JSON.parse(text);
     } catch (error) {
       throw new Error("응답 데이터가 JSON 형식이 아닙니다");
     }

      console.log('파일 업로드 성공:', data);
    } catch (error) {
      console.error('파일 업로드 실패:', error);
    }
  };




  //여긴 403ㄷ에러 뜨는 코드임
//   // 이미지 데이터를 서버로 전송하는 함수
// const uploadImageToServer = async () => {
//   // 로컬 스토리지에서 JWT 토큰을 가져옴
//   const token = localStorage.getItem('jwtToken');
//   if (token) {
//     console.log('사용자 인증 완료');
//     setjwtToken(token); // 상태 업데이트
//   } else {
//     console.error("JWT token not found in local storage");
//     return; // 토큰이 없으면 함수를 빠져나옴
//   }

//   // Canvas에서 이미지 데이터를 JPEG 형식으로 추출
//   const imageDataUrl = signatureCanvasRef.current.toDataURL('image/jpeg', 1.0);

//   // Base64 URL을 Blob으로 변환
//   fetch(imageDataUrl)
//     .then(response => response.blob())
//     .then(blob => {
//       // FormData 객체 생성 및 이미지 파일 추가
//       const formData = new FormData();
//       formData.append('imageFile', blob, 'image.jpg');

//       // FormData 내용 확인
//       for (let pair of formData.entries()) {
//         console.log(`${pair[0]}: ${pair[1]}`);
//       }

//       // 로그 추가: 요청 전송 직전
//       console.log('Sending POST request to server with form data:', formData);
      
//       // 요청 세부 정보 로깅
//     console.log('Prepared FormData:');
//     formData.forEach((value, key) => {
//       console.log(key, typeof value, value);
//     });

//       // 서버에 이미지 데이터를 포함한 POST 요청 보내기
//       fetch('https://dev.catchmind.shop/api/picture', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${jwtToken}`
//         },
//         body: formData
//       })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.text(); // 응답을 텍스트로 변환
//       })
//       .then(text => {
//         if (!text) {
//           throw new Error("응답이 비어있습니다");
//         }
//         // JSON 파싱 시도
//         try {
//           const data = JSON.parse(text);
//           console.log('파일 업로드 성공:', data);
//         } catch (error) {
//           throw new Error("응답 데이터가 JSON 형식이 아닙니다");
//         }
//       })
//       .catch(error => {
//         console.error('파일 업로드 실패:', error);
//       });
//     });
// };


  

  // 완료 버튼 클릭 이벤트 핸들러
  
  const handleDoneClick = () => {
    console.log('완료 버튼 클릭');
    uploadImageToServer(); // 서버로 이미지 전송
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