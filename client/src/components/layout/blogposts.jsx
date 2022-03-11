import React from 'react';
import { Container, Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';

const BlogPosts = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '30px' }}>
      <Grid container item sm={12} spacing={3}>
        <Grid item lg={4} xl={4} sm={6} md={6} xs={12}>
          <Card>
            <CardMedia component="img" height="140" image="https://via.placeholder.com/600/771796" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPosts;
