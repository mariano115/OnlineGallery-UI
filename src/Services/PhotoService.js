import axios from 'axios';
//import 'dotenv/config'
//require('dotenv').config()
const dotenv = require('dotenv');



let url = 'http://localhost:8080/api/v1'

export const getPhotos = () => {
  axios.get(url +"/photos")
    .then(res => {
        console.log('res', res.data)
        return res.data;
    })
    .catch(err => {
        console.log(err)
        return [];
    })
}


