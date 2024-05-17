import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Big } from '../assets/Main/Big.svg';
import { ReactComponent as MainPic2 } from '../assets/Main/MainPic2.svg';
import { ReactComponent as MainPic3 } from '../assets/Main/MainPic3.svg';
import { theme } from '../theme';

const StyledBigSVG = styled(Big)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
`;

const StyledMainPic2 = styled(MainPic2)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
`;

const StyledMainPic3 = styled(MainPic3)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
`;

function Main () {
  return (
    <MainContainer>

         <InspectionSection>

            <InspectionContent>
              <TextBox>
                <InspectionTitle>HTP 그림 심리 무료 결과</InspectionTitle>
                <InspectionDescription>아이의 내면을 탐험하고,<br/> 건강한 정신 발달을 지원하세요!</InspectionDescription>
              </TextBox>
              <DetailButton>검사하기</DetailButton>
            </InspectionContent>  

            <PicDiv>
              <StyledBigSVG/>
            </PicDiv>

        </InspectionSection>

        <Section>
        <MindSection>
        <PicDiv>
        <StyledMainPic2/>
        </PicDiv>
            <MindContent>
                <MindTitle>아이의 마음, <br/> 그림으로 알아보아요</MindTitle>
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
        <PicDiv>
        <StyledMainPic3/>
        </PicDiv>
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
  height: 100vh;
  width: 100%;
  padding-bottom: 2.5rem; //40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  background: white;
  //overflow: hidden;
${theme.media.mobile`
`}
`;

const InspectionSection = styled.div`
    width:100%;
    background: #f3f3f6;
    display:flex;
    justify-content: center;
    align-items: center;

    ${theme.media.mobile`
    flex-direction: column;  // 모바일에서는 수직 배치
  `}
`;

const InspectionContent = styled.div`

  width: 13.6875rem;
  //height: 13.25rem;
  //gap: 8rem;
  padding-top: 2.5rem; //40px;
  padding-bottom: 2.5rem; //40px;
  justify-content: center;

${theme.media.mobile`
    text-align: center;
  `}
`;

const InspectionTitle = styled.div`
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    text-align: left;
    color: #6487E2;

    ${theme.media.mobile`
    font-family: Pretendard;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.6875rem;
    text-align: center;
    color: #6487E2;

  `}
`;
const InspectionDescription = styled.div`
    width:100%;
    font-family: Pretendard;
    font-size: 1.625rem;
    font-weight: 700;
    line-height: 2.4375rem;
    color:black;
    
    ${theme.media.mobile`
    font-family: Pretendard;
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 2.0625rem;
    text-align: center;

  `}
`;

const DetailButton = styled.button`
  width: 100%;
  height: 2.75rem;
  //padding: 0 1.25rem 0 1.25rem;
  border-radius: 0.25rem;
  background: #6487E2;
  color: white;
  border:none;
  font-weight:700;
  ${theme.media.mobile`
  margin-bottom: 1.25rem;
  //position:relative;
  top:25rem;
  `}
`;

const Section = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background:white;
    width: 100%;
    gap: 2rem;

    ${theme.media.mobile`
    align-items: center;
  `}
`;

const MindSection = styled.div`
    display:flex;

    ${theme.media.mobile`
    display:flex;
    flex-direction:column;
    width: 21.125rem;
    padding: 1.5rem;
    
    `}
`;

const MindContent = styled.div`
  width: 17.1875rem;
  padding: 1.5rem;

  ${theme.media.mobile`
    display:flex;
    //margin: 2rem;
    flex-direction:column;
    
    `}

`;

const MindTitle = styled.div`
  font-family: Pretendard;
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 2.0625rem;
  text-align: left;
  color: #27282B;
`;

const MindDescription = styled.div`
  //width: 22.5rem;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.3125rem;
  text-align: left;
  color: #3F4045;
`;

const ResultsSection = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  color:black;
    
${theme.media.mobile`

flex-direction: column;
align-items: center;
gap: 30px;
flex-direction: column-reverse; // 모바일에서는 열 방향으로 변경하고 순서 반전
//padding: 1.5rem;

`}
`;

const ResultsContent = styled.div`
  //padding: 2.25rem;
  //width: 100%;

  ${theme.media.mobile`
  //padding: 2rem 3rem 2rem 3rem;
  border-radius: 21.29px;
  
  
`}
`;

const ResultsTitle = styled.h2`
font-family: Pretendard;
font-size: 1.375rem;
font-weight: 700;
line-height: 2.0625rem;
text-align: left;
${theme.media.mobile`
//styleName: title1/B;
width: 11.25rem;
font-family: Pretendard;
font-size: 1.125rem;
font-weight: 700;
line-height: 1.6875rem;
text-align: left;
`}
`;

const ResultsDescription = styled.p`
width: 22.5rem;
font-family: Pretendard;
font-size: 0.875rem;
font-weight: 600;
line-height: 1.3125rem;
text-align: left;
color: #3F4045;
${theme.media.mobile`

`}
`;

const Footer = styled.footer`
  width: 100%;
  background: #27282B;
  //padding: 4rem;
  ${theme.media.mobile`
`}
`;

const FooterTitle = styled.div`
font-family: Pretendard;
font-size: 1.375rem;
font-weight: 700;
line-height: 2.0625rem;
text-align: center;
color:white;
margin-top: 1.25rem;
margin-bottom: 1.25rem;
`;

const FooterContent = styled.div`
font-family: Pretendard;
font-size: 0.875rem;
font-weight: 600;
line-height: 1.3125rem;
text-align: center;
color:white;
//margin-bottom: 4.625rem;


`;

const PicDiv = styled.div`

${theme.media.mobile`
`}

`;

const FooterBox = styled.div`

`;

const TextBox = styled.div`

`;

