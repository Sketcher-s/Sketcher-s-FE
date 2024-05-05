import React from 'react';
import styled from 'styled-components';
// import { ReactComponent as GCheck } from '../../assets/Draw/GCheck.svg';
// import { ReactComponent as PrepareDraw1 } from '../../assets/Draw/PrepareDraw1.svg';
import { ReactComponent as Shape } from '../../assets/Draw/Shape.svg';
import { ReactComponent as Rectangle } from '../../assets/Draw/Rectangle.svg';

const Bar = () => {

  return (

    <Container>
        <StyledShape>
            <Shape/>
        </StyledShape>

        <StyledRectangle>
            <Rectangle/>
        </StyledRectangle>
    </Container>

  );
}

export default Bar;

const Container = styled.div`
background: #f3f3f6;
width: 20px;
height: 70px;
`;

const StyledShape = styled.div`
background: #f3f3f6;
justify-content: center;
align-items: center;
padding-top: 25px;
`;

const StyledRectangle = styled.div`
background: #f3f3f6;

`;
