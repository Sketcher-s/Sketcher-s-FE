import React from 'react';
import styled from 'styled-components';
import spinner from '../../assets/Draw/spinner.gif';
//import Picture from '../../assets/Draw/Picture.png'

export default function Loading() {


  return (
    <div>
        
    <OutContainer>

    <TContainer>
    <Spinner src={spinner} alt="로딩중" width="5%" />
    <Text>검사 결과를 기다리고 있어요!</Text>
    </TContainer>

    <DrawingArea>

    <CanvasContainer>
      {/* 그림판 */}
      {/* <SignatureCanvas ref={signatureCanvasRef} penColor="black" canvasProps={{ width: 482, height: 482 }} /> */}
      </CanvasContainer>

    </DrawingArea>

    </OutContainer>
</div>
  );
}

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
  gap: 40px;
  display: inline-flex;
  background: #f3f3f6;
`;

const DrawingArea = styled.div`
  left: 211px;
  top: 116px;
  display: flex;
  flex-direction: row;
`;

const TContainer = styled.div`
width: 100%;
height: 100%;
padding-top: 40px;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 14px;
display: inline-flex;
`;

const Spinner = styled.img`
  width: 22px;
  height: 22px;
`;

const Text = styled.div`
  width: 296px;
  height: 39px;
  color: #3F4045;
  font-size: 26px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 39px;
  word-wrap: break-word;
`;


const CanvasContainer = styled.div`
  width: 482px;
  height: 482px;
  background: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.04);
`;