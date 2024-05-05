import { Container, HeaderWrapper, Header, HeaderTitle, HeaderButtons, Button, Text, Divider } from './NavBarStyle';
import React from 'react';
import { useMediaQuery } from "react-responsive";
import { FiMenu } from "react-icons/fi";
import PropTypes from 'prop-types';

const NavbarNoMember = ({toggleSidebar}) => {
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
          )}
        </Header>
      </HeaderWrapper>
      <Divider />
    </Container>
  );
};

export default NavbarNoMember;

NavbarNoMember.propTypes = {
  toggleSidebar: PropTypes.bool.isRequired, // width prop이 숫자 타입이며 반드시 필요함을 명시
};