import React from 'react';
import {
  TableHead, TableRow, TableCell, TableSortLabel, Checkbox,
  createMuiTheme
} from '@material-ui/core'
import { headerContents } from "../../store/store";

const theme = createMuiTheme();

const styles = {
  header: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  }
};

const EmployeesHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell style={styles.header}>
          <Checkbox />
        </TableCell>
        {headerContents.map(headCell => (
          <TableCell key={headCell.id} align="left">
            {/* <TableSortLabel>{headCell.label}</TableSortLabel> */}
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default EmployeesHeader;
