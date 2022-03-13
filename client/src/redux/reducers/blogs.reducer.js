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
          owner_username: action.payload.owner_username,
          owner_name: action.payload.owner_name,
          created_at: action.payload.created_at,
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

export const foundBlogs = (blogs = [], action) => {
  switch (action.type) {
    case actions.SEARCH:
      return (blogs = action.payload);
    case actions.RESET_SEARCH:
      return (blogs = []);
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

export const userBlogs = (user_blogs = [], action) => {
  switch (action.type) {
    case actions.USER_BLOGS:
      return action.payload;
    case actions.ADD:
      return (user_blogs = [
        ...user_blogs,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
          owner_username: action.payload.owner_username,
          owner_name: action.payload.owner_name,
          created_at: action.payload.created_at,
        },
      ]);
    case actions.UPDATE:
      return user_blogs.map((blog) => (blog.id === action.payload.id ? action.payload : blog));
    case actions.DELETE:
      return (user_blogs = user_blogs.filter((blog) => blog.id !== action.payload));
    case actions.RESET_USER_BLOGS:
      return (user_blogs = []);
    default:
      return user_blogs;
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
