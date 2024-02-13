import React from 'react';
import Status from './Sorting/status';
import Priority from './Sorting/priority';
import Users from './Sorting/users';

/**
 * Board component displays different views based on the selected grouping in the filter.
 * @param {Object} props - Component props.
 * @param {Object} props.filter - Filter object containing grouping information.
 * @param {Array} props.tickets - Array of ticket objects.
 * @param {Array} props.users - Array of user objects.
 * @returns {JSX.Element} - Rendered Board component.
 */
export default function Board({ filter, tickets, users }) {
  const tick = tickets;

  return (
    <div className='main-board'>
      {filter?.grouping === "status" && (<Status filterr={filter} tickets={tick} users={users} />)}
      {filter?.grouping === "priority" && (<Priority filterr={filter} tickets={tick} users={users} />)}
      {filter?.grouping === "user" && (<Users filterr={filter} tickets={tick} users={users} />)}
    </div>
  );
}
