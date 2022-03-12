import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import CardBlog from './cardblog';

import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../../redux/actions/blogs.action';
import { persistentLogin } from '../../redux/actions/auth.action';
import { useState } from 'react';

const BlogPosts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const blogs = useSelector((state) => state.blogs);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    dispatch(getAllBlogs());

    if (user) setIsLogin(true);
    else setIsLogin(false);
  }, [dispatch, user]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('user'));
    if (local !== null) {
      dispatch(persistentLogin(local));
      setIsLogin(true);
    } else setIsLogin(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: '30px' }}>
      <Grid container item sm={12} spacing={3}>
        {blogs.map((blog) => (
          <CardBlog key={blog.id} blogID={blog.id} title={blog.title} content={blog.content} isLogin={isLogin} />
        ))}
      </Grid>
    </Container>
  );
};

export default BlogPosts;
