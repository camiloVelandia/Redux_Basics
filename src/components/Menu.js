import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav id="menu">
      <Link to="/"> usuarios</Link>
      <Link to="/tareas"> tareas</Link>
    </nav>
  );
};

export default Menu;