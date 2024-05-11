//import React from 'react';
import React, {useState,} from 'react';
import styled from 'styled-components';
import spinner from '../../assets/Draw/spinner.gif';
//import Picture from '../../assets/Draw/Picture.png'
import Modal from '../Modal';

export default function Loading() {

    const [modalOpen, setModalOpen] = useState(false); // 모달의 열림/닫힘 상태를 관리합니다.
 
  const handleModalOpen = () => {
    setModalOpen(true); // 모달을 열기 위해 상태를 변경하는 함수
  };

  const handleModalClose = () => {
    setModalOpen(false);
  }


  return (
    <div>
        
    <OutContainer onClick={handleModalOpen}>

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

    {/* 모달을 열기 위한 버튼 */}
{modalOpen && (
        <Modal
          title="그림 확인이 필요해요 !"
          message="집, 나무, 사람이 제대로 그려졌는지 확인해주세요."
          close={handleModalClose} // 모달을 닫는 핸들러를 전달합니다.
        />
      )}
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
  padding-top: 2.5rem; //40px;
  padding-bottom: 2.5rem; //40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem; //40px;
  display: inline-flex;
  background: #f3f3f6;
`;

const DrawingArea = styled.div`
  left: 13.1875rem; //211px;
  top: 7.25rem; //116px;
  display: flex;
  flex-direction: row;
`;

const TContainer = styled.div`
width: 100%;
height: 100%;
padding-top: 2.5rem; //40px;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 0.875rem; //14px;
display: inline-flex;
`;

const Spinner = styled.img`
  width: 1.375rem; //22px;
  height: 1.375rem; //22px;
`;

const Text = styled.div`
  width: 18.5rem; //296px;
  height: 2.4375rem; //39px;
  color: #3F4045;
  font-size: 1.625rem; //26px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  line-height: 2.4375rem; //39px;
  word-wrap: break-word;
`;


const CanvasContainer = styled.div`
  width: 30.125rem; //482px;
  height: 30.125rem; //482px;
  background: white;
  box-shadow: 0.3125rem 0.3125rem 0.625rem rgba(0, 0, 0, 0.04);
`;