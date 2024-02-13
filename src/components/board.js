import React from 'react';
import Status from './Sorting/status';
import Priority from './Sorting/priority';
import Users from './Sorting/users';

// Board component takes three props: filter, tickets, and users
export default function Board({ filter, tickets, users }) {
  // Create an empty object to store user data
  const user_s = {};
  // Copy the tickets array to a variable named tick
  const tick = tickets;

  // Iterate through the users array and populate the user_s object with user data
  users.forEach((element, index) => {
    user_s[element.id] = element;
  });

  // Render the main board component
  return (
    <div className='main-board'>
      {/* If grouping is "status", render the Status component with relevant props */}
      {filter?.grouping === "status" && (<Status filterr={filter} tickets={tick} users={user_s} />)}

      {/* If grouping is "priority", render the Priority component with relevant props */}
      {filter?.grouping === "priority" && (<Priority filterr={filter} tickets={tick} users={user_s} />)}

      {/* If grouping is "user", render the Users component with relevant props */}
      {filter?.grouping === "user" && (<Users filterr={filter} tickets={tick} users={user_s} />)}
    </div>
  );
}
