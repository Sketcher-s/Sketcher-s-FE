import React, {useState,} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Check } from '../../assets/Draw/GCheck.svg';
import { ReactComponent as Back } from '../../assets/Draw/Back.svg';
import Modal from '../Modal';
import { theme } from '../../theme';


function PreparePicture() {


  const [modalOpen, setModalOpen] = useState(false); // 모달의 열림/닫힘 상태를 관리합니다.
 
  const handleModalOpen = () => {
    setModalOpen(true); // 모달을 열기 위해 상태를 변경하는 함수
  };

  const handleModalClose = () => {
    setModalOpen(false);
  }

  const Navigate = useNavigate();

  function handleDrawClick() {
    Navigate('/preparedraw');
  }

 

  return (
    <div>
    <Container onClick={handleModalOpen}>
      <Section>
        
        <PutSection>
          <Back />
          <Title onClick={handleDrawClick}>뒤로가기</Title>
        </PutSection>

        <Content>
          <SubSection>
            <SubTitle>검사를 위해 준비해야 할 사항</SubTitle>

            <PreNoteContainer>
              <PreContainer>
              <Preparation>
                <Check />
                <Text>연필, 볼펜, 색연필 등은 사용할 수 없으며, 지우개와 A4 용지 한 장을 준비해주세요.</Text>
              </Preparation>
              </PreContainer>

              <PreContainer>
              <Preparation>
                <Check />
                <Text>지우개를 사용할 경우, 깨끗하게 지워 잔상이나 다른 연필 선이 남지 않도록 주의해주세요.</Text>
              </Preparation>
              </PreContainer>

              <PreContainer>
              <Preparation>
                <Check />
                <Text>종이가 접히거나 구겨지지 않도록 주의해주세요.</Text>
              </Preparation>
              </PreContainer>

              <PreContainer>
              <Preparation>
                <Check />
                <Text>아이가 새로운 종이에 다시 그리거나 할 경우, 최종적으로 그린 그림을 업로드해주세요.</Text>
              </Preparation>
              </PreContainer>

            </PreNoteContainer>
          </SubSection>

          <SubSection>
            <SubTitle>사진 첨부 시 유의사항</SubTitle>

            <NoteContainer>
              <Preparation>
                <Check />
                <Text>밝고 어두운 그림자가 없는 밝은 곳에서 촬영해주세요.</Text>
              </Preparation>
              <Preparation>
                <Check />
                <Text>A4 용지에 딱 맞춰서 촬영하고, 그림자가 생기지 않도록 주의해주세요.</Text>
              </Preparation>
            </NoteContainer>
          </SubSection>
        </Content>
      </Section>

      <ButtonContainer>
        <ButtonText>사진 첨부하기</ButtonText>
      </ButtonContainer>

    </Container>


    {/* 모달을 열기 위한 버튼 */}
      {modalOpen && (
        <Modal
          title="사진 확인이 필요해요 !"
          message="사진이 적절하게 촬영되었는지 다시 확인해주세요."
          close={handleModalClose} // 모달을 닫는 핸들러를 전달합니다.
        />
      )}

    </div>
  );
}

export default PreparePicture;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2.5rem; //40px;
  padding-bottom: 2.5rem; //40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.875rem; //30px;
  display: inline-flex;
  background: white;
  border-radius: 0.625rem; //10px;

  ${theme.media.mobile`
  `}
`;

const Section = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.25rem; //20px;
  display: flex;

  ${theme.media.mobile`
  width: 21.125rem;
  //height: 37.875rem;
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

const SubSection = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.25rem; //20px;
  display: flex;

  ${theme.media.mobile`
  justify-content: flex-start;
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
`}
`;

const PreContainer = styled.div`
lex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 1.25rem; //20px;
display: flex;
  ${theme.media.mobile`
`}
`;

const PreNoteContainer = styled.div`
  width: 36.5rem; //584px;
  height: 9.75rem; //156px;
  padding-left: 2rem; //32px;
  padding-right: 2rem; //32px;
  padding-top: 1.875rem; //30px;
  padding-bottom: 0.875rem; //14px;
  background: white;
  border-radius: 0.625rem; //10px;
  border: 0.0625rem #e0e1e9 solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.875rem; //14px;
  display: inline-flex;

  ${theme.media.mobile`
    width:18.625rem;
    height: 12.375rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 1.875rem;
    padding-bottom: 1.875rem;
    align-items: center;
  `}
  
`;

const NoteContainer = styled.div`
  width: 36.75rem; //588px;
  height: 4.25rem; //68px;
  padding: 1.875rem; //30px;
  background: white;
  border-radius: 0.625rem; //10px;
  border: 0.0625rem #e0e1e9 solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.875rem; //14px;
  display: flex;

  ${theme.media.mobile`
  width: 18.625rem;
  height: 6.25rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
  align-items: center;
`}
`;

const Preparation = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.6875rem; //11px;
  display: inline-flex;

  ${theme.media.mobile`
`}
`;

const ButtonContainer = styled.div`
  width: 10rem; //160px;
  height: 2.75rem; //44px;
  padding: 0 1.25rem; //0 20px;
  background: #6487e2;
  border-radius: 0.25rem; //4px;
  justify-content: center;
  align-items: center;
  display: inline-flex;

  ${theme.media.mobile`
`}
`;

const ButtonText = styled.div`
  width: 7.5rem; //120px;
  text-align: center;
  color: white;
  font-size: 1rem; //16px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.5rem; //24px;
  word-wrap: break-word;
`;