import styled, {keyframes} from "styled-components";
import { ReactComponent as SpinnerImg } from "../../assets/images/line_shadow.svg";
import React from "react";
import { theme } from "../../theme";

const Scan = () => {
  return (
    <SpinnerWrapper>
      <StyledSpinnerImg/>
    </SpinnerWrapper>
  );  
};

export default Scan;


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
  height: 100%;
  position: absolute;
  top: 1;
  left: 50;
  z-index: 1;
  margin-top: 4rem;

  ${theme.media.mobile`
    width: 21.125rem;
    margin-top: 0rem;
`}

  ${theme.media.desktop`
    width: 40rem;
`}
`;

const StyledSpinnerImg = styled(SpinnerImg)`
  width: 100%;
  height: 100%;

  ${theme.media.desktop`
    width: 40rem;
`}

${theme.media.mobile`
    width: 21.125rem;
`}
`;