import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import CardBlog from './cardblog';

import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../../redux/actions/blogs.action';

const BlogPosts = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  return (
    <Container maxWidth="lg" style={{ marginTop: '30px' }}>
      <Grid container item sm={12} spacing={3}>
        {blogs.map((blog) => (
          <CardBlog key={blog.id} blogID={blog.id} title={blog.title} content={blog.content} />
        ))}
      </Grid>
    </Container>
  );
};

export default BlogPosts;
