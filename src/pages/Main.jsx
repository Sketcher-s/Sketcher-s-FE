import React from 'react';
import styled from 'styled-components';
import main1Image from '../assets/Main/Main1.png'; 
import main2Image from '../assets/Main/Main2.png'; 
import main3Image from '../assets/Main/Main3.png'; 
import { theme } from '../theme';

function Main() {
  return (
    <MainContainer>
         <InspectionSection>
            <InspectionContent>
                <InspectionTitle>HTP 그림 검사 결과</InspectionTitle>
                <InspectionDescription>아이의 내면을 탐험하고,<br/> 건강한 정신 발달을 지원하세요!</InspectionDescription>
                <DetailButton>검사하기</DetailButton>
            </InspectionContent>  
            <Image1 src={main1Image} alt="HTP 검사 결과"/>
        </InspectionSection>
        <Section>
        <MindSection>
        <Image2 src={main2Image} alt="아이의 마음"/>
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
        <Image3 src={main3Image} alt="HTP 검사란"/>
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
${theme.media.mobile`
`}
`;
const InspectionSection = styled.div`
    width:100%;
    background: #f3f3f6;
    display:flex;
    justify-content: center;
    align-items: center;
    gap:56px;
    ${theme.media.mobile`
    flex-direction: column;  // 모바일에서는 수직 배치
    order: 0;  // 설명을 세 번째 위치로
  `}
`;

const InspectionContent = styled.div`
${theme.media.mobile`
    text-align: center;
  `}
`;

const InspectionTitle = styled.h2`
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    color: #6487E2;

    ${theme.media.mobile`
    //styleName: title1/B;
font-family: Pretendard;
font-size: 18px;
font-weight: 700;
line-height: 27px;
text-align: center;
color: #6487E2;

  `}
`;
const InspectionDescription = styled.p`
    font-family: Pretendard;
    font-size: 26px;
    font-weight: 700;
    line-height: 39px;

    ${theme.media.mobile`
    //styleName: display2/B;
font-family: Pretendard;
font-size: 22px;
font-weight: 700;
line-height: 33px;
text-align: center;

  `}
`;

const DetailButton = styled.button`
width: 160px;
height: 44px;
padding: 0px 20px 0px 20px;
border-radius: 4px;
background: #6487E2;
color: white;
border:none;
${theme.media.mobile`
margin-bottom:40px;
`}
`;
const Image1 = styled.img`
width: 497px;
height: 359px;
margin:50px;
${theme.media.mobile`
width: 338px; 
height: 300px;
order: 2;  // 설명을 세 번째 위치로
margin:-30px;
`}
`;

const Section = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding:100px;
    background:white;
    ${theme.media.mobile`
    align-items: left;
  `}
`;
const MindSection = styled.div`
    display:flex;
    ${theme.media.mobile`
    display:flex;
    flex-direction:column;
    
    `}
`;

const MindContent = styled.div`
  padding:50px;

`;

const MindTitle = styled.h2`
//styleName: display2/B;
font-family: Pretendard;
font-size: 22px;
font-weight: 700;
line-height: 33px;
text-align: left;
color: #27282B;
`;

const Highlighted = styled.span`
  color: #6487E2;
`;
const MindDescription = styled.p`
//styleName: body1/SB;
font-family: Pretendard;
font-size: 14px;
font-weight: 600;
line-height: 21px;
text-align: left;
color: #3F4045;


`;

const Image2 = styled.img`
width: 316px;
height: 280px;
${theme.media.mobile`
    display:flex;
    flex-direction:column;
    width: 338px;
    height: 300px;
    justify-content: center;
    align-items: center;
    `}
`;
const ResultsSection = styled.div`
display:flex;
justify-content: center;
align-items: center;
${theme.media.mobile`

flex-direction: column-reverse; // 모바일에서는 열 방향으로 변경하고 순서 반전
`}
`;

const ResultsContent = styled.div`
  padding:100px;
  ${theme.media.mobile`
  width: Fixed (336.31px)px;
  height: Fixed (298px)px;
  padding: 35.12px 43.64px 35.12px 43.64px;
  border-radius: 21.29px;

  
`}
`;

const ResultsTitle = styled.h2`
//styleName: display2/B;
font-family: Pretendard;
font-size: 22px;
font-weight: 700;
line-height: 33px;
text-align: left;
${theme.media.mobile`
//styleName: title1/B;
font-family: Pretendard;
font-size: 18px;
font-weight: 700;
line-height: 27px;
text-align: left;
`}
`;
const ResultsDescription = styled.p`
//styleName: body1/SB;
font-family: Pretendard;
font-size: 14px;
font-weight: 600;
line-height: 21px;
text-align: left;
color: #3F4045;
${theme.media.mobile`
//styleName: body1/SB;
font-family: Pretendard;
font-size: 14px;
font-weight: 600;
line-height: 21px;
text-align: left; 
`}
`;
const Image3 = styled.img`
    width: 316px;
    height: 280px;
    ${theme.media.mobile`
    display:flex;
    flex-direction:column;
    width: 338px;
height: 300px;
    `}
`;

const Footer = styled.footer`
  width: 100%;
  background: #27282B;
  ${theme.media.mobile`
  padding: 50px 20px;
`}
`;

const FooterBox = styled.footer`
  padding:70px;
`;
const FooterTitle = styled.div`
//styleName: display2/B;
font-family: Pretendard;
font-size: 22px;
font-weight: 700;
line-height: 33px;
text-align: center;
color:white;
margin-bottom:20px;
`;
const FooterContent = styled.div`
//styleName: body1/SB;
font-family: Pretendard;
font-size: 14px;
font-weight: 600;
line-height: 21px;
text-align: center;
color:white;

`;
