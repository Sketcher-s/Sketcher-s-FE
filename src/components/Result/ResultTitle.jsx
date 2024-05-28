import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

function ResultTitle() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const pictureId = '1';

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
    if (!error) {
      try {
        const token = 'your-authentication-token'; // 실제 인증 토큰을 사용하세요
        const response = await fetch('https://dev.catchmind.shop/api/picture/title', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ id: pictureId, title }),
        });
        if (response.ok) {
          console.log('Saved:', title);
          setIsEditing(false);
        } else {
          const responseBody = await response.json();
          console.error('Failed to save title:', responseBody);
          throw new Error(`Failed to save title, status: ${response.status}`);
        }
      } catch (error) {
        console.error('Failed to save title:', error);
      }
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(`https://dev.catchmind.shop/api/picture/${pictureId}`);
        if (response.ok) {
          const data = await response.json();
          setImage(data.imageUrl);
        } else {
          throw new Error(`Failed to fetch image, status: ${response.status}`);
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
          readOnly={!isEditing}
          isError={error.length > 0}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {!isEditing ? (
          <Button onClick={handleEdit}>수정</Button>
        ) : (
          <Button onClick={handleSave}>저장</Button>
        )}
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
    outline: none;
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
`;

const DrawResult = styled.div`
  margin: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.media.mobile`
    width:90%;
  `}
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #6487e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5371c9;
  }
`;
