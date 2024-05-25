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
import axios from 'axios';

// imgFile props에 대한 유효성 검사를 추가한다.
PreparePicture.propTypes = {
  // imgFile은 object 타입으로 전달되어야 한다.
  //실제로는 파일 객체일 것임
  imgFile: PropTypes.object,
};

function PreparePicture({ imgFile }) {

  // useEffect를 사용하여 컴포넌트가 마운트될 때 토큰을 가져옵니다.
  useEffect(() => {
    const token = localStorage.getItem('authorization');
    setAuthToken(token);
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
  //const [imgFile, setImgFile] = useState(null); // imgFile 상태를 관리합니다.
  //파일 input 참조
  const fileInputRef = useRef(null); 

  const [authorization, setAuthToken] = useState('');

  useEffect(() => {
    // 로그인 후 토큰을 로컬 스토리지에서 가져옵니다.
    const token = localStorage.getItem('authToken');
    setAuthToken(token);
  }, []);

  useEffect(() => {
    if (imgFile) {
      Navigate('/loading', { state: { imageData: URL.createObjectURL(imgFile) } });
    }
  }, [imgFile, Navigate]);


  // const handleFileChange = () => {
  //   console.log(fileInputRef.current.files); //파일 잘 들어갔는지 확인

  //   const file = fileInputRef.current.files[0]; // 첫 번째 파일만 선택
  //   setImgFile(file);

  // };

  // // 파일 첨부 기능
  // const handleFileChange = (event) => {

  //   const files = event.target.files[0];

  //   if (files) {
  //     // 파일 확인
  //     console.log('Selected file:', files);

  //     // 이미지 파일인지 확인
  //     if (files.type.startsWith('image/')) {
  //       // 서버로 파일 전송
  //       uploadFile(files);
  //     } else {
  //       // 이미지 파일이 아닌 경우 경고 메시지 출력
  //       console.error('Selected file is not an image.');
  //     }
  //   } else {
  //     console.error('No file selected.');
  //   }
  // };

  const handleFileChange = (event) => {

    console.log('handleFileChange called', event); // 디버깅용 로그


    if (event.target && event.target.files) {
      const file = event.target.files[0];
      if (file) {
        // 파일 처리 로직 추가
        console.log('Selected file:', file);
        
        // 이미지 파일인지 확인
        if (file.type.startsWith('image/')) {
          // 서버로 파일 전송
          uploadFile(file);
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
  
  

    // 서버로 파일 전송 함수
    const uploadFile = async (file) => {

      if (!file) {
        console.error('No file selected');
        return;
      }

      try {
        const formData = new FormData();
        formData.append('file', file);


        //const authToken = localStorage.getItem('authToken');

        // 서버로 POST 요청 보내기
        const response = await axios.post('https://dev.catchmind.shop/api/picture', formData, {
          headers: {
            //'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${authorization}`, 
          },
        });


        if (response.status === 200) {
          console.log('File uploaded successfully:', response.data);
        } else {
          console.error('File upload failed');
        }
        // 응답 확인
        //console.log('File uploaded successfully:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };


  const handleButtonClick = () => {

    //console.log('handleButtonClick called'); // 디버깅용 로그
    //console.log('fileInputRef.current', fileInputRef.current); // 디버깅용 로그


    // 파일을 선택하기 위해 input 요소 클릭
    fileInputRef.current.click();
  };

  return (
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
          
        </Content>

      <ButtonContainer>
        <ButtonText onClick={handleButtonClick}>
          사진 첨부하기
          <input
            type="file"
            accept="image/*"
            //multiple
            // onChange={handleFileChange}
            onChange={handleFileChange}
            style={{ display: 'none' }}
            ref={fileInputRef}
          />
        </ButtonText>

      </ButtonContainer>

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

  );
}

export default PreparePicture;

const Container = styled.div`

  height: 100%;
  padding-top: 2.5rem; //40px;
  padding-bottom: 2.5rem; //40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.875rem; //30px;
  display: flex;
  background: white;
  //overflow: hidden;
  ${theme.media.mobile`
    padding-top: 1rem; //40px;
    //padding-bottom: 1rem; //40px;
  `}
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem; //20px;

  ${theme.media.mobile`

  justify-content: center;
`}
`;

const PutSection = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.625rem; //10px;
  display: inline-flex;

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

const ButtonContainer = styled.button`
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