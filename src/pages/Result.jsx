import ResultButton from '../components/Result/ResultButton';
import ResultContent from '../components/Result/ResultContent';
import { theme } from '../theme';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation ,useNavigate} from 'react-router-dom';

function Result() {
  const location = useLocation();
  const Navigate = useNavigate();
  const [title, setTitle] = useState(location.state?.response?.pictureDto?.title); // 초기값은 이름을 입력해주세요. 마이페이지에서 왔으면, title 값 유지하고 있어야 함
  const [id ,setId] = useState(0);
  const [image, setImage] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const [error, setError] = useState('');
  const isFromMyPage = location.state?.response?.fromMyPage ?? false;
  const [isEditing, setIsEditing] = useState(!isFromMyPage);  
  const jwtToken = localStorage.getItem('jwtToken');  // 로컬 스토리지에서 토큰을 가져옵니다.
  const pictureId = location.state?.response?.pictureDto?.id;

  function handleMyPageClick() {
    Navigate('/mypage', { state: { id: id, title: title } });
  }
  function handleMainClick() {
    Navigate('/');
  }
  useEffect(() => {
    console.log("fromePage",location.state?.fromMyPage);
    console.log(location.state); // 전체 state 로깅
    if (location.state?.fromMyPage) {
      setIsEditing(false);  // 마이페이지에서 온 경우
    } else {
      setIsEditing(true);  // 다른 경우 (기본 설정)
    }
  }, [location.state]);
  useEffect(() => {
    const fetchPictureDetails = async () => {
      if (!jwtToken) {
        console.error('Authentication token is not available');
        return;  
      }
      try {
        const response = await fetch(`https://dev.catchmind.shop/api/picture/${pictureId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${jwtToken}`  // 헤더에 토큰을 포함시킵니다.
          }
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const responseData = await response.json();
        if (responseData && responseData.pictureDto) {
          setImage(responseData.pictureDto.imageUrl);
          console.log('Get response:', responseData);  // 성공 응답 로깅
        } else {
          throw new Error('No valid response data');
        }
      } catch (error) {
        console.error('데이터받아오는거 결과값', error);  // 오류 로깅
      }
    };
  
    fetchPictureDetails();
  }, [jwtToken, pictureId,location.state]);  // 의존성 배열에 jwtToken과 pictureId 추가
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
    if (!jwtToken) {
      console.error('토큰오류임');
      return;
    }

    try {
      const response = await fetch(`https://dev.catchmind.shop/api/picture/title`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify({ id: pictureId, title: title })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
  
      
    } catch (error) {
      console.error('Error updating title:', error);
    }
    setIsEditing(false);
};

  const handleEdit = async () => {
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
          <ButtonBox>
        <MainButtonBox >
            <MainButton onClick={handleMainClick}>메인페이지로 이동</MainButton>
          </MainButtonBox>
        <MyPageButtonBox >
            <MyPageButton onClick={handleMyPageClick}>마이페이지로 이동</MyPageButton>
          </MyPageButtonBox>
        </ButtonBox>
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
    width:80%;
    font-size: 0.9rem;
  `}
`;
const StyledImage = styled.img`
  width: 75%;
  height: 80%;
  border: 1px solid #E0E1E9
  ${theme.media.mobile`
  width:100%;
  height: 100%;
`}

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
  width:3rem;
  background-color: #6487e2;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #5371c9;
  }

  ${theme.media.mobile} {
    padding: 0.6rem 1rem; 
    font-size: 0.2rem; 
  }

`;
const ButtonBox = styled.div`
  display: flex;
  gap: 3.125rem; /* 버튼 간격 */
  justify-content: center;
  align-items: center;
  margin-top: 3.25rem;
  margin-bottom:2.5rem;
  ${theme.media.mobile`
  flex-direction:column;
  `}
`;

const MyPageButtonBox = styled.div`
  width: 10rem;
  height: 2.75rem;
  padding: 0 1.25rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid #6487e2;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.media.mobile`
  width:80%;
  margin-top:-1.875rem;
  `}
`;

const MyPageButton = styled.div`
  width: 7.5rem;
  text-align: center;
  color: #6487e2;
  font-size: 0.9rem;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 1.5rem;
  word-wrap: break-word;
  cursor: pointer;

`;

const MainButton = styled.div`
  width: 7.5rem;
  text-align: center;
  color: white;
  font-size: 0.9rem;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 1.5rem;
  word-wrap: break-word;
  cursor: pointer;
  
`;

const MainButtonBox = styled.div`
  width: 10rem;
  height: 2.75rem;
  padding: 0 1.25rem;
  background: #6487e2;
  border-radius: 0.25rem;
  border: 0.0625rem solid #6487e2;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.media.mobile`
  width:80%;
  `}
`;