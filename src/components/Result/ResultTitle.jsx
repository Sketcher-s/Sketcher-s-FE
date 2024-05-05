
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

function ResultTitle() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState("이미지 분석 결과가 여기에 표시됩니다. 이미지의 세부 사항, 색상 분포, 감정 분석 등 다양한 정보를 제공할 수 있습니다.");
  const [error, setError] = useState('');

  const handleTitleChange = (event) => {
    const inputTitle = event.target.value;
    setTitle(inputTitle);

    if (inputTitle.length > 15) {
      setError('제목은 15자를 넘지 말아주세요.');
    } else if (!inputTitle) {
      setError('제목을 입력해주세요.');
    } else {
      setError('');
    }
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
        <ResultSection>
        <TitleInput
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="그림의 제목을 입력하세요"
            isError={error.length > 0}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <DrawResult>
            {image && (
              <img src={image} alt="Drawing for Analysis" style={{ width: '320px', height: '320px' }} />
            )}
          </DrawResult>
        </ResultSection>
    </div>
  );
}
export default ResultTitle;


const ResultSection = styled.div`
  width: 100%;
  ${theme.media.mobile`'
  
`}
`;

const TitleInput = styled.input`
  width: 650px;
  height: 30px;
  color: black;
  font-size: 26px;
  font-family: 'Pretendard-Regular';
  font-weight: bold;
  border: none; 
  border-bottom: 2px solid transparent; 

  &:focus {
    outline: none; 
    border-bottom: 2px solid #6487e2; 
  }
  border-bottom-color: ${props => props.isError ? 'red' : 'transparent'};
  &::placeholder {
    color: rgb(177, 178, 184);
  }
  ${theme.media.mobile`
    width: 298px;
    margin: 0 auto; // 가운데 정렬 추가
  `}
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 8px;
  font-weight: 200;
  ${theme.media.mobile`
  
`}
`;
const DrawResult = styled.div`
  margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
    ${theme.media.mobile`
    
    `}
  }
`;
