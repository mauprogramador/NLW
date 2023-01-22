import axios from 'axios';


export const api = axios.create({
    baseURL: 'http://172.30.30.107:3333',
    httpAgent: null,
});