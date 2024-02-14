import React from 'react';
import Card from '../cards';
import ProfileImage from '../profileImage';

/**
 * Users component displays users and their associated tickets.
 * @param {Object} filterr - The current filter object.
 * @param {Array} tickets - The array of tickets.
 * @param {Object} users - The object containing user details.
 * @returns {JSX.Element} - JSX representing the Users component.
 */
export default function Users({ filterr, tickets, users }) {
  // Create a copy of tickets array for sorting
  let newSortedTickets = [...tickets].sort((a, b) =>
    filterr.ordering === 'priority' ? b.priority - a.priority : a.title.localeCompare(b.title)
  );

  // Convert users object into an array for iteration
  const userArray = Object.values(users);

  // Create a mapping of user IDs to their associated tickets
  const userTicketsMapping = userArray.reduce((acc, user) => {
    acc[user.id] = newSortedTickets.filter(ticket => ticket.userId === user.id);
    return acc;
  }, {});

  // Render the component with user information and associated tickets
  return (
    <>
      {userArray.map((user, index) => (
        <div key={index} className='grid-col'>
          <div className='grid-col-head'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Render ProfileImage component with user information */}
              <ProfileImage key={index} name={user.name} available={true} />
              <span style={{ margin: '0 7px', fontSize: '1.1rem' }}>{user.name}</span>
              <span>{userTicketsMapping[user.id]?.length}</span>
            </div>
            <div>
              <i className='bx bx-plus bx-rotate-90 curp'></i>
              <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp'></i>
            </div>
          </div>
          {/* Map through associated tickets and render Card component for each */}
          {userTicketsMapping[user.id]?.map((ticket, i) => (
            <Card key={i} filterr={filterr} obj={ticket} user={users} />
          ))}
        </div>
      ))}
    </>
  );
}