import React from 'react';
import InputTextField from '../interfaces/inputtextfield';
import { Grid, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const methods = useForm({ resolver: yupResolver(schema) });

  function clearData() {
    methods.reset({
      username: '',
      password: '',
    });
  }

  const loginAccount = (data) => {
    console.log(data);
    clearData();
  };

  return (
    <FormProvider {...methods}>
      <Grid container>
        <form autoComplete="false" onSubmit={methods.handleSubmit(loginAccount)}>
          <Grid container item spacing={1} lg={12} padding="20px">
            <Grid item sm={12} lg={12}>
              <InputTextField label="Username" name="username" type="text" />
            </Grid>

            <Grid item sm={12} lg={12}>
              <InputTextField label="Password" name="password" type="password" />
            </Grid>

            <Grid item sm={12} lg={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </FormProvider>
  );
};

export default LoginForm;
