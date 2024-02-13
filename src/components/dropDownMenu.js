import React from 'react'

export default function DropdownMenu({filter , changeFilter}) {
  return (
    <div className='drop-down'>
        <div>
            <div className='drop-down-item'>
                <p>Grouping</p>
                <select defaultValue={filter?.grouping} onChange={(e) =>{changeFilter('grouping' , e.target.value)}}>
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <div className='drop-down-item'>
                <p>Ordering</p>
                <select defaultValue={filter?.ordering} onChange={(e) =>{changeFilter('ordering' , e.target.value)}}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </div>
    </div>
  );
}
