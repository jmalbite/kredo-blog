import { combineReducers } from 'redux';

import { blogs, blog_found } from './blogs.reducer';

export default combineReducers({
  blogs,
  blog_found,
});
