import { Container, HeaderWrapper, Header, HeaderTitle, HeaderButtons, Button, Text, Divider } from './NavbarStyle';
import React from 'react';

const NavbarNoMember = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header>
          <HeaderTitle>Catch Mind</HeaderTitle>
          <HeaderButtons>
            <Button width={62} background="#6487E2" border="1px #6487E2 solid" noMember>
              <Text color="white">검사하기</Text>
            </Button>
            <Button width={72} background="white" border="1px #6487E2 solid" noMember>
              <Text color="#6487E2">마이페이지</Text>
            </Button>
            <Button width={62} background="white" noMember>
              <Text color="#6487E2">로그아웃</Text>
            </Button>
          </HeaderButtons>
        </Header>
      </HeaderWrapper>
      <Divider />
    </Container>
  );
};


export default NavbarNoMember;
