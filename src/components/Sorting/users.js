import React from 'react';
import Card from '../cards';
import ProfileImage from '../profileImage';

// Users component takes three props: filterr, tickets, and users
export default function Users({ filterr, tickets, users }) {
  // Create a copy of tickets array for sorting
  let newSortedTickets;
  let tempSortTickets = [...tickets];

  // Sorting logic based on the ordering specified in filterr
  if (filterr.ordering === "priority") {
    newSortedTickets = tempSortTickets.sort((a, b) => b.priority - a.priority);
  } else if (filterr.ordering === "title") {
    newSortedTickets = tempSortTickets.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Convert users object into an array for iteration
  const user_s = Object.values(users);
  const mapping = {};

  // Iterate through users to create a mapping of user IDs to their associated tickets
  user_s?.forEach((ele, i) => {
    let temp = [];

    for (let i in newSortedTickets) {
      if (newSortedTickets[i].userId === ele.id) {
        temp.push(newSortedTickets[i]);
      }
    }

    mapping[ele.id] = temp;
  });

  // Render the component with user information and associated tickets
  return (
    <>
      {user_s?.map((ele, i) => {
        return (
          <div key={i} className='grid-col'>
            <div className='grid-col-head'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Render ProfileImage component with user information */}
                <ProfileImage key={i} name={ele.name} available={true} />
                <span style={{ margin: '0 7px', fontSize: '1.1rem' }}>{ele.name}</span>
                <span>{mapping[ele.id]?.length}</span>
              </div>
              <div>
                <i className='bx bx-plus bx-rotate-90 curp'></i>
                <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp'></i>
              </div>
            </div>
            {/* Map through associated tickets and render Card component for each */}
            {mapping[ele.id]?.map((ele, ii) => {
              return (<Card key={ii} filterr={filterr} obj={ele} user={users} />);
            })}
          </div>
        );
      })}
    </>
  );
}
