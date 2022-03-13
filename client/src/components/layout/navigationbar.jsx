import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Dialog, DialogTitle, Stack } from '@mui/material/';
import CloseIcon from '@mui/icons-material/Close';
import AddCardIcon from '@mui/icons-material/AddCard';
import { useSelector, useDispatch } from 'react-redux';
import {
  userLogout,
  persistentLogin,
  resetRegistrationResponse,
  resetLoginStatus,
} from '../../redux/actions/auth.action';

import RegisterForm from '../forms/register';
import LoginForm from '../forms/login';
import SearchInput from '../interfaces/searchinput';
import AddBlog from '../forms/addblog';
import ResponseBar from '../response/responsebar';

const NavigationBar = () => {
  const dispatch = useDispatch();
  const registerResponse = useSelector((state) => state.registrationResponse);
  const loginResponse = useSelector((state) => state.loginResponse);
  const user = useSelector((state) => state.user);
  const [register, setRegister] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [blog, setBlog] = useState(false);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('user'));
    if (local !== null) dispatch(persistentLogin(local));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //notify if the login successful
  useEffect(() => {
    if (loginResponse.username) {
      setMessage('Login Successful');
      setPopUp(true);
    }
  }, [loginResponse]);

  //notify if the registration successful
  useEffect(() => {
    if (registerResponse.statusText === 'Created') {
      setMessage('Registration Successful');
      closeRegister();
      setPopUp(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerResponse]);

  useEffect(() => {
    if (user) {
      setOpen(false);
    }
  }, [user]);

  const closePoup = () => {
    setPopUp(false);
  };

  const openRegister = () => {
    setRegister(true);
  };

  const closeRegister = () => {
    //clear response status
    dispatch(resetRegistrationResponse());

    setRegister(false);
  };

  const openBlog = () => {
    setBlog(true);
  };

  const closeBlog = () => {
    setBlog(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(resetRegistrationResponse());
  };

  const logoutUser = () => {
    dispatch(userLogout());
    dispatch(resetLoginStatus());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Dialog open={blog} onClose={closeBlog} maxWidth="sm">
            <DialogTitle
              sx={{ display: 'flex', justifyContent: 'space-between', margin: 0, padding: 2, paddingBottom: 0 }}
            >
              <Typography fontSize="1.4em">Add Blog</Typography>
              <IconButton onClick={closeBlog}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <AddBlog />
          </Dialog>

          {user ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={openBlog}
              size="small"
              edge="start"
              startIcon={<AddCardIcon />}
            >
              Add Blog
            </Button>
          ) : null}

          <SearchInput />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kredo Blogs
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {user ? (
            <Button variant="outlined" disableRipple={true} onClick={logoutUser} color="inherit">
              Logout
            </Button>
          ) : (
            <>
              <Stack direction="row" spacing={1}>
                <Button variant="contained" disableRipple={true} onClick={handleOpen} color="success">
                  Login
                </Button>

                <Button variant="outlined" disableRipple={true} onClick={openRegister} color="inherit">
                  Register
                </Button>
              </Stack>
            </>
          )}

          {/* REGISTER MODAL */}
          <ResponseBar open={popUp} message={message} handleClose={closePoup} />
          <Dialog open={register} onClose={closeRegister} maxWidth="xs" fullWidth>
            <DialogTitle
              sx={{ display: 'flex', justifyContent: 'space-between', margin: 0, padding: 2, paddingBottom: 0 }}
            >
              <Typography fontSize="1.4em">Register</Typography>
              <IconButton onClick={closeRegister}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <RegisterForm />
          </Dialog>

          {/* LOGIN MODAL */}
          <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
            <DialogTitle
              sx={{ display: 'flex', justifyContent: 'space-between', margin: 0, padding: 2, paddingBottom: 0 }}
            >
              <Typography fontSize="1.4em">User Login</Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <LoginForm />
          </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
