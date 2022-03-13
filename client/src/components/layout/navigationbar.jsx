import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Dialog, DialogTitle } from '@mui/material/';
import CloseIcon from '@mui/icons-material/Close';
import AddCardIcon from '@mui/icons-material/AddCard';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout, persistentLogin, resetRegistrationResponse } from '../../redux/actions/auth.action';

import RegisterForm from '../forms/register';
import LoginForm from '../forms/login';
import AddBlog from '../forms/addblog';

const NavigationBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [register, setRegister] = useState(false);
  const [open, setOpen] = useState(false);
  const [blog, setBlog] = useState(false);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('user'));
    if (local !== null) dispatch(persistentLogin(local));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      setOpen(false);
    }
  }, [user]);

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
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={openBlog} size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <AddCardIcon color="inherit" />
          </IconButton>

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

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blogs{' '}
          </Typography>

          {user ? (
            <Button disableRipple={true} onClick={logoutUser} color="inherit">
              Logout
            </Button>
          ) : (
            <>
              <Button disableRipple={true} onClick={handleOpen} color="inherit">
                Login
              </Button>

              <Button disableRipple={true} onClick={openRegister} color="inherit">
                Register
              </Button>
            </>
          )}

          {/* REGISTER MODAL */}
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
