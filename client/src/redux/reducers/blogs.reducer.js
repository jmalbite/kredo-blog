import { actions } from '../actionsconstant';

export const blogs = (blogs = [], action) => {
  switch (action.type) {
    case actions.FETCH_ALL:
      return (blogs = action.payload);
    case actions.ADD:
      console.log(action);
      return (blogs = {
        ...blogs,
        title: action.payload.title,
        content: action.payload.contentt,
      });
    case actions.DELETE:
      return blogs.filter((blog) => blog.blogID !== action.payload);
    default:
      return blogs;
  }
};

export const blog_found = (blogs = [], action) => {
  switch (action.type) {
    case actions.SEARCH:
      return blogs.filter((blog) => blog.blogID === action.payload);
    default:
      return blogs;
  }
};
