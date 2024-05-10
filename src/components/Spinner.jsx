import styled, {keyframes} from "styled-components";
import { ReactComponent as SpinnerImg } from "../assets/images/line_shadow.svg";
import React from "react";

const Spinner = () => {
  return (
  <SpinnerContainer>
    <SpinnerWrapper>
      <StyledSpinnerImg/>
    </SpinnerWrapper>
  </SpinnerContainer>

  );  
};

export default Spinner;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Slide = keyframes`
0% {
  transform: translateY(0);
}
50% {
  transform: translateY(100px);
}
100% {
  transform: translateY(0);
}
`;

const SpinnerWrapper = styled.div`
  display: flex;
  animation: ${Slide} 2.7s linear infinite both;
  width:40%;
  height: 100%;
`;

const StyledSpinnerImg = styled(SpinnerImg)`
  width: 100%;
  height: 100%;
`
