import axios from 'axios';

//sample api
const blogsURL = '/api/blogs';

export const fetchAllBlogs = () => axios.get(blogsURL);

//protected routes
export const addBlog = (newBlog) => axios.post(blogsURL, newBlog);
export const updateBlog = (blogID, updatedBlog) => axios.put(`${blogsURL}/${blogID}`, updatedBlog);
export const deleteBlog = (blogID) => axios.delete(`${blogsURL}/${blogID}`);
