import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

function ResultTitle() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState("이미지 분석 결과가 여기에 표시됩니다. 이미지의 세부 사항, 색상 분포, 감정 분석 등 다양한 정보를 제공할 수 있습니다.");
  const [error, setError] = useState('');
  const pictureId = '1';
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
    const loadImage = async () => {
      try {
        const response = await fetch(`https://dev.catchmind.shop/api/picture/${pictureId}`); // 이미지 가져오기
        if (response.ok) {
          const data = await response.json();
          setImage(data.imageUrl);
        } else {
          throw new Error('Failed to fetch image');
        }
      } catch (error) {
        console.error('Failed to load image:', error);
      }
    };
    loadImage();
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
              <img src={image} alt="Drawing for Analysis" style={{ width: '40%', height: '40%' }} />
            )}
          </DrawResult>
        </ResultSection>
    </div>
  );
}
export default ResultTitle;


const ResultSection = styled.div`
  width: 100%;
  
`;

const TitleInput = styled.input`
width: 100%;
height: 1.875rem;
font-size: 1.625rem;
font-weight: bold;
border: none;
border-bottom: 0.125rem solid transparent;

&:focus {
  outline: none;  // 포커스 시 외곽선 제거
    border-bottom: 0.125rem solid #6487e2;
  }
  border-bottom-color: ${props => props.isError ? 'red' : 'transparent'};
  &::placeholder {
    color: rgb(177, 178, 184);
   ${theme.media.mobile`
      font-size: 1rem;
    `}
  }
  ${theme.media.mobile`
    width:90%;
  `}
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  font-weight: 200;
`

const DrawResult = styled.div`
  margin: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.media.mobile`
    width:90%;
  `}
`;