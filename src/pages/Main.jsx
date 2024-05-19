import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Main1 } from '../assets/Main/Main1.svg';
import { ReactComponent as Main2 } from  '../assets/Main/Main2.svg';
import { ReactComponent as Main3 } from  '../assets/Main/Main3.svg';
import { theme } from '../theme';



const StyledMain1 = styled(Main1)`
  width: ${props => props.width || '90%'};
  height: ${props => props.height || '22.4475rem'};

`;

const StyledMain2 = styled(Main2)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
`;

const StyledMain3 = styled(Main3)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
`;

function Main() {
  return (
    <MainContainer>

        <InspectionSection>
         <InspectionContent>
          <InspectionTitle>HTP 그림 검사 결과</InspectionTitle>
          <InspectionDescription>아이의 내면을 탐험하고,<br/> 건강한 정신 발달을 지원하세요!</InspectionDescription>
          <DetailButton>검사하기</DetailButton>
        </InspectionContent>
        <ImgBox>
          <StyledMain1 />
        </ImgBox>
        </InspectionSection>



        <Section>
        <MindSection>
        <ImgBox>
        <StyledMain2/>
        </ImgBox>
            <MindContent>
                <MindTitle>아이의 마음, <Highlighted>그림</Highlighted>으로 알아보아요</MindTitle>
                <MindDescription>HTP 그림 심리 검사를 통해<br/> 
                아이의 심리 상태를 파악하는데 도움을 받아보세요.</MindDescription>
            </MindContent>
        </MindSection>
        <ResultsSection>
        <ResultsContent>
            <ResultsTitle>HTP 그림 심리 검사란?</ResultsTitle>
            <ResultsDescription>사용자가 집, 나무, 사람을 그리는 것을 통해 <br/>그들의 심리 상태를 분석하는 방법입니다.</ResultsDescription>
            <ResultsDescription>사용자의 그림을 통해 형식 분석과 내용 분석을 진행하여, <br/>그림의 크기, 위치, 세밀함 등 다양한 요소를 평가하고, <br/>이를 통해 사용자의 자신감, 감정 상태, 대인 관계 태도 등을 <br/>파악할 수 있습니다.</ResultsDescription>
        </ResultsContent>
        <ImgBox>
        <StyledMain3/>
        </ImgBox>
      </ResultsSection>
      </Section>
      <Footer>
        <FooterBox>
          <FooterTitle>
            CatchMind에서는 이렇게 검사해요!
          </FooterTitle>
          <FooterContent>
            예상 검사 소요 시간은 20분이며,
            <br/>만 18세 미만의 청소년 및 아동의 그림으로 심리 검사가 진행됩니다.
            <br/>비용은 발생하지 않습니다. 
          </FooterContent>
        </FooterBox>
      </Footer>
    </MainContainer>
  );
}
export default Main;

const MainContainer = styled.div`
overflow: hidden;

`;
const InspectionSection = styled.div`
display: flex;
background: #f3f3f6;
flex-direction:row;
align-items: center;
justify-content: center;
${theme.media.mobile`
flex-direction:column;
  `}
`;

const InspectionContent = styled.div`
    margin : 4rem;
    align-items: center;
    
${theme.media.mobile`
text-align: center;
  `}
`;

const InspectionTitle = styled.h2`
font-family: Pretendard;
font-size: 1.125rem;  // 18px
font-weight: 700;
line-height: 1.6875rem;  // 27px
color: #6487E2;
${theme.media.mobile`
font-size: 1.375rem;
text-align: center;
  `}
`;
const InspectionDescription = styled.p`
    font-family: Pretendard;
    font-size: 2vw;
    font-weight: 700;
    color:black;
    ${theme.media.mobile`
font-size: 1.375rem;
text-align: center;
  `}
`;

const DetailButton = styled.button`
width: 10rem;
height: 2.75rem;
border-radius: 0.25rem;
background: #6487E2;
color: white;
border:none;
font-weight:700;
margin-top:20px;
${theme.media.mobile`
    margin-top: 0; /* Remove the top margin for mobile view */
    margin-bottom: 1rem;
  `}
`;

const Section = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding: 3.25rem;
    background:white;
    ${theme.media.mobile`
    align-items: center;
  `}
`;
const MindSection = styled.div`
    display:flex;
    ${theme.media.mobile`
    display:flex;
    flex-direction:column-reverse;
    width: 100%;
    height: 100%;
    flex-direction: column ;// 모바일에서는 열 방향으로 변경하고 순서 반전
    
    `}
`;

const MindContent = styled.div`

  padding: 2.125rem;
  justify-content: center;
  align-items: center;

`;

const MindTitle = styled.h2`
  font-family: Pretendard;
  font-size: 1.375rem;
  font-weight: 700;
  text-align: left;
  color: #27282B;
`;

const Highlighted = styled.span`
  color: #6487E2;
`;
const MindDescription = styled.p`
  width: 22.5rem;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.3125rem;
  text-align: left;
  color: #3F4045;
  ${theme.media.mobile`
  width:100%;
`}

`;

const ResultsSection = styled.div`
  display:flex;
  color:black;
    
${theme.media.mobile`
  flex-direction: column ;// 모바일에서는 열 방향으로 변경하고 순서 반전
  width: 100%;
  height: 100%;
`}
`;

const ResultsContent = styled.div`
  padding:1.25rem;
  ${theme.media.mobile`
  padding: 2rem 3rem;
  
`}
`;

const ResultsTitle = styled.h2`
font-family: Pretendard;
font-size: 1.375rem;
font-weight: 700;
text-align: left;
${theme.media.mobile`

`}
`;
const ResultsDescription = styled.p`
//styleName: body1/SB;
width: 22.5rem;
font-family: Pretendard;
font-size: 0.875rem;
font-weight: 600;
line-height: 1.3125rem;
text-align: left;
color: #3F4045;
${theme.media.mobile`
  width:100%;
  
`}
`;

const Footer = styled.footer`
  width: 100%;
  background: #27282B;
  ${theme.media.mobile`
  padding: 3.125rem 1.35rem;
`}
`;

const FooterBox = styled.footer`
  padding:4.375rem;

`;
const FooterTitle = styled.div`

  font-size: 1.375rem;
  font-weight: 700;
  line-height: 2.0625rem;
  text-align: center;
  color:white;
  margin-bottom:1.25rem;

`;
const FooterContent = styled.div`
font-size: 0.875rem;
font-weight: 600;
line-height: 1.3125rem;
text-align: center;
color:white;
${theme.media.mobile`
`}

`;

const ImgBox = styled.div`

${theme.media.mobile`
`}

`;

const ButtonContainer = styled.div`

${theme.media.mobile`
  order: 3; /* Ensure this container comes last on mobile */
  margin-top: 20px; /* Add top margin on mobile */
  padding-top: 0;
  position: relative; /* Reset position */
  top: 1rem; /* Reset top */
  left: 0.5rem; /* Reset left */
  padding-bottom: 3rem;
`}
  padding-top: 15rem;
  position: relative; /* Reset position */
  bottom: 1rem;
  left: -12rem;

  
`;
