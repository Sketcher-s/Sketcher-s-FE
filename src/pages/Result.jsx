import ResultButton from '../components/Result/ResultButton';
import ResultContent from '../components/Result/ResultContent';
import { theme } from '../theme';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [id ,setId] = useState(0);
  const [image, setImage] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(true);

 
  useEffect(() => {
    const fetchPictureDetails = async () => {
      try {
        console.log("location.state:", location.state);
        setImage(location.state?.response?.pictureDto?.imageUrl);
      } catch (error) {
        console.error("오류");
      }
    };

    fetchPictureDetails();
  }, [location]);
  
  const handleTitleChange = (event) => {
      setTitle(event.target.value);
      validateTitle(event.target.value);
  };

  const validateTitle = (inputTitle) => {
      if (inputTitle.length > 15) {
          setError('제목은 15자를 넘지 말아주세요.');
      } else if (!inputTitle) {
          setError('제목을 입력해주세요.');
      } else {
          setError('');
      }
  };

  const handleSave = async () => {
      setIsEditing(false);
  };
  const handleEdit = async () => {
    const jwtToken = localStorage.getItem('jwtToken');  // 로컬 스토리지에서 토큰을 가져옵니다.
  
    if (!jwtToken) {
      console.error('Authentication token is not available');
      alert('로그인이 필요합니다.');
      return;  // 토큰이 없으면 함수를 더 이상 진행하지 않습니다.
    }
  
    try {
      const response = await fetch(`https://dev.catchmind.shop/api/picture/title`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`  // 헤더에 토큰을 포함시킵니다.
        },
        body: JSON.stringify({
          id: id,   // 수정할 그림의 ID
          title: title // 새로운 제목
        })
      });
  
      const responseData = await response.json();
      console.log('PATCH response:', responseData);  // 성공 응답 로깅
    } catch (error) {
      console.error('Error updating title:', error);  // 오류 로깅
    }
  
    setIsEditing(true);  // 편집 모드 종료
  };
  
  
  return (
    <div>
      <Wrapper>
        <DrawingSection>
        <ResultSection>
              <TitleSection>
                <TitleInput
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="그림의 제목을 입력하세요"
                    readOnly={!isEditing}
                    isError={error.length > 0}
                    
                />
                <Button onClick={!isEditing ? handleEdit : handleSave}>
                {!isEditing ? "수정" : "저장"}
              </Button>
              </TitleSection>
              {error && <ErrorMessage>{error}</ErrorMessage>}
                <DrawResult>
                  {image && <StyledImage src={image} alt="Drawing for Analysis" />}
                </DrawResult>
                <AnalysisResult>{analysisResult}</AnalysisResult>
            </ResultSection>
          <ResultContent/>
          <ResultButton/>
        </DrawingSection>
      </Wrapper>
    </div>
  );
}
export default Result;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background: #f3f3f6;
  display: flex;
  flex-direction: column;
  align-items: center; // 중앙 정렬
  justify-content: center; // 중앙 정렬
  padding: 20px 0; // 상하 패딩
  ${theme.media.mobile`
    padding: 15px 10px; // 모바일에서 패딩 조정
  `}
`;

const DrawingSection = styled.div`
  width: 70%; // 기본 화면에서의 너비
  height: auto;
  justify-content: center;
  background: white;
  border-radius: 0.8rem;
  margin-top:2rem;
  padding: 3rem 5rem; // 데스크탑에서의 패딩
  ${theme.media.mobile`  
  width: 60%; // 기본 화면에서의 너비
    padding: 30px 20px; // 모바일에서 패딩 조정
    margin-bottom: 30px; // 하단 마진 추가
  `}
`;
const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;  // 내부 요소를 양쪽 끝으로 정렬합니다.
`;

const ResultSection = styled.div`
  width: 100%;
`;

const TitleInput = styled.input`
  width: 90%;
  height: 1.875rem;
  font-size: 1.625rem;
  font-weight: bold;
  border: none;
  border-bottom: 0.125rem solid transparent;
  &:focus {
    outline: none;
    border-bottom: 0.125rem solid #6487e2;
  }
  border-bottom-color: ${props => props.isError ? 'red' : 'transparent'};
  &::placeholder {
    color: rgb(177, 178, 184);
    ${theme.media.mobile`
      font-size: 0.9rem;
    `}
  }
  ${theme.media.mobile`
    width:90%;
  `}
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;

`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  font-weight: 200;
`;

const DrawResult = styled.div`
  margin: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #E0E1E9
  ${theme.media.mobile`
    width:90%;
  `}
`;

const AnalysisResult = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  color: #3F4045;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #6487e2;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #5371c9;
  }

`;

