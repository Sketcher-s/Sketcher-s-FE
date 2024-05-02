import React, {useState} from "react";
import { Container, HeaderWrapper, Header, HeaderTitle, HeaderButtons, Button, Text, Divider } from './NavbarStyle';
import { useMediaQuery } from "react-responsive";
import { FiMenu } from "react-icons/fi";
import PropTypes from 'prop-types';

const Navbar = ({toggleSidebar}) => {
  const isMobile = useMediaQuery({maxWidth: 767});
  
  return (
    <Container>
      <HeaderWrapper>
        <Header>
          <HeaderTitle>Catch Mind</HeaderTitle>
          {isMobile ? (
            <FiMenu size="20" color="#5678BE" onClick={toggleSidebar}/>
          ) : (
            <HeaderButtons>
            <Button width={52}>
              <Text>로그인</Text>
            </Button>
            <Button width={62}>
              <Text>회원가입</Text>
            </Button>
          </HeaderButtons>
          )}
        </Header>
      </HeaderWrapper>
      <Divider />
    </Container>
  );
};


export default Navbar;

Navbar.propTypes = {
  toggleSidebar: PropTypes.bool.isRequired, // width prop이 숫자 타입이며 반드시 필요함을 명시
};
