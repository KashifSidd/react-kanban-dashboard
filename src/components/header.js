import React, { useState } from 'react';
import DropdownMenu from './dropDownMenu';

// Header component receives 'filter' and 'changeFilter' as props
const Header = ({ filter, changeFilter }) => {
  // State to track the open/closed state of the dropdown menu
  const [open, setOpen] = useState(false);

  // Rendering the Header component
  return (
    <nav className='box-shadow header-main'>
      <div className='header-nav'>
        {/* Display box with an icon, text, and toggle arrow */}
        <div className='displaybx box-shadow' onClick={() => setOpen(!open)}>
          <i className='bx bx-filter-alt'></i>
          <p style={{ margin: '0 5px' }}>Display</p>
          {open ? <i className='bx bx-x'></i> : <i className='bx bx-chevron-down'></i>}
        </div>

        {/* Rendering the dropdown menu only if 'open' state is true */}
        {open && <DropdownMenu filter={filter} changeFilter={changeFilter} />}
      </div>
    </nav>
  );
};

// Exporting the Header component
export default Header;