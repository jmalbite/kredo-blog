import React, { useEffect } from 'react';
import InputTextField from '../interfaces/inputtextfield';
import Loader from '../response/loader';
import { Grid, Button, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/actions/auth.action';
import { useState } from 'react';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const methods = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const isValid = useSelector((state) => state.errorLogin);

  const [invalidCreds, setInvalidCreds] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    setInvalidCreds(isValid);
  }, [isValid]);

  const loginAccount = (credentials) => {
    dispatch(userLogin(credentials));
    setIsLoading(true);

    if (invalidCreds) setIsLoading(false);
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

            {invalidCreds ? (
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
