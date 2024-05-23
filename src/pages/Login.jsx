import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as PwdIcon } from '../assets/images/pwdIcon.svg';
import { ReactComponent as NonPwdIcon } from '../assets/images/nonpwdIcon.svg';
import { ErrorText, JoinWrapper } from '../components/LoginStyle.jsx';
import { LoginContainer } from '../components/LoginStyle.jsx';
import { LoginTitle } from '../components/LoginStyle.jsx';
import { InputWrapper } from '../components/LoginStyle.jsx';
import { InputField } from '../components/LoginStyle.jsx';
import { InputValue, InputContainer } from '../components/LoginStyle.jsx';
import { PasswordIcon } from '../components/LoginStyle.jsx';
import { Divider } from '../components/LoginStyle.jsx';
import { ButtonWrapper } from '../components/LoginStyle.jsx';
import { Button } from '../components/LoginStyle.jsx';
import { useNavigate } from 'react-router-dom';
import CheckLogin from '../components/CheckLogin.jsx';
import { LoginState } from '../recoil/recoilState.js';
import { useRecoilState } from 'recoil';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  // 회원가입 페이지 이동
  const navigate = useNavigate();
  const moveToRegister =() => {
    console.log('회원가입');
    navigate('/register');
  }

  // main으로 이동
  const moveToMain = () => {
    navigate('/');
  }

  // 로그인 에러 메시지
  const [errorMsg, setErrorMsg] = useState(null);
  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  // 페이지 재접속 시 로그인 상태 유지
  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const onSubmit = async (data) => {
    if (isValid) {
      // 유효한 경우 폼 제출
      try {
        const result = await CheckLogin(data.email, data.password);
        console.log('제출 성공', result);
        setIsLoggedIn(true); // 로그인 상태
        moveToMain();
      } catch (error) {
        setErrorMsg('error');
        console.error('로그인 실패', error);
      }
    } else {
      // 유효하지 않음
      console.log('폼 유효하지 않음');
    }
  };

  // 입력 필드 클릭 시, border 색상 변경
  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });

  const handleFocus = (field) => {
    setFocus({ ...focus, [field]: true });
  };

  const handleBlur = (field) => {
    setFocus({ ...focus, [field]: false });
  };
  const emailRegister = register('email', {
    required: { value: true, message: '이메일을 입력해주세요.' },
  });

  const pwdRegister = register('password', {
    required: { value: true, message: '비밀번호를 입력해주세요.' },
  });

  // 비밀번호 숨기기/보이기
  const [hidePwd, setHidePwd] = useState(true);


  // 비밀번호 보기/숨기기 핸들러
  const togglePasswordVisibility = () => {
    setHidePwd(!hidePwd);
  };

  return (
    <LoginContainer>
      <JoinWrapper onSubmit={handleSubmit(onSubmit)}>
        <LoginTitle>로그인</LoginTitle>
        <InputWrapper>
          <InputContainer>
            <InputField isFocused={focus.email}>
              <InputValue
                {...emailRegister}
                type="email"
                id="email"
                placeholder="이메일을 입력해 주세요"
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
              />
            </InputField>
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </InputContainer>
          <InputContainer>
            <InputField isFocused={focus.password}>
              <InputValue
                {...pwdRegister}
                type={hidePwd ? 'password' : 'text'}
                id="password"
                placeholder="비밀번호를 입력해 주세요"
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}
              />
              <PasswordIcon onClick={togglePasswordVisibility}>{hidePwd ? <PwdIcon /> : <NonPwdIcon />}</PasswordIcon>
            </InputField>
            {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
            {errorMsg === 'error' && <ErrorText>이메일 및 비밀번호를 다시 확인해주세요.</ErrorText>}
          </InputContainer>
        </InputWrapper>
        <Divider />
        <ButtonWrapper>
          <Button
            width="100%"
            back={isValid}
            color="white"
            type="submit"
            //onClick={moveToMain}
          >
            <div>로그인</div>
          </Button>
          <Button width="100%" fixed={true} color="#6487e2" onClick={moveToRegister} type="button">
            <div>회원가입</div>
          </Button>
        </ButtonWrapper>
      </JoinWrapper>
    </LoginContainer>
  );
};

export default Login;