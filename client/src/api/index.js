import axios from 'axios';

//sample api
const blogsURL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchAllBlogs = () => axios.get(blogsURL);
export const addBlog = (newBlog) => axios.post(blogsURL, newBlog);
export const updateBlog = (blogID, newBlog) => axios.put(`${blogsURL}/${blogID}`, newBlog);
export const deleteBlog = (blogID) => axios.delete(`${blogsURL}/${blogID}`);
