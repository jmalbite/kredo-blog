import { actions } from '../actionsconstant';

export const blogs = (blogs = [], action) => {
  switch (action.type) {
    case actions.FETCH_ALL:
      return (blogs = action.payload);
    case actions.ADD:
      return (blogs = [
        ...blogs,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
        },
      ]);
    case actions.UPDATE:
      return blogs.map((blog) => (blog.id === action.payload.id ? action.payload : blog));

    case actions.DELETE:
      return (blogs = blogs.filter((blog) => blog.id !== action.payload));
    default:
      return blogs;
  }
};

export const blog_found = (blogs = [], action) => {
  switch (action.type) {
    case actions.SEARCH:
      return (blogs = action.payload);
    default:
      return blogs;
  }
};

export const user = (user = null, action) => {
  switch (action.type) {
    case actions.USERLOGIN:
      return (user = action.payload);
    case actions.USER_LOGOUT:
      return (user = null);
    case actions.PERSISTENT:
      return (user = action.payload);
    default:
      return user;
  }
};

export const errorLogin = (errorLogin = false, action) => {
  switch (action.type) {
    case actions.ERROR_LOGIN:
      return action.payload.message === 'Invalid Credentials' ? (errorLogin = true) : null;
    case actions.SUCCESS_LOGIN:
      return (errorLogin = false);
    case actions.RESET_STATUS:
      return (errorLogin = false);
    default:
      return errorLogin;
  }
};
