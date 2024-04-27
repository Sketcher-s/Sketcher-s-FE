import styled from 'styled-components';
import { theme } from '../theme';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.media.mobile`
  
`}

  ${theme.media.desktop`
  
`}
`;

export const LoginWrapper = styled.div`
  height: 50%;
  padding: 7rem 0;
  background: white;
  border-radius: 0.625rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  ${theme.media.mobile`
  width: 80%;
`}

  ${theme.media.desktop`
  width: 60%;
`}
`;
export const JoinWrapper = styled.form`
height: 50%;
  padding: 7rem 0;
  background: white;
  border-radius: 0.625rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  ${theme.media.mobile`
  width: 80%;
`}

  ${theme.media.desktop`
  width: 60%;
`}
`

export const LoginTitle = styled.div`
  color: #27282b;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 2.4rem;
  word-wrap: break-word;
  ${theme.media.mobile`
  font-size: 1rem;
`}

  ${theme.media.desktop`
  font-size: 2rem;
`}
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;

  ${theme.media.mobile`
  gap: 0.25rem;
  width: 75%;
`}

  ${theme.media.desktop`
  width: 55%;
`}
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InputField = styled.div`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e0e1e9;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  > div {
    width: 1.875rem;
    color: #27282b;
    font-size: 1rem;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 1.5rem;
    word-wrap: break-word;
  }
  ${theme.media.mobile`
  
`}

  ${theme.media.desktop`
`}
`;

export const InputValue = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #27282b;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 12px 20px;
  wordWrap: 'break-word';

  ${theme.media.mobile`
  font-size: 0.7rem;
`}

  ${theme.media.desktop`
  font-size: 1rem;
`}
`;

export const PasswordIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;

  > div {
    width: 1.124rem;
    height: 0.75rem;
    left: 0.189rem;
    top: 0.375rem;
    position: absolute;
    background: #97999f;
  }
  ${theme.media.mobile`
`}

  ${theme.media.desktop`
`}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.875rem;
  ${theme.media.mobile`
  width: 75%;
`}

  ${theme.media.desktop`
  width: 55%;
`}
`;

export const Divider = styled.div`
  height: 0;
  border: 1px #e0e1e9 solid;
  ${theme.media.mobile`
  width: 87%;
`}

  ${theme.media.desktop`
  width: 59%;
`}
`;

export const Button = styled.div`
  width: ${(props) => props.width};
  height: 3rem;
  padding: 0 1.25rem;
  border-radius: 0.25rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};

  > div {
    width: 16.875rem;
    text-align: center;
    color: ${(props) => props.color};
    font-size: 1rem;
    font-family: Pretendard;
    font-weight: 700;
    line-height: 1.5rem;
    word-wrap: break-word;
  }
  ${theme.media.mobile`
  
`}

  ${theme.media.desktop`
  
`}
`;
