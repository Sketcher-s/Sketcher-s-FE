import React, { useRef, useState } from 'react';
//import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as WEraser } from '../../assets/Draw/WEraser.svg';
import { ReactComponent as WGoback } from '../../assets/Draw/WGoback.svg';
import { ReactComponent as WPencil } from '../../assets/Draw/WPencil.svg';
import { ReactComponent as WTrash } from '../../assets/Draw/WTrash.svg';
import { ReactComponent as WAll } from '../../assets/Draw/WAll.svg';
import Description from '../Draw/Description';
import Bar from '../Draw/Bar';

import { ReactComponent as Shape } from '../../assets/Draw/Shape.svg';
import { ReactComponent as Rectangle } from '../../assets/Draw/Rectangle.svg';


function Draw() {
  // Ref를 사용하여 Signaturecanvas 컴포넌트에 접근한다.
  const signatureCanvasRef = useRef();

  // 버튼 클릭했을 때 화면 이동
  const Navigate = useNavigate();

  function handleDoneClick() {
    Navigate('/Loading');
  }

  // 버튼 클릭시 그림 저장 및 화면 이동
  const handleButtonClick = () => {
    saveSignature();
    handleDoneClick();
  };

  // 그림 저장 함수
  function saveSignature() {
    // toDataURL() 메서드를 사용하여 그림을 이미지로 변환
    const imageDataUrl = signatureCanvasRef.current.toDataURL();
    console.log(imageDataUrl); // 이미지 데이터 출력
  }

  //토글 구현
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  //Description <-> Bar 토글 버튼 클릭 시 상태 변경
  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  // BarBox 클릭 시 Description 토글
  const toggleBarBox = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };





  return (
    <Wrap>
      <OutContainer>

          <DrawingArea>

        <Icon>
          
        <StyledWrapper>
          <WPencil/>
        </StyledWrapper>

        <StyledWrapper>
          <WAll/>
        </StyledWrapper>

        <StyledWrapper>
          <WEraser/>
        </StyledWrapper>

        <StyledWrapper>
          <WGoback/>
        </StyledWrapper>

        <StyledWrapper>
          <WTrash/>
        </StyledWrapper>

        </Icon>

          <CanvasContainer>
            {/* 그림판 */}
            <SignatureCanvas ref={signatureCanvasRef} penColor="black" canvasProps={{ width: 482, height: 482 }} />
            </CanvasContainer>

        </DrawingArea>

        <ButtonContainer onClick={handleDoneClick}>
          <Button>완료</Button>
        </ButtonContainer>

      </OutContainer>

      {/* <Description/> */}
      {!isDescriptionVisible && (
      <BarBox onClick={toggleDescription}>
          <StyledShape>
            <Shape/>
          </StyledShape>

          <StyledRectangle>
            <Rectangle/>
          </StyledRectangle>
        </BarBox>
      )}

{isDescriptionVisible && <Description onClick={toggleBarBox} />}



    </Wrap>

  );
}

export default Draw;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between; /* 컨테이너 사이의 여백을 최대로 확보하여 내부 요소를 양쪽으로 분산 배치 */
`;

const OutContainer = styled.div`
  width: 100%;
  //height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  display: inline-flex;
  background: #f3f3f6;
`;

const Icon = styled.div`
  left: 211px;
  top: 116px;
  display: flex;
  flex-direction: column;
`;

const DrawingArea = styled.div`
  left: 211px;
  top: 116px;
  display: flex;
  flex-direction: row;
`;


const CanvasContainer = styled.div`
  width: 482px;
  height: 482px;
  background: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.04);
`;

const ButtonContainer = styled.div`
  width: 160px;
  height: 44px; 
  padding-left: 20px;
  padding-right: 20px;
  background: #6487E2;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

const Button = styled.div`
  width: 120px;
  text-align: center;
  color: white;
  font-size: 16px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 24px
  word-wrap: break-word;
`;



// 스타일 컴포넌트 정의
const StyledWrapper = styled.div`
  width: 20px;
  height: 20px;
  padding: 10px;
  background: white;
  box-shadow: 0px 4px 4px rgba(39, 40, 43, 0.10);
  border-radius: 300px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  margin-right: 20px;
  margin-bottom: 16px;
`;

const BarBox = styled.div`
  width: 20px;
  height: 70px;
  position: absolute;
  top: 50%; /* 상단 위치를 중앙으로 조정 */
  transform: translateY(-50%); /* 세로 중앙 정렬을 위한 변환 */
  right: 0; /* 오른쪽 정렬 */
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  boarder-radius: none;
`;

const StyledShape = styled.div`
position: absolute;
z-index: 2;
`;

const StyledRectangle = styled.div`
position: relative;
z-index: 1;
`;

