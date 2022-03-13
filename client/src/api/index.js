import axios from 'axios';

//sample api
const blogsURL = '/api/blogs';
const userBlogsURL = '/api/blogs/searh-user-blogs';

export const fetchAllBlogs = () => axios.get(blogsURL);

//protected routes
export const addBlog = (newBlog) => axios.post(blogsURL, newBlog);
export const updateBlog = (blogID, updatedBlog) => axios.put(`${blogsURL}/${blogID}`, updatedBlog);
export const deleteBlog = (blogID) => axios.delete(`${blogsURL}/${blogID}`);
export const searchBlogs = (inputString) => axios.get(`${blogsURL}/search/${inputString}`);
export const getUserBlogs = (username) => axios.get(`${userBlogsURL}/${username}`);
