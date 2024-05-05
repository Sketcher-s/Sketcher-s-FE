import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {IoCloseOutline} from 'react-icons/io5';
import { ReactComponent as User } from '../assets/images/user.svg';

const Background = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const SideContainer = styled.div`
position: fixed;
  top: 0;
  right: ${(props) => (props.show ? '0' : '-60%')}; // show가 true일 때 0, 아니면 -250px
  width: 60%;
  height: 100%;
  background: white;
  transition: right 0.3s ease; // 부드러운 전환 효과
  gap: 0.625rem;
  box-shadow: -2px 0 5px rgba(0,0,0,0.5);
`
const InnerContainer = styled.div`
width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem; /* 16px */
  display: flex;
  margin-top: 6rem;
`;

const Content = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25rem; /* 20px */
  display: flex;
`;

const IconContainer = styled.div`
  justify-content: flex-end;
  align-items: center;
  display: flex;
`;

const Icon = styled.div`
  width: 3.75rem; /* 60px */
  height: 3.75rem; /* 60px */
  background: #F3F3F6;
  border-radius: 9999rem;
  border: 0.1025rem solid #F3F3F6; /* 1.64px */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.div`
  width: 100%; /* 228px */
  height: 0;
  border: 0.0625rem solid #E0E1E9; /* 1px */
`;

const LinkContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.125rem; /* 2px */
  display: flex;
`;

const Link = styled.div`
  width: 11.125rem; /* 178px */
  padding: 0.625rem 0; /* 10px 0 */
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem; /* 10px */
  display: inline-flex;
  color: ${(props) => props.color || '#3F4045'};
  font-size: 1rem; /* 16px */
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 1.5rem; /* 24px */
  word-wrap: break-word;
`;

const Email = styled.div`
  width: 11.25rem; /* 180px */
  color: #3F4045;
  font-size: 1rem; /* 16px */
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 1.5rem; /* 24px */
  word-wrap: break-word;
`;

const CloseContainer = styled.div`
position: absolute;
right: 1rem;
top: 3rem;
`;

const Sidebar = ({isOpen, toggle}) => {
    return (
      <>
      <Background show={isOpen} onClick={toggle}/>
        <SideContainer show={isOpen}>
        <InnerContainer>
          <CloseContainer onClick={toggle}>
              <IoCloseOutline size='30' color='#97999F'/>
          </CloseContainer>
          <Content>
            <IconContainer>
                <Icon><User/></Icon> 
            </IconContainer>
            <Email>qwer@naver.com</Email>
          </Content>
          
          <Divider />
          <LinkContainer>
            <Link color="#6487E2">검사하기</Link>
            <Link>마이페이지</Link>
            <Link>로그아웃</Link>
          </LinkContainer>
        </InnerContainer>
      </SideContainer>
      </>
      );
}

export default Sidebar;

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.object,
  };