import { actions } from '../actionsconstant';

export const blogs_data = (blogs = [], action) => {
  switch (action.type) {
    case actions.ADD:
      return (blogs = action.payload);
    case actions.UPDATE:
      return (blogs = {
        ...blogs,
        title: action.payload.title,
        content: action.payload.contentt,
      });
    case actions.DELETE:
      return blogs.filter((blog) => {
        return blog.blogID !== action.payload.blogID;
      });
    default:
      return blogs;
  }
};

export const blog_found = (blog = [], action) => {
  switch (action.type) {
    case actions.SEARCH:
      return (blog = action.payload);
    default:
      return blog;
  }
};
