import axios from 'axios';
import { actions } from '../actionsconstant';

const loginURL = '/api/login';
const logoutURL = '/api/logout';

export const userLogin = (userCredentials) => async (dispatch) => {
  axios.get('/sanctum/csrf-cookie').then((response) => {
    axios
      .post(loginURL, userCredentials)
      .then((res) => {
        const data = [
          {
            token: res.data.token,
            username: res.data.user.username,
            id: res.data.user.id,
          },
        ];
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_name', res.data.user.username);
        localStorage.setItem('user', JSON.stringify(res.data.user));

        dispatch({ type: actions.USERLOGIN, payload: data });
        dispatch({ type: actions.SUCCESS_LOGIN });
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
