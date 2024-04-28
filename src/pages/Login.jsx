import React, { useState } from 'react';
//import Button from '../components/Button';
//import { isDisabled } from '@testing-library/user-event/dist/utils';
import Message from '../components/Message.jsx';
import { ReactComponent as PwdIcon } from '../../assets/images/pwdIcon.svg';
import { LoginWrapper } from '../components/LoginStyle.jsx';
import { LoginContainer } from '../components/LoginStyle.jsx';
import { LoginTitle } from '../components/LoginStyle.jsx';
import { InputWrapper } from '../components/LoginStyle.jsx';
import { InputField } from '../components/LoginStyle.jsx';
import { InputValue } from '../components/LoginStyle.jsx';
import { PasswordIcon } from '../components/LoginStyle.jsx';
import { Divider } from '../components/LoginStyle.jsx';
import { ButtonWrapper } from '../components/LoginStyle.jsx';
import { Button } from '../components/LoginStyle.jsx';
import { isDisabled } from '@testing-library/user-event/dist/utils/index.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // 로그인 처리
  //};

  
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitle>로그인</LoginTitle>
        <InputWrapper>
          <InputField>
            <InputValue
              type="email"
              id="email"
              value={email}
              placeholder="이메일을 입력해 주세요"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputField>
          <InputField>
            <InputValue
              type="password"
              id="password"
              value={password}
              placeholder="비밀번호를 입력해 주세요"
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordIcon>
              <PwdIcon />
            </PasswordIcon>
          </InputField>
          <Message title="이메일 및 비밀번호를 입력해 주세요." />
        </InputWrapper>
        <Divider />
        <ButtonWrapper>
          <Button width="100%" background="#6487e2" color="white">
            <div>로그인</div>
          </Button>
          <Button width="100%" background="white" color="#6487e2">
            <div>회원가입</div>
          </Button>
        </ButtonWrapper>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
