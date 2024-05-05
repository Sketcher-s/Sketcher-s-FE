import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Check } from '../../assets/Draw/Check.svg';
import { ReactComponent as Back } from '../../assets/Draw/Back.svg';

function PreparePicture() {

  const Navigate = useNavigate();

  function handleDrawClick() {
    Navigate('/');
  }
  return (
    <Container>
      <Section>
        
        <PutSection>
          <Back />
          <Title onClick={handleDrawClick}>뒤로가기</Title>
        </PutSection>

        <Content>
          <SubSection>
            <SubTitle>검사를 위해 준비해야 할 사항</SubTitle>

            <PreNoteContainer>
              <Preparation>
                <Check />
                <Text>연필, 볼펜, 색연필 등은 사용할 수 없으며, 지우개와 A4 용지 한 장을 준비해주세요.</Text>
              </Preparation>
              <Preparation>
                <Check />
                <Text>지우개를 사용할 경우, 깨끗하게 지워 잔상이나 다른 연필 선이 남지 않도록 주의해주세요.</Text>
              </Preparation>
              <Preparation>
                <Check />
                <Text>종이가 접히거나 구겨지지 않도록 주의해주세요.</Text>
              </Preparation>
              <Preparation>
                <Check />
                <Text>아이가 새로운 종이에 다시 그리거나 할 경우, 최종적으로 그린 그림을 업로드해주세요.</Text>
              </Preparation>
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
  );
}

export default PreparePicture;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  display: inline-flex;
  background: white;
  border-radius: 10px;
`;

const Section = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: flex;
`;

const PutSection = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
`;

const Title = styled.div`
  color: #4d4f56;
  font-size: 16px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
`;

const SubTitle = styled.div`
  color: #27282B;
  font-size: 22px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 33px;
  word-wrap: break-word;
`;

const Content = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: flex;
`;

const SubSection = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: flex;
`;

const Text = styled.div`
  color: #27282b;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
`;

const PreNoteContainer = styled.div`
  width: 584px;
  height: 156px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 30px;
  padding-bottom: 14px;
  background: white;
  border-radius: 10px;
  border: 1px #e0e1e9 solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
  display: inline-flex;
`;

const NoteContainer = styled.div`
  width: 588px;
  height: 68px;
  padding: 30px;
  background: white;
  border-radius: 10px;
  border: 1px #e0e1e9 solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
  display: flex;
`;

const Preparation = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 11px;
  display: inline-flex;
`;

const ButtonContainer = styled.div`
  width: 160px;
  height: 44px;
  padding: 0 20px;
  background: #6487e2;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

const ButtonText = styled.div`
  width: 120px;
  text-align: center;
  color: white;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
`;
