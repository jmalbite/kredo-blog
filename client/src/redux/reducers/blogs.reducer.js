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

export const loginResponse = (response = [], action) => {
  switch (action.type) {
    case actions.SUCCESS_LOGIN:
      return (response = action.payload);
    case actions.ERROR_LOGIN:
      return (response = action.payload);
    case actions.RESET_STATUS:
      return (response = []);
    default:
      return response;
  }
};

export const registrationResponse = (response = [], action) => {
  switch (action.type) {
    case actions.REGISTER:
      return (response = action.payload);
    case actions.ERROR_REGISTER:
      return (response = action.payload.data.errors);
    case actions.RESET_STATUS:
      return (response = []);
    default:
      return response;
  }
};
