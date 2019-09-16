import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, createMuiTheme, Container } from '@material-ui/core';
import { RemoveCircle, AddCircle } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';
import AddDialog from '../dialogs/AddDialog';
import { DialogContext } from '../../contexts/DialogContext';

const theme = createMuiTheme();

const ColorButton = withStyles(() => ({
  root: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  }
}))(Button);

const styles = {
  appBar: {
    backgroundColor: "#435D7C"
  },
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  icons: {
    marginRight: theme.spacing(1),
    fontSize: "1rem"
  }
};

const Navbar = () => {
  const { addDialog, openAddDialog } = useContext(DialogContext);

  return (
    <AppBar position="static" style={styles.appBar}>
      <Container>
        <Toolbar>
          <Typography variant="h5" style={styles.title}>
            Manege <strong>Employees</strong>
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={styles.menuButton}
            disabled
          >
            <RemoveCircle style={styles.icons} />
            Delete
        </Button>
          <ColorButton variant="contained" color="primary" size="small" onClick={() => openAddDialog()}>
            <AddCircle style={styles.icons} />
            Add New Employees
        </ColorButton>
          {addDialog ? <AddDialog open={addDialog} /> : ""}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar
