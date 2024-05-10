import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../components/Modal.jsx';
import { JoinWrapper, LoginContainer, LoginTitle, InputWrapper,
  InputField, InputValue, PasswordIcon, Divider, ButtonWrapper,
  Button, CheckButton, Text, InputContainer, ErrorText } from '../components/LoginStyle.jsx';
import { ReactComponent as PwdIcon } from '../assets/images/pwdIcon.svg';
import { ReactComponent as NonPwdIcon } from '../assets/images/NonPwdIcon.svg';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: 'onChange',
  });

  // 입력 필드 클릭 안 했을 때, 클릭 시, 오류 시 border 색상 다르게 함
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    password: false,
    matchPassword: false,
  });

  const handleFocus = (field) => {
    setFocus({ ...focus, [field]: true });
  };

  const handleBlur = (field) => {
    setFocus({ ...focus, [field]: false });
  };


  // 이메일 중복 체크하기

  // 비밀번호 숨기기/보이기
  const [hidePwd, setHidePwd] = useState(true);
  const [hideMatch, setHideMatch] = useState(true);

  // 비밀번호 보기/숨기기 핸들러
  const togglePasswordVisibility = () => {
    setHidePwd(!hidePwd);
  };

  const toggleMatchVisibility = () => {
    setHideMatch(!hideMatch);
  }

  // 중복 체크 모달 상태
  const [checkOpen, setCheckOpen] = useState(false);

  // 중복 체크 모달 닫기
  const handleCheckClose = () => {
    setCheckOpen(false);
  }

  // 모달 상태
  const [open, setOpen] = useState(false);

  // 모달 닫기
  const handleModalClose = () => {
    setOpen(false);
  }

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

  const userName = getValues('name'); // name 필드 값
  const eamilWatch = watch('email');
  return (
    <LoginContainer>
      <JoinWrapper onSubmit={handleSubmit(onSubmit)}>
        <LoginTitle>회원가입</LoginTitle>
        <InputWrapper>
          <InputContainer>
            <InputField isError={!!errors.name} isFocused={focus.name}>
              <InputValue {...nameRegister} type="text" id="name" placeholder="이름을 입력해 주세요" onFocus={() => handleFocus('name')} 
                            onBlur={() => handleBlur('name')}
                            />
            </InputField>
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
            {/* id가 "name"인 곳에서 발생하는 에러 메시지들을 출력함 */}
          </InputContainer>
          <InputContainer>
            <InputField isError={!!errors.email} isFocused={focus.email}>
              <InputValue type="email" id="email" placeholder="이메일을 입력해 주세요" {...emailRegister} onFocus={() => handleFocus('email')} 
                            onBlur={() => handleBlur('email')} /> 
              <CheckButton isError={!!errors.email} disabled={!!errors.email || !eamilWatch} width={62} background="white" border='1px #6487E2 solid' onClick = {() => {!!errors.email && setCheckOpen(true)}}><Text>중복체크</Text></CheckButton>
            </InputField>
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </InputContainer>
          <InputContainer>
            <InputField isError={!!errors.password} isFocused={focus.password}>
              <InputValue type={hidePwd ? 'password' : 'text'} id="password" placeholder="비밀번호를 입력해 주세요" {...pwdRegister} onFocus={() => handleFocus('password')} 
                            onBlur={() => handleBlur('password')}/>
              <PasswordIcon onClick={togglePasswordVisibility}>{hidePwd ? <PwdIcon /> : <NonPwdIcon />}</PasswordIcon>
            </InputField>
            {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
          </InputContainer>
          <InputContainer>
            <InputField isError={!!errors.matchPassword} isFocused={focus.matchPassword}>
              <InputValue
                type={hideMatch ? 'password' : 'text'} // 비밀번호 숨김/보임에 따라 타입을 바꿈
                id="matchPassword"
                placeholder="비밀번호를 다시 입력해 주세요"
                {...matchRegister}
                onFocus={() => handleFocus('matchPassword')} 
                            onBlur={() => handleBlur('matchPassword')}
              />
              <PasswordIcon onClick={toggleMatchVisibility}>{hideMatch ? <PwdIcon /> : <NonPwdIcon />}</PasswordIcon>
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
            onClick={() => {isValid && setOpen(true)}}
          >
            <div>회원가입</div>
          </Button>
        </ButtonWrapper>
        {/* 이메일 중복체크 통과 */}
        {checkOpen && <Modal title="사용 가능한 이메일입니다." message="" close={handleCheckClose} />}
        {/* 이메일 중복체크 불통과 */}
        {/* {checkOpen && <Modal title="이미 가입된 이메일입니다." message="" close={handleCheckClose} />} */}
        {open && <Modal title="환영합니다!" message={`${userName}님, 회원가입이 완료되었습니다. Catch Mind에서 그림 심리 검사를 진행해보세요!`} close={handleModalClose} />}
      </JoinWrapper>
    </LoginContainer>
  );
};

export default Register;

