import React, { useState } from 'react';
import EditBlog from '../forms/editblog';
import {
  Dialog,
  DialogTitle,
  IconButton,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import BlogPic from '../../assets/blog-pic.jpg';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch } from 'react-redux';
import { removeBlog } from '../../redux/actions/blogs.action';

const CardBlog = ({ title, content, blogID }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const deleteBlog = () => {
    dispatch(removeBlog(blogID));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item lg={4} xl={4} sm={12} md={6} xs={12}>
      <Card>
        <CardMedia component="img" height="140" image={BlogPic} alt="green iguana" />
        <CardContent sx={{ height: '300px' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography paragraph={true} variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container spacing={1}>
            <Grid item>
              <Button
                onClick={handleOpen}
                fullWidth
                variant="contained"
                size="small"
                color="primary"
                startIcon={<EditRoundedIcon />}
              >
                Edit
              </Button>

              <Dialog open={open} onClose={handleClose} maxWidth="sm">
                <DialogTitle
                  sx={{ display: 'flex', justifyContent: 'space-between', margin: 0, padding: 2, paddingBottom: 0 }}
                >
                  <Typography fontSize="1.4em">Edit Blog</Typography>
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <EditBlog titleBlog={title} contentBlog={content} />
              </Dialog>
            </Grid>

            <Grid item>
              <Button
                onClick={deleteBlog}
                fullWidth
                variant="outlined"
                size="small"
                color="secondary"
                startIcon={<DeleteRoundedIcon />}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardBlog;
