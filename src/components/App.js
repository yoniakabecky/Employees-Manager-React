import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Employees from './employees/Employees';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Employees />
    </BrowserRouter>
  );
}

export default App;
