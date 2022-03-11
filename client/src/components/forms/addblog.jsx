import React from 'react';
import InputTextField from '../interfaces/inputtextfield';
import { Grid, Button, Paper } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';

const schema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
});

const AddBlog = () => {
  const methods = useForm({ resolver: yupResolver(schema) });

  function clearData() {
    methods.reset({
      title: '',
      content: '',
    });
  }

  const saveBlog = (data) => {
    console.log(data);
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
              <InputTextField label="Blog Content" name="content" type="text" multiline={true} rows={15} />
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
