import styled from 'styled-components';
import { theme } from '../theme';

export const Container = styled.div``;

export const HeaderWrapper = styled.div`
height: 100%
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;
export const Header = styled.div`
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

export const HeaderTitle = styled.div`
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

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.div`
  width: ${(props) => props.width};
  padding: 0.4rem 0.5rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  border: ${(props) => props.border};

  // 비회원-모바일, 메인페이지 버튼 숨기기
  ${(props) =>
    props.noMember &&
    theme.media.mobile`
    display: none;
`}

  ${(props) =>
    props.issignup &&
    theme.media.mobile`
      display: none;
`}
`;

export const Text = styled.div`
  text-align: center;
  color: ${(props) => props.color || '#6487E2'};
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  line-height: 1.12rem;
  word-wrap: break-word;
`;

export const Divider = styled.div`
  width: 100%;
  height: 0;
  border: 1px #e0e1e9 solid;
`;