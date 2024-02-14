import React from 'react';

// DropdownMenu component takes two props: filter and changeFilter function
export default function DropdownMenu({ filter, changeFilter }) {
  return (
    <div className='drop-down'>
      <div>
        {/* Dropdown item for grouping */}
        <div className='drop-down-item'>
          <p>Grouping</p>
          {/* Dropdown select for grouping with options */}
          <select defaultValue={filter?.grouping} onChange={(e) => { changeFilter('grouping', e.target.value) }}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        {/* Dropdown item for ordering */}
        <div className='drop-down-item'>
          <p>Ordering</p>
          {/* Dropdown select for ordering with options */}
          <select defaultValue={filter?.ordering} onChange={(e) => { changeFilter('ordering', e.target.value) }}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}