import React, { useState } from 'react';
import {
  Button, Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, IconButton, createMuiTheme
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const theme = createMuiTheme();

const styles = {
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
};

const AddDialog = (props) => {
  const [open, setOpen] = useState(props);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add An Employee
          <IconButton aria-label="close" style={styles.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            margin="normal"
            id="name"
            label="Name"
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            margin="normal"
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            margin="normal"
            id="address"
            label="Address"
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            margin="normal"
            id="phone"
            label="Phone"
            type="tel"
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddDialog;
