import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  Menu,
  MenuItem,
} from '@mui/material/';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../redux/actions/auth.action';

import LoginForm from '../forms/login';
import AddBlog from '../forms/addblog';

const NavigationBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [blog, setBlog] = useState(false);
  const menu = Boolean(anchorEl);

  useEffect(() => {
    console.log(user);
    if (user.length) setOpen(false);
  }, [user]);

  const openBlog = () => {
    setBlog(true);
    closeMenu();
  };

  const closeBlog = () => {
    setBlog(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    dispatch(userLogout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={openMenu} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Menu
            open={menu}
            anchorEl={anchorEl}
            onClose={closeMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={openBlog}>
              <Typography variant="h6">
                <AddCircleIcon color="secondary" /> ADD BLOG
              </Typography>{' '}
            </MenuItem>
          </Menu>

          <Dialog open={blog} onClose={closeBlog} maxWidth="lg">
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

          {!user.length ? (
            <Button onClick={handleOpen} color="inherit">
              Login
            </Button>
          ) : (
            <Button onClick={logoutUser} color="inherit">
              Logout
            </Button>
          )}
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
