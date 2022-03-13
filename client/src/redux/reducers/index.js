import { combineReducers } from 'redux';

import { blogs, blog_found, user, loginResponse, registrationResponse } from './blogs.reducer';

export default combineReducers({
  blogs,
  blog_found,
  user,
  loginResponse,
  registrationResponse,
});
