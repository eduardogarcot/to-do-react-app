import moment from 'moment';


const TOKEN_KEY = 'token';
const TOKEN_EXPIRATION = 'token_expiration';
const ACCOUNT_ID_KEY = 'account_id';

const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
const setExpirationToken = (expiryDate) => localStorage.setItem(TOKEN_EXPIRATION, expiryDate);
const setAccountId = (_id) => localStorage.setItem(ACCOUNT_ID_KEY, _id);

export const logIn = ({username, accountId, token, expiryDate }) => {
    setToken(token);
    setAccountId(accountId);
    setExpirationToken(moment(expiryDate).add(1,'h'));
}

export const logOut = () => {
    localStorage.clear();
    window.location.href = '/';
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getExpirationToken = () => localStorage.getItem(TOKEN_EXPIRATION);
export const getAccountId = () => localStorage.getItem(ACCOUNT_ID_KEY);

export const isLoggedIn = () => {
    const token = getToken();
    if (!token) return false;
    const expirationDate = getExpirationToken();
    const difference = moment().diff(expirationDate,'minutes')
    return difference <= 0;
}

const fakeLoginService = (username, password) => {
    const users = require('./mocks/users.json');
    const user = users.find(user => user.username === username && user.password===password);
    const response = {};
    if (user) {
        response.exist = true;
        response.token = 'asdaS13rfnalsdKVdfh13fdvaeriAsDFA213Q';
        response.expiryDate = Date.now();
        response.accountId = user._id;
        response.currentProjectId = user.currentProjectId;
    }
    else
        response.exist = false;
    return response;
}


const auth = {
    setExpirationToken,
    getExpirationToken,
    getToken,
    getAccountId,
    logIn,
    logOut,
    fakeLoginService,
    isLoggedIn,
  };

  export default auth;