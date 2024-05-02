import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import styled from 'styled-components';

function Draw() {
  //Ref를 사용하여 Signaturecanvas 컴포넌트에 접근한다.
  const signatureCanvasRef = useRef();

  //그림 저장 함수
  function saveSignature() {
    //toDataURL() 메서드를 사용하여 그림을 이미지로 변환
    const imageDataUrl = signatureCanvasRef.current.toDataURL();
    console.log(imageDataUrl); //이미지 데이터 출력

    //여기서 다른 작업 추가할것
  }

  return (
    <div>
      <Wrapper>
        <DrawingArea>
          <CanvasContainer>
            {/* 그림판 */}
            <SignatureCanvas ref={signatureCanvasRef} penColor="black" canvasProps={{ width: 482, height: 482 }} />
            </CanvasContainer>
        </DrawingArea>

        <ButtonContainer onClick={saveSignature}>완료</ButtonContainer>
      </Wrapper>

    </div>
  );
}

export default Draw;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #f3f3f6;
`;

const DrawingArea = styled.div`
  position: absolute;
  left: 211px;
  top: 116px;
  display: flex;
  flex-direction: row;
`;


const CanvasContainer = styled.div`
  width: 482px;
  height: 482px;
  background: white;
`;

const ButtonContainer = styled.div`

`;
