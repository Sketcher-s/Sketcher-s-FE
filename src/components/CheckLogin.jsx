import React from 'react'
import axios from 'axios';
import { address } from './CheckEmail';

const CheckLogin = async (userEmail, userPassword) => {
  
  try{
    const response = await address.post('/auth/login', {
        email: userEmail,
        password: userPassword
    }, {
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        }
    });
    // jwt 토큰 정보
    let jwtToken = response.headers["authorization"];
    // jwt를 로컬 스토리지에 저장
    if(jwtToken){
      localStorage.setItem('jwtToken', jwtToken);
    } else{
      console.error('jwt 토큰을 찾을 수 없습니다.');
    }

    console.log(`${userEmail}, ${userPassword}`);
    return response.data;
  } catch (error) {
    console.error('Error axios data', error);
    throw error;
  }
}

export default CheckLogin;