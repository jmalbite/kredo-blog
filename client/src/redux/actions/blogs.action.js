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
