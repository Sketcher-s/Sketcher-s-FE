//import React from 'react';
import React, {useState,} from 'react';
import styled from 'styled-components';
import spinner from '../../assets/Draw/spinner.gif';
import Modal from '../Modal';
import Scan from './Scan';
import { theme } from '../../theme';


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
    <TexDiv>
    <Text>검사 결과를 기다리고 있어요!</Text>
    </TexDiv>
    </TContainer>

    <DrawingArea>

    <CanvasContainer>
      {/* 그림판 */}
      {/* <SignatureCanvas ref={signatureCanvasRef} penColor="black" canvasProps={{ width: 482, height: 482 }} /> */}
      <EXImage src={`${process.env.PUBLIC_URL}/assets/ExPic.png`} alt="사진에시"/>
      </CanvasContainer>

    </DrawingArea>
    <Scan/>
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
  width: 100%;
  height: 100%;
  padding-top: 2.5rem; //40px;
  padding-bottom: 2.5rem; //40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem; //40px;
  display: flex;
  background: #f3f3f6;
  position: relative;
  overflow: hidden;
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


  ${theme.media.mobile`
    font-size: 1.125rem;
    align-items: center;
    justify-content: center;
  `}
`;


const CanvasContainer = styled.div`
  width: 20rem; //482px;
  height: 24.625rem; //482px;

  ${theme.media.mobile`
  width: 18.625rem;
  height: 23.375rem;
  `}
`;


const EXImage = styled.img`
  // width: 20rem; //482px;
  // height: 24.625rem; //482px;
`;

const TexDiv = styled.div`
  // width: 20rem; //482px;
  // height: 24.625rem; //482px;

  ${theme.media.mobile`
  text-align: center;
`}
`;