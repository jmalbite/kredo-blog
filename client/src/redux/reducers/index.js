import { combineReducers } from 'redux';

import { blogs, foundBlogs, user, loginResponse, registrationResponse, userBlogs } from './blogs.reducer';

export default combineReducers({
  blogs,
  userBlogs,
  foundBlogs,
  user,
  loginResponse,
  registrationResponse,
});
