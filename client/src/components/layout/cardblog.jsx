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
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CloseIcon from '@mui/icons-material/Close';

const CardBlog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const blog = {
    title: 'Reprehenderit incidi',
    message:
      'Qui hic reprehenderit provident, aliquip alias ut consequuntur sunt a et ipsum quas saepe labore commodo et quas corporis eiusmod consequatur? Nesciunt, dicta incidunt, delectus, quasi soluta irure facere accusamus qui non rerum rerum officia laborum in consequatur? Rerum fuga. Cum sit quo iusto quo aut alias blanditiis ut ipsam consectetur cillum atque veritatis quasi culpa ab voluptatem, laboris nulla sed nobis reprehenderit, distinctio. Nostrud officia qui laboris mollitia amet, lorem cupidatat voluptas est, a in quaerat sint molestiae elit, tempore, recusandae. Amet, reiciendis consequatur? Velit in ipsum, eum aut ut commodi numquam perspiciatis, reiciendis accusantium ipsum, officia praesentium amet, praesentium blanditiis in omnis voluptates doloribus quisquam adipisicing voluptas im.',
  };

  return (
    <Grid item lg={4} xl={4} sm={6} md={6} xs={12}>
      <Card>
        <CardMedia component="img" height="140" image="https://via.placeholder.com/600/771796" alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {blog.title}
          </Typography>
          <Typography paragraph={true} variant="body2" color="text.secondary">
            {blog.message}
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

              <Dialog open={open} onClose={handleClose}>
                <DialogTitle
                  sx={{ display: 'flex', justifyContent: 'space-between', margin: 0, padding: 2, paddingBottom: 0 }}
                >
                  <Typography fontSize="1.4em">Edit Blog</Typography>
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <EditBlog titleBlog={blog.title} contentBlog={blog.message} />
              </Dialog>
            </Grid>

            <Grid item>
              <Button fullWidth variant="outlined" size="small" color="secondary" startIcon={<DeleteRoundedIcon />}>
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
