import React, { useEffect, useState } from 'react';
import InputTextField from '../interfaces/inputtextfield';
import Loader from '../response/loader';

import { Grid, Button, Typography } from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/actions/auth.action';

const schema = yup.object().shape({
  name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email('invalid email').required(),
  password: yup.string().required(),
  password_confirmation: yup
    .string()
    .required('confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords does not match'),
});

const RegisterForm = () => {
  const methods = useForm({ resolver: yupResolver(schema) });
  const registerResponse = useSelector((state) => state.registrationResponse);
  const [takenUsername, setTakenUsername] = useState(false);
  const [takenEmail, setTakenEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  //check if the email and username is taken from the response
  useEffect(() => {
    setIsLoading(false);
    if (registerResponse.username) setTakenUsername(true);
    if (registerResponse.email) setTakenEmail(true);
  }, [registerResponse]);

  function clearFields() {
    methods.reset({
      name: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    });
  }

  const registerAccount = (userInfo) => {
    setIsLoading(true);
    setTakenEmail(false);
    setTakenUsername(false);
    dispatch(registerUser(userInfo));
  };

  return (
    <FormProvider {...methods}>
      <Grid container>
        <form autoComplete="false" onSubmit={methods.handleSubmit(registerAccount)}>
          <Grid container item spacing={1} lg={12} padding="20px">
            <Grid item sm={12} lg={12}>
              <InputTextField label="Name" name="name" type="text" />
            </Grid>

            <Grid item sm={12} lg={12}>
              <InputTextField label="Username" name="username" type="text" />
              {takenUsername ? (
                <Typography variant="subtitle2" color="red">
                  username already taken
                </Typography>
              ) : null}
            </Grid>

            <Grid item sm={12} lg={12}>
              <InputTextField label="Email" name="email" type="email" />
              {takenEmail ? (
                <Typography variant="subtitle2" color="red">
                  email already taken
                </Typography>
              ) : null}
            </Grid>

            <Grid item sm={12} lg={12}>
              <InputTextField label="Password" name="password" type="password" />
            </Grid>

            <Grid item sm={12} lg={12}>
              <InputTextField label="Confirm password" name="password_confirmation" type="password" />
            </Grid>

            <Loader open={isLoading} />

            <Grid item sm={12} lg={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Register
              </Button>
            </Grid>

            <Grid item sm={12} lg={12}>
              <Button onClick={clearFields} variant="contained" color="secondary" fullWidth>
                Clear
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </FormProvider>
  );
};

export default RegisterForm;
