import React from 'react';
import styled from 'styled-components';
import {ReactComponent as PrepareDraw1 } from '../../assets/Draw/PrepareDraw1.svg'; // vite 사용하여 SVG 파일 import
import {ReactComponent as Check } from '../../assets/Draw/Check.svg';
import { useNavigate } from 'react-router-dom';

function PrepareDraw() {

  const Navigate = useNavigate();

  function handleDrawClick(){
    Navigate('/Draw');
  }

  function handlePicClick(){
    Navigate('/PreparePicture');
  }

  //TODO 사진 첨부하기 navigate 만들기


    return(
        <OuterContainer>
    <InnerContainer>
        <PrepareDraw1/>
        <Text>HTP 테스트를 위한 참고 사항</Text>
      
      <NoteContainer>
      <SubContainer>
        <TextContainer>
        <Check/>
        <NoteText>아동이 HTP (House-Tree-Person) 테스트를 수행할 때,<br/>가능한 한 집, 나무, 사람을 포함하여 그릴 수 있도록 지도해 주세요.</NoteText>
        </TextContainer>
        </SubContainer>
      
      <SubContainer>
        <TextContainer>
        <Check/>
        <NoteText>아동이 정서적으로 안정된 상태에서 테스트를 진행하도록 해주세요.</NoteText>
        </TextContainer>
      </SubContainer>

      <SubContainer>
        <TextContainer>
        <Check/>
        <NoteText>정확한 검사를 위해 예시 그림은 제공되지 않습니다.</NoteText>
        </TextContainer>
      </SubContainer>

      <SubContainer>
        <TextContainer>
        <Check/>
        <NoteText>위 사항을 준수하지 않을 경우 테스트의 진행이 제한되거나<br/>결과가 부정확할 수 있습니다.</NoteText>
        </TextContainer>
      </SubContainer>
      </NoteContainer>

      <ButtonBox>
      <PicButtonBox onClick={handlePicClick}>
        <PicButton>사진 첨부하기</PicButton>
      </PicButtonBox>
      <DraButtonBox onClick={handleDrawClick}>
        <DraButton>그림 그리기</DraButton>
      </DraButtonBox>
    </ButtonBox>

    </InnerContainer>
    

  </OuterContainer>
    );
}

export default PrepareDraw;

// 스타일 컴포넌트 정의
const OuterContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    display: inline-flex;
    background: #F3F3F6;
    border-radius: 10px;
`;

const InnerContainer = styled.div`
    width: 644px;
    height: 519px;
    padding-top: 40px;
    padding-bottom: 40px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    display: inline-flex;
    background: white;
    border-radius: 10px;
`;

const SubContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  display: flex;
`;

const TextContainer = styled.div`
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start; 
    gap: 14px;
    display: inline-flex;
`;

const Text = styled.div`
  color: #27282B;
  font-size: 26px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 39px;
  word-wrap: break-word;
`;

const NoteContainer = styled.div`
  width: 484px;
  height: 266px;
  padding: 30px;
  background: white;
  border-radius: 10px;
  border: 1px #E0E1E9 solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
  display: flex;
`;

const NoteText = styled.div`
    color: #27282B;
    font-size: 16px;
    font-family: Pretendard-Regular;
    font-weight: 500;
    line-height: 24px;
    word-wrap: break-word;
`;

const ButtonBox = styled.div`
    // justifyContent: flex-start;
    // alignItems: flex-start;
    // gap: 50px;
    // display: inline-flex;
    display: flex;
    gap: 20px; /* 버튼 간격 */
`;

const PicButtonBox = styled.div`
    width: 160px;
    height: 44px;
    padding: 0 20px;
    background: white;
    border-radius: 4px;
    border: 1px solid #6487E2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PicButton = styled.div`
    width: 120px;
    text-align: center;
    color: #6487E2;
    font-size: 16px;
    font-family: Pretendard-Regular;
    font-weight: 700;
    line-height: 24px;
    word-wrap: break-word;
`;

const DraButton = styled.div`
    width: 120px;
    text-align: center;
    color: white;
    font-size: 16px;
    font-family: Pretendard-Regular;
    font-weight: 700;
    line-height: 24px;
    word-wrap: break-word;
`;

const DraButtonBox = styled.div`
    width: 160px;
    height: 44px;
    padding: 0 20px;
    background: #6487E2;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;