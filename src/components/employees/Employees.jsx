import React from 'react';
import {
  Container, Table, TableBody, TableCell, TableRow,
  Checkbox, TablePagination
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';
import { initialData } from '../../store/store';
import EmployeesHeader from './EmployeesHeader';
import ActionIcons from './ActionIcons';

const styles = {
  table: {
    minWidth: 650,
  },
};

const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: grey[50],
    },
  },
}))(TableRow);

const Employees = () => {
  return (
    <Container>
      <Table className={styles.table}>
        <EmployeesHeader />
        <TableBody>
          {initialData.map((data, index) => (
            <StyledTableRow key={index}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell align="left">{data.name}</TableCell>
              <TableCell align="left">{data.email}</TableCell>
              <TableCell align="left">{data.address}</TableCell>
              <TableCell align="left">{data.phone}</TableCell>
              <TableCell>
                <ActionIcons />
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </Container>
  );
}

export default Employees;
