import { combineReducers } from 'redux';

import { blogs_data, blog_found } from './blogs.reducer';

export default combineReducers({
  blogs_data,
  blog_found,
});
