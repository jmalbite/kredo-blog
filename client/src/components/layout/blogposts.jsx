import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CardBlog from './cardblog';

import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs, currentUserBlogs, resetUserBlogs, resetSearchBlog } from '../../redux/actions/blogs.action';
import { persistentLogin } from '../../redux/actions/auth.action';
import { useState } from 'react';

const BlogPosts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const blogs = useSelector((state) => state.blogs);
  const foundBlogs = useSelector((state) => state.foundBlogs);
  const userBlogs = useSelector((state) => state.userBlogs);
  const [searchFound, setSearchFound] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    dispatch(getAllBlogs());
    if (user) {
      dispatch(resetSearchBlog());
      dispatch(currentUserBlogs(localStorage.getItem('auth_name')));
      setIsLogin(true);
    } else {
      setIsLogin(false);
      dispatch(resetUserBlogs());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (foundBlogs.length !== 0) {
      setSearchFound(true);
    } else setSearchFound(false);
  }, [foundBlogs]);

  //for persistent login
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
      {userBlogs.length === 0 && isLogin ? (
        <Container>
          <Grid container justifyContent="center" item sm={12} xs={12} md={12} lg={12}>
            <Typography variant="h3">No Blogs Found</Typography>
          </Grid>
        </Container>
      ) : null}

      {blogs.length === 0 && !isLogin ? (
        <Container>
          <Grid container justifyContent="center" item sm={12} xs={12} md={12} lg={12}>
            <Typography variant="h3">No Blogs Found</Typography>
          </Grid>
        </Container>
      ) : null}

      {searchFound ? (
        <Grid container item sm={12} spacing={3}>
          {foundBlogs.map((blog) => (
            <CardBlog
              key={blog.id}
              blogID={blog.id}
              title={blog.title}
              name={blog.owner_name}
              username={blog.owner_username}
              created={blog.created_at}
              content={blog.content}
              isLogin={isLogin}
            />
          ))}
        </Grid>
      ) : null}

      {isLogin && searchFound === false ? (
        <Grid container item sm={12} spacing={3}>
          {userBlogs.map((blog) => (
            <CardBlog
              key={blog.id}
              blogID={blog.id}
              title={blog.title}
              name={blog.owner_name}
              username={blog.owner_username}
              created={blog.created_at}
              content={blog.content}
              isLogin={isLogin}
            />
          ))}
        </Grid>
      ) : null}

      {!isLogin && searchFound === false ? (
        <Grid container item sm={12} spacing={3}>
          {blogs.map((blog) => (
            <CardBlog
              key={blog.id}
              blogID={blog.id}
              title={blog.title}
              name={blog.owner_name}
              username={blog.owner_username}
              created={blog.created_at}
              content={blog.content}
              isLogin={isLogin}
            />
          ))}
        </Grid>
      ) : null}
    </Container>
  );
};

export default BlogPosts;
