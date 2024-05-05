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
  const [isMenu, setIsMenu] = useState(false);

  //상태값 저장
  const isMenuToggle = (event) => {
    if(isMenu) {
      setIsMenu(false);
    }else {
      setIsMenu(true);
    }
  };



  return (
    <div>
      <OutContainer>

          <DrawingArea>
          <Icon>
          <WEraser/>
          <WGoback/>
          <WPencil/>
          <WTrash/>
          <WAll/>
        </Icon>

          <CanvasContainer>
            {/* 그림판 */}
            <SignatureCanvas ref={signatureCanvasRef} penColor="black" canvasProps={{ width: 482, height: 482 }} />
            </CanvasContainer>

        </DrawingArea>

        <ButtonContainer onClick={handleDoneClick}>
          <Button>완료</Button>
        </ButtonContainer>
        
        <Description/>
      </OutContainer>

  </div>

  );
}

export default Draw;

const OutContainer = styled.div`
  // width: 100%;
  // height: 100%;
  // position: relative;
  // background: #f3f3f6;

  width: 100%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  display: inline-flex;
  background: #f3f3f6;
  border-radius: 10px;
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