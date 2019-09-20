import React, { useState } from 'react';
import { Edit, Delete } from '@material-ui/icons';
import { IconButton, Tooltip } from '@material-ui/core';
import { amber, red } from '@material-ui/core/colors';
import EditDialogs from '../dialogs/EditDialog';

const styles = {
  edit: {
    color: amber[500]
  },
  delete: {
    color: red[500]
  }
};

const ActionIcons = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Tooltip title="Edit">
        <IconButton
          aria-label="edit"
          style={styles.edit}
          onClick={() => setOpenDialog(!openDialog)}
        >
          <Edit fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton aria-label="delete" style={styles.delete}>
          <Delete fontSize="small" />
        </IconButton>
      </Tooltip>
      {openDialog ? <EditDialogs open={openDialog} /> : ""}
    </>
  );
}

export default ActionIcons;
