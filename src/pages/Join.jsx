import React, { useState, useEffect } from 'react';
import { ReactComponent as PwdIcon } from '../assets/images/pwdIcon.svg';
import { JoinWrapper } from '../components/LoginStyle.jsx';
import { LoginContainer } from '../components/LoginStyle.jsx';
import { LoginTitle } from '../components/LoginStyle.jsx';
import { InputWrapper } from '../components/LoginStyle.jsx';
import { InputField } from '../components/LoginStyle.jsx';
import { InputValue } from '../components/LoginStyle.jsx';
import { PasswordIcon } from '../components/LoginStyle.jsx';
import { Divider } from '../components/LoginStyle.jsx';
import { ButtonWrapper } from '../components/LoginStyle.jsx';
import { Button } from '../components/LoginStyle.jsx';
import { InputContainer } from '../components/LoginStyle.jsx';
import { useForm } from 'react-hook-form';
import { ErrorText } from '../components/LoginStyle.jsx';


const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
    if (isValid) {
      // 유효한 경우 폼 제출
      console.log('제출 성공');
    } else {
      // 유효하지 않음
      console.log('제출 실패');
    }
  };

  const nameRegister = register('name', {
    required: { value: true },
    minLength: {
      value: 2,
      message: '이름은 2글자 이상 6글자 이하여야 합니다.',
    },
    maxLength: {
      value: 6,
      message: '이름은 2글자 이상 6글자 이하여야 합니다.',
    },
  });

  const emailRegister = register('email', {
    required: { value: true },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: '이메일 형식이 올바르지 않습니다.',
    },
  });

  const pwdRegister = register('password', {
    required: { value: true },
    pattern: {
      value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@])[a-zA-Z\d!@]{8,12}$/,
      message: '비밀번호는 영문, 숫자, 특수문자(!,@)를 모두 포함하여 8~12글자이어야 합니다.',
    },
  });
  const matchRegister = register('matchPassword', {
    required: { value: true },
    validate: (value) => value === getValues('password') || '비밀번호가 일치하지 않습니다.', // 수정된 부분
  });

  return (
    <LoginContainer>
      <JoinWrapper onSubmit={handleSubmit(onSubmit)}>
        <LoginTitle>회원가입</LoginTitle>

        <InputWrapper>
          <InputContainer>
            <InputField>
              <InputValue {...nameRegister} type="text" id="name" placeholder="이름을 입력해 주세요" />
            </InputField>
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
            {/* id가 "name"인 곳에서 발생하는 에러 메시지들을 출력함 */}
          </InputContainer>
          <InputContainer>
            <InputField>
              <InputValue type="email" id="email" placeholder="이메일을 입력해 주세요" {...emailRegister} />
            </InputField>
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </InputContainer>
          <InputContainer>
            <InputField>
              <InputValue type="password" id="password" placeholder="비밀번호를 입력해 주세요" {...pwdRegister} />
            </InputField>
            {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
          </InputContainer>
          <InputContainer>
            <InputField>
              <InputValue
                type="password"
                id="matchPassword"
                placeholder="비밀번호를 다시 입력해 주세요"
                {...matchRegister}
              />
              <PasswordIcon>
                <PwdIcon />
              </PasswordIcon>
            </InputField>
            {errors.matchPassword && <ErrorText>{errors.matchPassword.message}</ErrorText>}
          </InputContainer>
        </InputWrapper>
        <Divider />
        <ButtonWrapper>
          <Button
            width="100%"
            background={isValid ? '#6487e2' : '#ccc'}
            color={isValid ? 'white' : '#999'}
            type="submit"
            disabled={!isValid}
          >
            <div>회원가입</div>
          </Button>
        </ButtonWrapper>
      </JoinWrapper>
    </LoginContainer>
  );
};

export default Join;
