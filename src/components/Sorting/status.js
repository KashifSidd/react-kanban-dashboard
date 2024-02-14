import React from 'react';
import Card from '../cards';

/**
 * Status component displays tickets grouped by different statuses.
 * @param {Object} filterr - The current filter object.
 * @param {Array} tickets - The array of tickets.
 * @param {Array} users - The array of users.
 * @returns {JSX.Element} - JSX representing the Status component.
 */
export default function Status({ filterr, tickets, users }) {
  // Create a copy of tickets array for sorting
  let newSortedTickets = [...tickets].sort((a, b) =>
    filterr?.ordering === 'priority' ? b.priority - a.priority : a.title.localeCompare(b.title)
  );

  // Array of different statuses
  const statuses = ['Backlog', 'Todo', 'In progress', 'Done', 'Canceled'];

  return (
    <>
      {/* Iterate over each status and render corresponding components */}
      {statuses.map((status) => (
        <div key={status} className='grid-col'>
          <div className='grid-col-head'>
            <div>
              {/* Display status icon based on the status type */}
              {status === 'Backlog' && <i style={{ color: '#ff5f56' }} className='bx bxs-error-circle'></i>}
              {status === 'Todo' && <i style={{ color: '#e2e2e2' }} className='bx bx-circle'></i>}
              {status === 'In progress' && <i style={{ color: '#f1ca4b' }} className='bx bx-loader-circle'></i>}
              {status === 'Done' && <i style={{ color: '#5e6ad2' }} className='bx bxs-check-circle'></i>}
              {status === 'Canceled' && <i style={{ color: '#94a2b3' }} className='bx bxs-x-circle'></i>}
              {/* Display status name and count */}
              <span style={{ margin: '0 7px', fontSize: '1.1rem' }}>{status}</span>
              <span>{newSortedTickets?.filter((obj) => obj.status === status).length}</span>
            </div>
            <div>
              {/* Additional actions/icons for the status */}
              <i className='bx bx-plus bx-rotate-90 curp'></i>
              <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp'></i>
            </div>
          </div>
          {/* Render cards for the current status or a message if none */}
          {newSortedTickets?.filter((obj) => obj.status === status).length !== 0 ? (
            newSortedTickets
              ?.filter((obj) => obj.status === status)
              .map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />)
          ) : (
            <span style={{ color: '#545454', fontSize: '0.8rem' }}>Nothing in {status.toLowerCase()}</span>
          )}
        </div>
      ))}
    </>
  );
}
