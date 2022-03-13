import axios from 'axios';
import { actions } from '../actionsconstant';

const loginURL = 'http://localhost:8000/api/login';
const registerURL = 'http://localhost:8000/api/register';
const logoutURL = '/api/logout';

export const userLogin = (userCredentials) => async (dispatch) => {
  axios.get('/sanctum/csrf-cookie').then((response) => {
    axios
      .post(loginURL, userCredentials)
      .then((res) => {
        const data = {
          token: res.data.token,
          name: res.data.user.name,
          username: res.data.user.username,
          id: res.data.user.id,
        };

        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_name', res.data.user.username);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({ type: actions.SUCCESS_LOGIN, payload: res.data.user });
        dispatch({ type: actions.USERLOGIN, payload: data });
      })
      .catch((error) => {
        dispatch({ type: actions.ERROR_LOGIN, payload: error.response.data });
      });
  });
};

export const userLogout = () => async (dispatch) => {
  axios
    .post(logoutURL)
    .then((res) => {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_name');
      localStorage.removeItem('user');
      dispatch({ type: actions.USER_LOGOUT });
    })
    .catch((error) => {
      //console.log(error.response.data);
      //dispatch({ type: actions.ERROR_LOGIN, payload: error.response.data });
    });
};

export const registerUser = (userInfo) => async (dispatch) => {
  axios.get('/sanctum/csrf-cookie').then((response) => {
    axios
      .post(registerURL, userInfo)
      .then((res) => {
        dispatch({ type: actions.REGISTER, payload: res });
      })
      .catch((err) => {
        dispatch({ type: actions.ERROR_REGISTER, payload: err.response });
      });
  });
};

export const persistentLogin = (user) => {
  return {
    type: actions.PERSISTENT,
    payload: user,
  };
};

export const resetLoginStatus = () => {
  return {
    type: actions.RESET_STATUS,
  };
};

export const resetRegistrationResponse = () => {
  return {
    type: actions.RESET_STATUS,
  };
};
