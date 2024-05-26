import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PrepareDraw1 } from '../../assets/Draw/PrepareDraw1.svg'; // vite 사용하여 SVG 파일 import
import { ReactComponent as Check } from '../../assets/Draw/Check.svg';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../theme';

const StyledPrepareDraw1 = styled(PrepareDraw1)`
  width: ${props => props.width || '2.5rem'};
  height: ${props => props.height || '2.5rem'};
`;

function PrepareDraw() {
  const Navigate = useNavigate();

  function handleDrawClick() {
    Navigate('/draw');
  }

  function handlePicClick() {
    Navigate('/preparepicture');
  }

  return (
    <OuterContainer>
      <InnerContainer>
        <StyledPrepareDraw1 />
        <Text>HTP 테스트를 위한 참고 사항</Text>

        <NoteContainer>

          <SubContainer>
            <TextContainer>
              <Check />
            </TextContainer>
              <NoteText>
                아동이 HTP (House-Tree-Person) 테스트를 수행할 때,
                <br />
                가능한 한 집, 나무, 사람을 포함하여 그릴 수 있도록 지도해 주세요.
              </NoteText>
          </SubContainer>

          <SubContainer>
            <TextContainer>
              <Check />
            </TextContainer>
              <NoteText>아동이 정서적으로 안정된 상태에서 테스트를 진행하도록 해주세요.</NoteText>
          </SubContainer>

          <SubContainer>
            <TextContainer>
              <Check />
            </TextContainer>
              <NoteText>정확한 검사를 위해 예시 그림은 제공되지 않습니다.</NoteText>
          </SubContainer>

          <SubContainer>
            <TextContainer>
              <Check />
            </TextContainer>
              <NoteText>
                위 사항을 준수하지 않을 경우 테스트의 진행이 제한되거나
                <br />
                결과가 부정확할 수 있습니다.
              </NoteText>
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
  height: 93vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.875rem; //30px;
  display: flex;
  background: #f3f3f6;
  //border-radius: 0.625rem; //10px;

  ${theme.media.mobile`
`}

`;

const InnerContainer = styled.div`
  width: 40.25rem; //644px;
  height: 32.4375rem; //519px;
  padding-top: 2.5rem; //40px;
  padding-bottom: 2.5rem; //40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.875rem; //30px;
  display: flex;
  background: white;
  border-radius: 0.625rem; //10px;

  ${theme.media.mobile`

  width: 21.125rem;
  height: 37.875rem;
`}
`;

const SubContainer = styled.div`
  //flex-direction: column;
  justify-content: flex-start;
  //align-items: center;
  gap: 1.25rem; //20px;
  display: flex;

  ${theme.media.mobile`
  // justify-content: center;
  // display: flex-direction: column;
`}
`;

const TextContainer = styled.div`
  // width: 100%;
  // height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.6875rem; //14px;
  display: inline-flex;

  ${theme.media.mobile`
    //width: 18rem; 
  `}
`;

const Text = styled.div`
  color: #27282b;
  font-size: 1.625rem; //26px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 2.4375rem; //39px;
  word-wrap: break-word;

  ${theme.media.mobile`
  font-size: 1.375rem;
  `}
`;

const NoteContainer = styled.div`
  //width: 30.25rem; //484px;
  height: 16.625rem; //266px;
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
  width:18rem;
  border: none;
  padding: 0;
  //align-items: center;
`}
`;

const NoteText = styled.div`
  color: #27282b;
  font-size: 1rem; //16px;
  font-family: Pretendard-Regular;
  font-weight: 500;
  line-height: 1.5rem; //24px;
  word-wrap: break-word;

  ${theme.media.mobile`
  font-size: 0.875rem; 
  margin-top: -1%;
`}

`;

const ButtonBox = styled.div`
  // justifyContent: flex-start;
  // alignItems: flex-start;
  // gap: 50px;
  // display: inline-flex;
  display: flex;
  gap: 1.25rem; //20px; /* 버튼 간격 */

  ${theme.media.mobile`
  height: 3rem;
  display: block;
  gap: 2.5rem;
`}


`;

const PicButtonBox = styled.div`
  width: 10rem; //160px;
  height: 2.75rem; //44px;
  padding: 0 1.25rem; //0 20px;
  background: white;
  border-radius: 0.25rem; //4px;
  border: 0.0625rem solid #6487e2;
  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.media.mobile`
  margin-top: 2.5rem;
  width: 15.625rem;
  height: 3rem;
  padding: 0 1.25rem;
`}


`;

const PicButton = styled.button`
  width: 10rem; //120px;
  text-align: center;
  color: #6487e2;
  font-size: 1rem; //16px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 1.5rem; //24px;
  word-wrap: break-word;
  border: none;
  background: none;

`;

const DraButton = styled.button`
  width: 7.5rem; //120px;
  text-align: center;
  color: white;
  font-size: 1rem; //16px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 1.5rem; //24px;
  word-wrap: break-word;
  border: none;
  background: none;

`;

const DraButtonBox = styled.div`
  width: 10rem; //160px;
  height: 2.75rem; //44px;
  padding: 0 1.25rem; //0 20px;
  background: #6487e2;
  border-radius: 0.25rem; //4px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.media.mobile`
  margin-top: 1.25rem;
  width: 15.625rem;
  height: 3rem;
  padding: 0 1.25rem;
`}

`;