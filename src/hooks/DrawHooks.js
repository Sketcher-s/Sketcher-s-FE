const uploadFile = async () => {
    // 파일 객체 생성
    //const file = new File([''], '스크린샷 2024-05-03 21.33.41.png', { type: 'image/png' }); // 여기에 파일 경로와 이름을 넣어주세요
  
    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput.files[0];
    
    if (!file) {
      console.error("No file selected");
      return;
    }

    // FormData 객체 생성
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      // 서버로 POST 요청 보내기
      const response = await fetch('https://dev.catchmind.shop/api/picture', {
        method: 'POST',
        headers: {
        //   'Accept': '*/*',
        'Accept': '*/*', // 이 부분을 제거합니다.
        'Content-Type': 'multipart/form-data', // 파일 업로드시에는 Content-Type을 multipart/form-data로 설정합니다.
        },
        body: formData,
      });
  
      // 응답 확인
      if (response.ok) {
        const data = await response.json();
        console.log('File uploaded successfully:', data);
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  
  //함수 호출
  uploadFile();

    // // 파일 선택 시 호출되는 핸들러
    // const handleFileChange = (e) => {
    //     const selectedFile = e.target.files[0];
    //     uploadFile(selectedFile);
    // };
  
  