import React, { useContext } from 'react';
import { Edit, Delete } from '@material-ui/icons';
import { IconButton, Tooltip } from '@material-ui/core';
import { amber, red } from '@material-ui/core/colors';
import EditDialogs from '../dialogs/EditDialog';
import { DialogContext } from '../../contexts/DialogContext';

const styles = {
  edit: {
    color: amber[500]
  },
  delete: {
    color: red[500]
  }
};

const ActionIcons = () => {
  const { editDialog, openEditDialog } = useContext(DialogContext);

  return (
    <>
      <Tooltip title="Edit">
        <IconButton
          aria-label="edit"
          style={styles.edit}
          onClick={() => openEditDialog()}
        >
          <Edit fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton aria-label="delete" style={styles.delete}>
          <Delete fontSize="small" />
        </IconButton>
      </Tooltip>
      {editDialog ? <EditDialogs open={editDialog} /> : ""}
    </>
  );
}

export default ActionIcons;
