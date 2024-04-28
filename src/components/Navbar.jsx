import styled from 'styled-components';
import { theme } from '../theme';

const Container = styled.div``;

const HeaderWrapper = styled.div`
height: 100%
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;
const Header = styled.div`
  max-width: 100%;
  margin: 0;
  padding: 1rem 1.25rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${theme.media.mobile`
  padding: 1rem;
`}
`;

const HeaderTitle = styled.div`
  text-align: center;
  color: #5678be;
  font-family: 'Montserrat';
  font-weight: 400;
  word-wrap: break-word;
  ${theme.media.mobile`
  font-size: 1rem;
`}

  ${theme.media.desktop`
  font-size: 1.2rem;
`}
`;

const HeaderButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.div`
  width: ${(props) => props.width};
  padding: 0 0.7rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    text-align: center;
    color: #6487e2;
    font-size: 0.9rem;
    font-family: 'Pretendard';
    font-weight: 600;
    line-height: 1.125rem;
    word-wrap: break-word;
  }

  ${(props) =>
    props.issignup &&
    theme.media.mobile`
      display: none;
`}
`;

const Divider = styled.div`
  width: 100%;
  height: 0;
  border: 1px #e0e1e9 solid;
`;

const Navbar = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header>
          <HeaderTitle>Catch Mind</HeaderTitle>
          <HeaderButtons>
            <Button width={52} issignup={false}>
              <div>로그인</div>
            </Button>
            <Button width={62} issignup={true}>
              <div>회원가입</div>
            </Button>
          </HeaderButtons>
        </Header>
      </HeaderWrapper>
      <Divider />
    </Container>
  );
};

export default Navbar;
