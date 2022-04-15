import http from './http';
import moment from 'moment';
import { toast } from "react-toastify";

const TOKEN_KEY = 'token';
const TOKEN_EXPIRATION = 'token_expiration';
const API_AUTH_URL = '/login';


const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
const setExpirationToken = (expiryDate) => localStorage.setItem(TOKEN_EXPIRATION, expiryDate);
const logIn = async (credentials) => {
    /* await http.post(API_AUTH_URL, credentials)
    .then((res)=>{
        const {token, expiryDate} = res.data;
        setToken(token);
        setExpirationToken(expiryDate);  
    })
    .catch((err)=>{
        toast.error('Your username or password are not valid, please try again');
    }) */
    setToken('TestToken');
    setExpirationToken(moment().add(1,'h'));
}
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getExpirationToken = () => localStorage.getItem(TOKEN_EXPIRATION);
export const isLoggedIn = () => {
    const token = getToken();
    if (!token) return false;
    const expirationDate = getExpirationToken();
    return moment().diff(expirationDate,'minutes') > 0;
}


export default {
    setExpirationToken,
    getExpirationToken,
    getToken,
    logIn
  };