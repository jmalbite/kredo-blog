import React from 'react';
import InputTextField from '../interfaces/inputtextfield';
import { Grid, Button, Paper } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { createBlog } from '../../redux/actions/blogs.action';
import { useState } from 'react';
import { useEffect } from 'react';

const schema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
});

const AddBlog = () => {
  const methods = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  //storing username and name //i don't know why it's undefined
  useEffect(() => {
    setName(user.name);
    setUsername(user.username);
  }, [user.name, user.username]);

  //storing username and name //i don't know why it's undefined
  useEffect(() => {
    if (name === 'undefined' || username === undefined) {
      setName(user[0].name);
      setUsername(user[0].username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, username]);

  function clearData() {
    methods.reset({
      title: '',
      content: '',
    });
  }

  const saveBlog = (data) => {
    let addDataBlog = { ...data, owner_name: name, owner_username: username };
    console.log(addDataBlog);
    dispatch(createBlog(addDataBlog));
    clearData();
  };

  return (
    <FormProvider {...methods}>
      <Paper elevation={1} style={{ padding: 20 }}>
        <form autoComplete="false" onSubmit={methods.handleSubmit(saveBlog)}>
          <Grid container spacing={1}>
            <Grid item sm={12} lg={12}>
              <InputTextField label="Blog Title" name="title" type="text" />
            </Grid>

            <Grid item sm={12} lg={12}>
              <InputTextField label="Blog Content" name="content" type="text" multiline={true} rows={10} />
            </Grid>

            <Grid item sm={12} lg={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Publish
              </Button>
            </Grid>

            <Grid item sm={12} lg={12}>
              <Button onClick={clearData} variant="contained" color="secondary" fullWidth>
                Clear
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </FormProvider>
  );
};

export default AddBlog;
