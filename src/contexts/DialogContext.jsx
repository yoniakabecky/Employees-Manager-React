import React, { createContext, useState } from 'react';

export const DialogContext = createContext();

const DialogContextProvider = (props) => {
  const [addDialog, setAddDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [editEmployee, setEditEmployee] = useState([]);

  const openAddDialog = (props) => {
    setAddDialog(true);
  }

  const closeAddDialog = () => setAddDialog(false);

  const openEditDialog = (employee) => {
    setEditDialog(true);
    setEditEmployee(employee);
  };

  const closeEditDialog = () => setEditDialog(false);

  return (
    <DialogContext.Provider
      value={{ addDialog, editDialog, editEmployee, openAddDialog, openEditDialog, closeAddDialog, closeEditDialog }}>
      {props.children}
    </DialogContext.Provider>
  )
}

export default DialogContextProvider;
