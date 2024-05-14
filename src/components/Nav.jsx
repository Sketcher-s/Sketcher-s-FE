import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, HeaderWrapper, Header, HeaderTitle, HeaderButtons, Button, Text, Divider } from './NavbarStyle';

const Navbar = () => {
  const navigate = useNavigate();
  const moveToLogin = () => {
    navigate('/login');
  };
  const moveToRegister = () => {
    navigate('/register');
  }

  return (
    <Container>
      <HeaderWrapper>
        <Header>
          <HeaderTitle>Catch Mind</HeaderTitle>
          <HeaderButtons>
            <Button width={52} issignup={false} onClick={moveToLogin}>
              <Text>로그인</Text>
            </Button>
            <Button width={62} issignup={true} onClick={moveToRegister}>
              <Text>회원가입</Text>
            </Button>
          </HeaderButtons>
        </Header>
      </HeaderWrapper>
      <Divider />
    </Container>
  );
};


export default Navbar;