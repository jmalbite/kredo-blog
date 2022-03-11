import React from 'react';
import { Container, Grid } from '@mui/material';
import CardBlog from './cardblog';

const BlogPosts = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '30px' }}>
      <Grid container item sm={12} spacing={3}>
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </Grid>
    </Container>
  );
};

export default BlogPosts;
