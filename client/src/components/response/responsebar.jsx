import React from 'react';
import { Typography, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ResponseBar = ({ open, message, handleClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert variant="filled" severity="success" onClose={handleClose}>
        <Typography fontWeight="bold" variant="subtitle1">
          {message}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default ResponseBar;
