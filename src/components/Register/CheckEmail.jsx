import React from 'react'
import axios from 'axios';

export const address = axios.create({
    baseURL: 'https://dev.catchmind.shop'
}); 

const CheckEmail = async (value) => {
  
  try{
    const response = await address.get(`/auth/${value}`, {
        headers: {
            'accept': '*/*'
        }
    });
    console.log('서버 응답: ', response);
    return response.data;
  } catch (error) {
    console.error('Error axios data', error);
    throw error;
  }
}

export default CheckEmail