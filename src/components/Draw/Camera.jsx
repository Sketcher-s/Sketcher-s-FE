import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

function CameraComponent() {
  const [imageSrc, setImageSrc] = useState(null); // 캡처된 이미지를 저장할 상태
  const videoRef = useRef(null); // 비디오 스트림을 보여줄 ref
  const canvasRef = useRef(null); // 이미지 캡처를 위한 캔버스 ref

  // 카메라를 설정하고 비디오 스트림을 시작하는 함수
  const setupCamera = () => {
    const constraints = { video: { facingMode: "environment" } }; // 모바일에서는 후면 카메라 사용

    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(err => {
        console.error("Cannot access the camera: ", err);
      });
  };

  // 비디오 스트림에서 이미지를 캡처하는 함수
  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    setImageSrc(canvas.toDataURL('image/png')); // 캡처된 이미지를 Data URL 형식으로 저장
  };

  // 컴포넌트가 마운트될 때 카메라 설정
  useEffect(() => {
    setupCamera();
    return () => {
      // 컴포넌트가 언마운트될 때 카메라 스트림 종료
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <Container>
      <VideoWrapper>
        <Canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
      </VideoWrapper>
      <Button onClick={captureImage}>Capture Image</Button>
      {imageSrc && <Image src={imageSrc} alt="Captured" />}
    </Container>
  );
}

export default CameraComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoWrapper = styled.div`
  width: 640px;
  height: 480px;
  background: black;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;

const Canvas = styled.canvas`
  display: none; // 실제로는 보이지 않지만 이미지 캡처에 사용됩니다.
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
`;

const Image = styled.img`
  margin-top: 20px;
  width: 100%;
  max-width: 640px;
  height: auto;
`;
