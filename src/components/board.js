import React from 'react';
import Status from './Sorting/status';
import Priority from './Sorting/priority';
import Users from './Sorting/users';

/**
 * Board component displays the main board based on the specified grouping.
 * @param {Object} filter - The current filter object.
 * @param {Array} tickets - The array of tickets.
 * @param {Array} users - The array of users.
 * @returns {JSX.Element} - JSX representing the Board component.
 */
export default function Board({ filter, tickets, users }) {
  // Create an object with user data using user IDs as keys
  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});

  // Render the main board component based on the specified grouping
  return (
    <div className='main-board'>
      {filter?.grouping === 'status' && <Status filterr={filter} tickets={tickets} users={userMap} />}
      {filter?.grouping === 'priority' && <Priority filterr={filter} tickets={tickets} users={userMap} />}
      {filter?.grouping === 'user' && <Users filterr={filter} tickets={tickets} users={userMap} />}
    </div>
  );
}
