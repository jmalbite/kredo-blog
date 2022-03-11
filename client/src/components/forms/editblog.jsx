import React, { useEffect } from 'react';
import InputTextField from '../interfaces/inputtextfield';
import { Grid, Button, Paper } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';

const schema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
});

const EditBlog = ({ titleBlog, contentBlog }) => {
  const methods = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    methods.setValue('title', titleBlog);
    methods.setValue('content', contentBlog);
  }, [titleBlog, contentBlog, methods]);

  function clearData() {
    methods.reset({
      title: '',
      content: '',
    });
  }

  const updateBlog = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <Paper elevation={1} style={{ padding: 20 }}>
        <form autoComplete="false" onSubmit={methods.handleSubmit(updateBlog)}>
          <Grid container spacing={1}>
            <Grid item sm={12} lg={12}>
              <InputTextField label="Blog Title" name="title" type="text" />
            </Grid>

            <Grid item sm={12} lg={12}>
              <InputTextField label="Blog Content" name="content" type="text" multiline={true} rows={10} />
            </Grid>

            <Grid item sm={12} lg={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Update
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

export default EditBlog;
