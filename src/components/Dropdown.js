import React from 'react';
import './Dropdown.css';

function Dropdown() {
  return (
    <li className="dropdown">
      <a href="javascript:void(0)" className="dropbtn">Dropdown</a>
      <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </li>
  );
}

export default Dropdown;



