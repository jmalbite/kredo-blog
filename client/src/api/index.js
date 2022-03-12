import axios from 'axios';

//sample api
const blogsURL = '/api/blogs';

export const fetchAllBlogs = () => axios.get(blogsURL);
export const addBlog = (newBlog) =>
  axios.post(blogsURL, newBlog, {
    headers: {
      Authorization: 'Bearer 50|N5uOhsJG3DJvSoUhQ3mIrp6cKmLCi3iQLtnhq5GW', //the token is a variable which holds the token
    },
  });
export const updateBlog = (blogID, updatedBlog) => axios.put(`${blogsURL}/${blogID}`, updatedBlog);
export const deleteBlog = (blogID) =>
  axios.delete(`${blogsURL}/${blogID}`, {
    headers: {
      Authorization: 'Bearer 50|N5uOhsJG3DJvSoUhQ3mIrp6cKmLCi3iQLtnhq5GW', //the token is a variable which holds the token
    },
  });
