import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import BlogPic from '../../assets/blog-pic.jpg';

const ViewMore = ({ contentBlog }) => {
  return (
    <Grid container direction="column">
      <Paper sx={{ padding: '25px' }}>
        <Grid item justifyContent="center">
          <div className="image-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <img src={BlogPic} alt="blogpic" style={{ height: '250px' }} />
          </div>
        </Grid>
        <Grid item>
          <Typography variant="body1">{contentBlog}</Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ViewMore;
