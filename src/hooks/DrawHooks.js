// const uploadFile = async () => {

//     const userToken = localStorage.getItem('jwtToken'); // 로컬 스토리지에서 토큰을 가져온다고 가정
//         console.log('User Token(토큰은 잘 받아와짐):', userToken);

//     if (!userToken) {
//         console.error("User not authenticated");
//         return;
//     }


  
//     const fileInput = document.querySelector('input[type="file"]');
//     const file = fileInput.files[0];

    
//     if (!file) {
//       console.error("No file selected");
//       return;
//     }

//     // FormData 객체 생성
//     const formData = new FormData();
//     formData.append('file', file);
  
//     try {
//       // 서버로 POST 요청 보내기
//       const response = await fetch('https://dev.catchmind.shop/api/picture', {
//         method: 'POST',
//         headers: {

//         'Accept': '*/*',
//         'Content-Type': 'multipart/form-data', // 파일 업로드시에는 Content-Type을 multipart/form-data로 설정합니다.
//         'Authorization': `Bearer ${userToken}`, // 사용자 토큰을 헤더에 포함하여 서버로 전송

//         },
//         body: formData,
//       });
  
//       // 응답 확인
//       if (response.ok) {
//         const data = await response.json();
//         console.log('File uploaded successfully:', data);
//       } else {
//         console.error('File upload failed');
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error.response.status, error.response.statusText);
//     }
//   };
  
//   //함수 호출
//   uploadFile();







//파일 업로드 함수
// const uploadFile = async () => {

//     const userToken = localStorage.getItem('jwtToken'); // 로컬 스토리지에서 토큰을 가져온다고 가정
//         console.log('jwtToken:', userToken);

//     if (!userToken) {
//         console.error("User not authenticated");
//         return;
//     }


  
//     const fileInput = document.querySelector('input[type="file"]');
//     const file = fileInput.files[0];

    
//     if (!file) {
//       console.error("No file selected");
//       return;
//     }

//     // FormData 객체 생성
//     const formData = new FormData();
//     formData.append('file', file);
  
//     try {
//       // 서버로 POST 요청 보내기
//       const response = await fetch('https://dev.catchmind.shop/api/picture', {
//         method: 'POST',
//         headers: {

//         'Accept': '*/*',
//         'Content-Type': 'multipart/form-data', // 파일 업로드시에는 Content-Type을 multipart/form-data로 설정합니다.
//         'Authorization': `Bearer ${userToken}`, // 사용자 토큰을 헤더에 포함하여 서버로 전송

//         },
//         body: formData,
//       });
  
//       // 응답 확인
//       if (response.ok) {
//         const data = await response.json();
//         console.log('File uploaded successfully:', data);
//       } else {
//         console.error('File upload failed');
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error.response.status, error.response.statusText);
//     }
//   };
  
//   //함수 호출
//   uploadFile();

  