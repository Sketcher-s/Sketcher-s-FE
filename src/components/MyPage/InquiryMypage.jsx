import React from 'react'
import { address } from '../Register/CheckEmail';

const InquiryMypage = async (page, size) => {
    // 로컬에서 토큰 가져오기
    const jwtToken = localStorage.getItem('jwtToken');

    // axios
    try{
        const response = await address.get('/api/member', {
            params: {page, size},
            headers: {
                'accept': '*/*',
                'Authorization': `Bearer ${jwtToken}`
            }
        });
        
        console.log('응답', response);
        return response.data;
      } catch (error) {
        console.error('Error axios data', error);
        throw error;
      }
}

export default InquiryMypage

