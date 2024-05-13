import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as WEraser } from '../../assets/Draw/WEraser.svg';
import { ReactComponent as WGoback } from '../../assets/Draw/WGoback.svg';
import { ReactComponent as WPencil } from '../../assets/Draw/WPencil.svg';
import { ReactComponent as WTrash } from '../../assets/Draw/WTrash.svg';
import { ReactComponent as WAll } from '../../assets/Draw/WAll.svg';
import { ReactComponent as BEraser } from '../../assets/Draw/BEraser.svg';
import { ReactComponent as BGoback } from '../../assets/Draw/BGoback.svg';
import { ReactComponent as BPencil } from '../../assets/Draw/BPencil.svg';
import { ReactComponent as BTrash } from '../../assets/Draw/BTrash.svg';
import { ReactComponent as BAll } from '../../assets/Draw/BAll.svg';
import Description from '../Draw/Description';
import { ReactComponent as Shape } from '../../assets/Draw/Shape.svg';
import { ReactComponent as Rectangle } from '../../assets/Draw/Rectangle.svg';



function Draw() {
  // Ref를 사용하여 Signaturecanvas 컴포넌트에 접근한다.
  const signatureCanvasRef = useRef();

  // 버튼 클릭했을 때 화면 이동
  const Navigate = useNavigate();

  function handleDoneClick() {
    Navigate('/loading');
  }

  // 완료 버튼 클릭시 그림 저장 및 화면 이동 :아직 미구현
  const handleButtonClick = () => {
    saveSignature();
    handleDoneClick();
  };

  // 그림 저장 함수 : 아직 미구현
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

  //각 버튼 클릭시 버튼 변경
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  // 버튼 클릭 시 상태 변경 함수
  // const handleClick = () => {
  //   setIsButtonClicked(!isButtonClicked); // 현재 버튼 상태를 반전
  // };
  const handleClick = (buttonName) => {
    setIsButtonClicked(buttonName === isButtonClicked ? null : buttonName); // 현재 클릭된 버튼이면 상태를 null로 변경하고 아니면 버튼 이름으로 변경
  };


  return (
    <Wrap>
      <OutContainer>

          <DrawingArea>

        <Icon>

        {/* WPencil 버튼 */}
      {isButtonClicked !== 'WPencil' ? (
        <WStyledWrapper>
          <WPencil onClick={() => handleClick('WPencil')} />
        </WStyledWrapper>
      ) : (
        <BStyledWrapper>
          <BPencil onClick={() => handleClick('WPencil')} />
        </BStyledWrapper>
      )}


      {/* BEraser 버튼 */}
      {isButtonClicked !== 'WEraser' ? (
        <WStyledWrapper>
          <WEraser onClick={() => handleClick('WEraser')} />
        </WStyledWrapper>
      ) : (
        <BStyledWrapper>
          <BEraser onClick={() => handleClick('WEraser')} />
        </BStyledWrapper>
      )}

      {/* BGoback 버튼 */}
      {isButtonClicked !== 'WGoback' ? (
        <WStyledWrapper>
          <WGoback onClick={() => handleClick('WGoback')} />
        </WStyledWrapper>
      ) : (
        <BStyledWrapper>
          <BGoback onClick={() => handleClick('WGoback')} />
        </BStyledWrapper>
      )}

      {/* BTrash 버튼 */}
      {isButtonClicked !== 'WTrash' ? (
        <WStyledWrapper>
          <WTrash onClick={() => handleClick('WTrash')} />
        </WStyledWrapper>
      ) : (
        <BStyledWrapper>
          <BTrash onClick={() => handleClick('WTrash')} />
        </BStyledWrapper>
      )}

      {/* BAll 버튼 */}
      {isButtonClicked !== 'WAll' ? (
        <WStyledWrapper>
          <WAll onClick={() => handleClick("WAll")} />
        </WStyledWrapper>
      ) : (
        <BStyledWrapper>
          <BAll onClick={() => handleClick('WAll')} />
        </BStyledWrapper>
      )}

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
  padding-top: 2.5rem; //40px;
  padding-bottom: 2.5rem; //40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.875rem; // 30px;
  display: inline-flex;
  background: #f3f3f6;
  border-radius: 10px;
  overflow: hidden;
`;

const Icon = styled.div`
  left: 13.1875rem; //211px;
  top: 7.25rem; //116px;
  display: flex;
  flex-direction: column;
`;


const DrawingArea = styled.div`
  left: 13.1875rem; //211px;
  top: 7.25rem; //116px;
  display: flex;
  flex-direction: row;
`;


const CanvasContainer = styled.div`
  width: 30.125rem; //482px;
  height: 30.125rem; //482px;
  background: white;
  box-shadow: 0.3125rem 0.3125rem 0.625rem rgba(0, 0, 0, 0.04);
`;

const ButtonContainer = styled.div`
  width: 10rem; //160px;
  height: 2.75rem; //44px; 
  padding-left: 1.25rem; //20px;
  padding-right: 1.25rem; //20px;
  background: #6487E2;
  border-radius: 0.25rem; //4px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

const Button = styled.div`
  width: 7.5rem; //120px;
  text-align: center;
  color: white;
  font-size: 1rem; //16px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 1.5rem; //24px
  word-wrap: break-word;
`;



// 스타일 컴포넌트 정의
const WStyledWrapper = styled.div`
  width: 1.25rem; //20px;
  height: 1.25rem; //20px;
  padding: 0.625rem; //10px;
  background: white;
  box-shadow: 0rem 0.25rem 0.25rem rgba(39, 40, 43, 0.10);
  border-radius:18.75rem; //300px;
  justify-content: center;
  align-items: center;
  gap: 0.625rem; //10px;
  display: inline-flex;
  margin-right: 1.25rem; //20px;
  margin-bottom: 1rem; //16px;
`;

const BStyledWrapper = styled.div`
  width: 1.25rem; //20px;
  height: 1.25rem; //20px;
  padding: 0.625rem; //10px;
  background: #6487E2;
  box-shadow: 0rem 0.25rem 0.25rem rgba(39, 40, 43, 0.10);
  border-radius:18.75rem; //300px;
  justify-content: center;
  align-items: center;
  gap: 0.625rem; //10px;
  display: inline-flex;
  margin-right: 1.25rem; //20px;
  margin-bottom: 1rem; //16px;
`;

const BarBox = styled.div`
  width: 1.25rem; //20px;
  height: 4.375rem; //70px;
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

