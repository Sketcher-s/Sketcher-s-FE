import React from 'react';
import styled from 'styled-components';

function PreparePicture() {
    return(
        
        <PrepareContainer>
            <Title>검사를 위해 준비해야 할 사항</Title>
            <PreparationList>

                <PreparationItem>
                    <Text>연필, 볼펜, 색연필 등은 사용할 수 없으며, 지우개와 A4 용지 한 장을 준비해주세요.</Text>
                </PreparationItem>

                <PreparationItem>
                    <Text>지우개를 사용할 경우, 깨끗하게 지워 잔상이나 다른 연필 선이 남지 않도록 주의해주세요.</Text>
                </PreparationItem>

                <PreparationItem>
                    <Text>종이가 접히거나 구겨지지 않도록 주의해주세요.</Text>
                </PreparationItem>

                <PreparationItem>
                    <Text>아이가 새로운 종이에 다시 그리거나 할 경우, 최종적으로 그린 그림을 업로드해주세요.</Text>
                </PreparationItem>

            </PreparationList>
            <PutPicButton>사진 첨부하기</PutPicButton>
        </PrepareContainer>

    );
}

export default PreparePicture;

// 스타일 컴포넌트 정의
const PrepareContainer = styled.div`
   
`;

const Title = styled.div`
   
`;

const PreparationList = styled.div`
   
`;

const PreparationItem = styled.div`
   
`;

const Text = styled.div`
    color: #27282B;
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 500; 
    line-height: 24;
    word-wrap: break-word;
`;

const PutPicButton = styled.div`
   
`;
