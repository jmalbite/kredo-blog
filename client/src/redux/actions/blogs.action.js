import * as api from '../../api/index.js';
import { actions } from '../actionsconstant';

export const getAllBlogs = () => async (dispatch) => {
  try {
    //
    const { data } = await api.fetchAllBlogs();
    dispatch({ type: actions.FETCH_ALL, payload: data });
    //
  } catch (error) {
    console.error(error);
  }
};

export const currentUserBlogs = (username) => async (dispatch) => {
  try {
    const { data } = await api.getUserBlogs(username);
    dispatch({ type: actions.USER_BLOGS, payload: data });
  } catch (error) {
    console.log('current user blogs: ', error);
  }
};

export const createBlog = (newBlog) => async (dispatch) => {
  try {
    //
    const res = await api.addBlog(newBlog);

    dispatch({ type: actions.ADD, payload: res.data });
    //
  } catch (error) {
    console.error(error);
  }
};

export const editBlog = (blogID, updatedBlog) => async (dispatch) => {
  try {
    //
    const { data } = await api.updateBlog(blogID, updatedBlog);
    dispatch({ type: actions.UPDATE, payload: data });
    //
  } catch (error) {
    console.log(error.message);
  }
};

export const removeBlog = (blogID) => async (dispatch) => {
  try {
    //
    await api.deleteBlog(blogID);
    dispatch({ type: actions.DELETE, payload: blogID });
    //
  } catch (error) {
    console.log(error.message);
  }
};

export const searchBlog = (inputString) => async (dispatch) => {
  try {
    const { data } = await api.searchBlogs(inputString);
    dispatch({ type: actions.SEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const resetSearchBlog = () => {
  return {
    type: actions.RESET_SEARCH,
  };
};

export const resetUserBlogs = () => {
  return {
    type: actions.RESET_USER_BLOGS,
  };
};

export const resetLoginStatus = () => {
  return {
    type: actions.RESET_STATUS,
  };
};
