import React from 'react'
import axios from 'axios';
import { address } from './CheckEmail';

const CheckRegister = async (userName, userEmail, userPassword) => {
  
  try{
    const response = await address.post('/auth/sign-up', {
        name: userName,
        email: userEmail,
        password: userPassword
    }, {
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        }
    });
    console.log(`${userName, userEmail, userPassword}`);
    return response.data;
  } catch (error) {
    console.error('Error axios data', error);
    throw error;
  }
}

export default CheckRegister