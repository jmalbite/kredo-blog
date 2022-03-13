import React, { useEffect, useState } from 'react';

import InputTextField from '../interfaces/inputtextfield';
import Loader from '../response/loader';

import { Grid, Button, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/actions/auth.action';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const methods = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const response = useSelector((state) => state.loginResponse);

  const [validCredential, setValidCredential] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    if (response.message) setValidCredential(false);
    else setValidCredential(true);
  }, [response]);

  const loginAccount = (credentials) => {
    setIsLoading(true);
    dispatch(userLogin(credentials));
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

            {!validCredential ? (
              <Grid item sm={12} lg={12}>
                <Typography variant="subtitle2" color="red">
                  username or password is not correct
                </Typography>
              </Grid>
            ) : null}

            <Loader open={isLoading} />
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
