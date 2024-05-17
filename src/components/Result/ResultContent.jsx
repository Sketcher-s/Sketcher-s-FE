import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {theme} from '../../theme';

function ResultContent() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState("이미지 분석 결과가 여기에 표시됩니다. 이미지의 세부 사항, 색상 분포, 감정 분석 등 다양한 정보를 제공할 수 있습니다.");

  const [isOpen, setIsOpen] = useState({
    htp: false,
    analysis: false
  });

  const toggleSection = section => {
    setIsOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };
  
  useEffect(() => {
    fetch('https://source.unsplash.com/random')
    .then(response => {
      setImage(response.url);  // 서버로부터 받은 이미지 URL 상태에 저장
    })
    .catch(error => console.error('Failed to load image:', error));


    // 이미지 분석 결과 로드
    fetch('https://api.example.com/analyze-image') // 분석 결과를 제공하는 API
      .then(response => response.json())
      .then(data => {
        setAnalysisResult(data.result);  // 분석 결과를 상태에 저장
      })
      .catch(error => console.error('Failed to load analysis result:', error));
  }, []);

  return (
    <div>
        <Resultcontent>
          <ContentTitle>검사 결과 상세 내용</ContentTitle>
          <Content>{analysisResult || "분석 결과를 불러오는 중입니다..."}</Content>
        
        <Accordion>
          <AccordionHeader onClick={() => toggleSection('htp')}>
            HTP 그림 검사 유의사항
            <Icon isOpen={isOpen.htp} />
          </AccordionHeader>
          <AccordionBody isOpen={isOpen.htp}>
          HTP 그림 심리 검사는 개인의 심리 상태를 탐색하고 이해하는 데 중요한 도구입니다. 그러나 이 검사 결과에만 의존하기보다는, 다양한 접근을 통해 마음을 이해하려는 노력도 함께해 주시기 바랍니다. 아이의 마음을 더 깊이 이해하기 위해서는 시간을 두고 여러 차례에 걸쳐 검사를 해보는 것이 좋습니다
          </AccordionBody>
          </Accordion>
      <Accordion>
        <AccordionHeader onClick={() => toggleSection('analysis')}>
          검사 결과 이미지에 대한 안내
          <Icon isOpen={isOpen.analysis} />
        </AccordionHeader>
        <AccordionBody isOpen={isOpen.analysis}>
        검사를 통해 얻은 결과는 오직 AI 모델 학습에만 사용됩니다. 여러분의 개인 데이터는 이외의 어떠한 목적으로도 사용되지 않음을 약속드립니다.
        </AccordionBody>
      </Accordion>
        </Resultcontent>
    </div>
  );
}
export default ResultContent;


const Resultcontent = styled.div`
${theme.media.mobile`
    width: 18.625rem;
    margin: 0 auto; // 가운데 정렬 추가

`}
`;
const ContentTitle = styled.p`
  padding-bottom:1.25rem;
  //styleName: title2/B;
font-family: Pretendard;
font-size: 1rem;
font-weight: 700;
line-height: 1.5rem;
text-align: left;
color:#6487E2;

  ${theme.media.mobile`
 
  `}
`;
const Content = styled.p`
  width: 100%;
  padding-bottom:1.25rem;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  text-align: justified;
  color:#3F4045;  
  ${theme.media.mobile`

  
  `}

`
const Accordion = styled.div`
  width: 100%;
  border: 0.0625rem solid #96B5F3;
  border-radius:0.625rem;
  margin-bottom:1.25rem;
  ${theme.media.mobile`
    width:298px;


  `}
`;
const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.625rem 1.25rem 1.625rem;
  color:#4D4F56;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  text-align: left;

`;

const Icon = styled.span`
  border: solid #96B5F3;
  border-width: 0 0.125rem 0.125rem 0;
  padding: 0.1875rem;
  transform: ${props => props.isOpen ? 'rotate(-135deg)' : 'rotate(45deg)'};
`;

const AccordionBody = styled.div`
  padding: 1.25rem 1.625rem;
  font-size: 0.875rem;
  color: #666;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;