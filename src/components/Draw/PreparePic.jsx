import React, {useState,useRef} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Check } from '../../assets/Draw/Check.svg';
import { ReactComponent as Back } from '../../assets/Draw/Back.svg';
import Modal from '../Modal';
import Camera from './Camera';
import { theme } from '../../theme';

function PreparePicture() {

  const [modalOpen, setModalOpen] = useState(false); // 모달의 열림/닫힘 상태를 관리합니다.
  const [fileSelected, setFileSelected] = useState(false);
  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  const handleModalOpen = () => {
    setModalOpen(true); // 모달을 열기 위해 상태를 변경하는 함수
  };

  const handleModalClose = () => {
    setModalOpen(false);
  }


  const handleFileChange = (event) => {
    const files = Array.from(event.target.files).slice(0, 4); // 최대 4개의 파일만 선택 가능
    if (files.length > 0) {
      setFileSelected(true);
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleDrawClick = () => {
      handleModalOpen(); // 사진이 첨부되지 않았다면 모달창을 띄웁니다
  };

  const handleUpload = () => {
    if (!fileSelected) {
      handleModalOpen(); // 파일이 선택되지 않았다면 모달창을 띄웁니다.
    } else {
      // 파일 업로드 로직을 여기에 추가하거나 다음 단계로 진행합니다.
      alert('파일이 업로드 준비가 되었습니다!');
    }
  };


  return (
    <Container>
      <Section>
        <PutSection>
          <Back />
          <Title onClick={handleDrawClick}>뒤로가기</Title>
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
      </Section>

      <ButtonContainer>
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
    
      </ButtonContainer>
    </Container>

  );
}

export default PreparePicture;

const Container = styled.div`

  height: 100vh;
  padding-top: 2.5rem; //40px;
  padding-bottom: 2.5rem; //40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.875rem; //30px;
  display: flex;
  background: white;
  overflow: hidden;
  ${theme.media.mobile`
    padding-top: 1rem; //40px;
    padding-bottom: 1rem; //40px;
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
  gap: 0.875rem;
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