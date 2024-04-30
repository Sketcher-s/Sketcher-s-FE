import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { theme } from "../theme";

const ModalContainer = styled.div`
position :fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`
const ModalWrapper = styled.div`
background: white;
  border-radius: 0.25rem; // 4px to rem
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.media.mobile`
 width: 16rem;
 padding: 1.5rem;
 gap: 1rem;
`}

${theme.media.desktop`
 width: 20rem;
 padding: 2.5rem;
 gap: 1.875rem;
`}
`
// 텍스트 스타일 (공통 부분을 재사용)
const Text = styled.div`
  width: 19.375rem; // 310px to rem
  text-align: center;
  color: ${(props) => props.color || "#27282B"};
  font-family: 'Pretendard';
  font-weight: ${(props) => props.fontWeight || "700"};
  line-height: 1.5rem; // 24px to rem
  word-wrap: break-word;

  ${theme.media.mobile`
 font-size: 0.8rem;
`}

${theme.media.desktop`
font-size: 1rem;
`}

`;

// 버튼 스타일
const Button = styled.button`
  width: 10rem; // 160px to rem
  height: 2.75rem; // 44px to rem
  padding-left: 1.25rem; // 20px to rem
  padding-right: 1.25rem; // 20px to rem
  background: #6487E2;
  border-radius: 0.25rem; // 4px to rem
  justify-content: center;
  border: none;
`;

// 버튼 내부 텍스트 스타일
const ButtonText = styled(Text)`
  width: 7.5rem; // 120px to rem
  color: white;
`;



const Modal = ({close, title, message}) => {
<<<<<<< HEAD


=======
>>>>>>> 74fc19d (회원가입 UI 완성, 모달 생성, 중복체크 버튼 생성)
    return (
        <ModalContainer>
                <ModalWrapper>
                    <Text>{title}</Text>
                    <Text color='#3F4045' fontWeight="600">{message}</Text>
                    <Button onClick={close}>
                        <ButtonText>확인</ButtonText>
                    </Button>
                </ModalWrapper> 
            </ModalContainer>
    )
}

Modal.propTypes = {
  close: PropTypes.func.isRequired, // close prop이 함수 타입이며 필수라는 것을 명시
  title: PropTypes.string,
  message: PropTypes.string,
};

export default Modal;
