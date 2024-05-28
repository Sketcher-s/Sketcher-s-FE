import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Check } from '../../assets/Draw/Check.svg';
import { ReactComponent as Back } from '../../assets/Draw/Back.svg';
import Modal from '../Modal';
//import Camera from './Camera';
import { theme } from '../../theme';
//import DrawHook from '../../hooks/DrawHooks';
import PropTypes from 'prop-types';
import Loading from '../Draw/Loading'

// imgFile props에 대한 유효성 검사를 추가
PreparePicture.propTypes = {

  // imgFile은 File 객체로 전달되어야 합니다.
  imgFile: PropTypes.instanceOf(File),
  
};

function PreparePicture({ imgFile }) {

  // useEffect를 사용하여 컴포넌트가 마운트될 때 토큰을 가져옵니다.
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    setjwtToken(token);
  }, []);

  //모달 부분
  const [modalOpen, setModalOpen] = useState(false); // 모달의 열림/닫힘 상태를 관리합니다.

  const handleModalClose = () => {
    setModalOpen(false);
  }

  //페이지 이동 부분
  const Navigate = useNavigate();

  function handleDrawClick() {
    Navigate('/PrepareDraw');
  }

  //파일 첨부 기능
  //파일 input 참조
  const fileInputRef = useRef(null); 

  const [jwtToken, setjwtToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      console.log('사용자 인증 완료');

      setjwtToken(token);
    } else {
      console.error("JWT token not found in local storage");
    }
  }, []);


  useEffect(() => {
    if (imgFile) {
      Navigate('/loading', { state: { imageData: URL.createObjectURL(imgFile) } });
    }
  }, [imgFile, Navigate]);

  


  const handleFileChange = (event) => {

    console.log('handleFileChange called', event); // 디버깅용 로그


    if (event.target && event.target.files) {
      const file = event.target.files[0];
      if (file) {
        // 파일 처리 로직 추가
        console.log('Selected file:', file);
        
        // 이미지 파일인지 확인
        if (file.type.startsWith('image/')) {

          //로그 찍어보려고 추가
          const formData = new FormData();
          formData.append('file', file);
          // FormData에 추가된 파일 확인
          for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value.name}`);
          }

          // 서버로 파일 전송
           uploadFile(); // 파일을 함수의 인자로 전달

        } else {
          // 이미지 파일이 아닌 경우 경고 메시지 출력
          console.error('Selected file is not an image.');
        }
      } else {
        console.error('No file selected.');
      }
    } else {
      console.error('Event target or files not available.');
    }
  };
  

    //파일 업로드 함수
    const uploadFile = async () => {

  
      if (!jwtToken) {
          console.error("User not authenticated");
          return;
      }
    
      const fileInput = document.querySelector('input[type="file"]');
      const file = fileInput.files[0];
  
      
      if (!file) {
        console.error("No file selected");
        return;
      }
  
      // FormData 객체 생성
      const formData = new FormData();
      formData.append('file', file);

        
      setIsLoading(true);

      // 로그 추가: 요청 전송 직전
      console.log('Sending POST request to server with form data:', formData);
    
      try {
        // 서버로 POST 요청 보내기
        const response = await fetch('https://dev.catchmind.shop/api/picture', {
          method: 'POST',
          headers: {
  
          //'Accept': '*/*',
          //'Content-Type': 'multipart/form-data', // 파일 업로드시에는 Content-Type을 multipart/form-data로 설정합니다.
          'Authorization': `Bearer ${jwtToken}`, // 사용자 토큰을 헤더에 포함하여 서버로 전송
  
          },
          body: formData,
        });
    
        // 응답 확인
        if (response.ok) {
          const data = await response.json();
          console.log('File uploaded successfully:', data);
           // 파일 업로드 성공 후 result 페이지로 이동
           Navigate('/result', { state: { response: data } });
        } else {
          console.error('File upload failed', await response.text());
        }
      } catch (error) {
        console.error('Error uploading file:', error.response.status, error.response.statusText);
      } finally {
        setIsLoading(false); // 업로드 완료 시 로딩 상태 비활성화
      }
    };
    
    //함수 호출
    //uploadFile();

  const handleButtonClick = () => {

    // 파일을 선택하기 위해 input 요소 클릭
    fileInputRef.current.click();
  };

  return (
    <>
    {isLoading ? (
      <Loading/>
      
    ) : (
    <Container>

      <Section>
        <PutSection onClick={handleDrawClick}>
          <Back />
          <Title>뒤로가기</Title>
        </PutSection>
        <Content>
          <SubTitle>검사를 위해 준비해야 할 사항</SubTitle>

            <NoteContainer>
              <PreContainer>
              <Preparation>
                <Check />
              </Preparation>
              <Text>연필, 볼펜, 색연필 등은 사용할 수 없으며, 지우개와 A4 용지 한 장을 준비해주세요.</Text>
              </PreContainer>

              <PreContainer>
              <Preparation>
                <Check />
              </Preparation>
              <Text>지우개를 사용할 경우, 깨끗하게 지워 잔상이나 다른 연필 선이 남지 않도록 주의해주세요.</Text>
              </PreContainer>

              <PreContainer>
              <Preparation>
                <Check />
              </Preparation>
              <Text>종이가 접히거나 구겨지지 않도록 주의해주세요.</Text>
              </PreContainer>

              <PreContainer>
              <Preparation>
                <Check />
              </Preparation>
              <Text>아이가 새로운 종이에 다시 그리거나 할 경우, 최종적으로 그린 그림을 업로드해주세요.</Text>
              </PreContainer>

            </NoteContainer>

            <SubTitle>사진 첨부 시 유의사항</SubTitle>

            <NoteContainer>
              <PreContainer>
              <Preparation>
                <Check />
              </Preparation>
              <Text>밝고 어두운 그림자가 없는 밝은 곳에서 촬영해주세요.</Text>
              </PreContainer>

              <PreContainer>
              <Preparation>
                <Check />
              </Preparation>
              <Text>A4 용지에 딱 맞춰서 촬영하고, 그림자가 생기지 않도록 주의해주세요.</Text>
              </PreContainer>
            </NoteContainer>

            <ButtonContainer>
              <ButtonWrapper>
                <ButtonText onClick={handleButtonClick}>
                  사진 첨부하기
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                  />
                </ButtonText>
              </ButtonWrapper>
            </ButtonContainer>
        </Content>



      {/* 첨부한 이미지 파일을 보여줌 */}
      {/* {imgFile && (
        <div>
          <img src={URL.createObjectURL(imgFile)} alt="Selected Image" width="200" height="200" />
        </div>
      )} */}

      </Section>

      {/* 모달을 열기 위한 버튼 */}
      {modalOpen && (
        <Modal
          title="사진 확인이 필요해요 !"
          message="사진이 적절하게 첨부되었는지 다시 확인해주세요."
          close={handleModalClose} // 모달을 닫는 핸들러를 전달합니다.
        />
      )}


      
    </Container>
          )}
    </>

  );
}

export default PreparePicture;

const Container = styled.div`

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.875rem; //30px;
  display: flex;
  background: white;
  //overflow: hidden;
  ${theme.media.mobile`
  height: 93vh;
`}

  ${theme.media.desktop`
  height: 93vh;

`}
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem; //20px;
  height: 100%;
  justify-content: flex-start;

  ${theme.media.mobile`

  
`}
`;

const PutSection = styled.div`
  width: 100%;
  
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem; //10px;
  display: flex;
  margin-top: 1.3rem;

  ${theme.media.mobile`
    display: none;
`}
`;

const Title = styled.div`
  color: #4d4f56;
  font-size: 1rem; //16px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 1.5rem; //24px;
  word-wrap: break-word;
`;

const SubTitle = styled.div`
  color: #27282B;
  font-size: 1.375rem; //22px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 2.0625rem; //33px;
  word-wrap: break-word;
  text-align: center;
  align-self: flex-start;
  padding-left: 1rem;

  ${theme.media.mobile`
    font-size: 1.125rem;
`}
`;

const Content = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem; //16px;
  display: flex;
  height: 80%;
  
  ${theme.media.mobile`
    
`}
`;

const Text = styled.div`
  color: #27282b;
  font-size: 1rem; //16px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 1.5rem; //24px;
  word-wrap: break-word;

  ${theme.media.mobile`
    font-size: 0.875rem;
    text-align: left;
`}
`;

const PreContainer = styled.div`
  justify-content: flex-start;
  gap: 1.25rem; //20px;
  display: flex;

  ${theme.media.mobile`
  align-items: flex-start;
`}
`;

const NoteContainer = styled.div`
  background: white;
  border-radius: 0.625rem;
  border: 0.0625rem #e0e1e9 solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  display: flex;
  

  ${theme.media.mobile`
    width: 75%;
    padding: 1.8rem 1.3rem;
  `}

  ${theme.media.desktop`
    width: 40.5rem;
    padding: 1.875rem 2rem;
  `}
`;

const Preparation = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;

  ${theme.media.mobile`
  padding-top: 0.3rem;
`}
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 1.5rem;
`;

const ButtonWrapper = styled.button`
  background: #6487e2;
  border-radius: 0.25rem; //4px;
  justify-content: center;
  align-items: center;
  display: flex;
  border: none;

  ${theme.media.mobile`
    width: 75%;
`}

  ${theme.media.desktop`
   width: 30%;
  `}
`;

const ButtonText = styled.h1`
  width: 7.5rem; //120px;
  text-align: center;
  color: white;
  font-size: 1rem; //16px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.5rem; //24px;
  word-wrap: break-word;
`;
