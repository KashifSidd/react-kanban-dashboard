import React from 'react'
import { useState } from 'react'
import DropdownMenu from './dropDownMenu';

export default function Header({filter , changeFilter}) {

  const [open , setOpen] = useState(false);

  return (
    <nav className='box-shadow header-main'>
      <div className='header-nav'>
        <div className='displaybx box-shadow' onClick={() => setOpen(!open)}>
          
          <i className='bx bx-filter-alt' ></i> 
          <p style={{margin:'0 5px'}}>Display</p>
          {open ? (<i className='bx bx-x'></i>) : (<i className='bx bx-chevron-down'></i>)}
          
        </div>

        {open && <DropdownMenu filter = {filter} changeFilter = {changeFilter}/>}

      </div>
    </nav>
  )
}