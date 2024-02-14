import React from 'react';
import Card from '../cards';

// Priority component takes three props: filterr, tickets, and users
export default function Priority({ filterr, tickets, users }) {
  // Create a copy of tickets array for sorting
  let newSortedTickets;
  let tempSortTickets = [...tickets];

  // Sorting logic based on the ordering specified in filterr
  if (filterr?.ordering === "priority") {
    newSortedTickets = tempSortTickets.sort((a, b) => b.priority - a.priority);
  } else if (filterr?.ordering === "title") {
    newSortedTickets = tempSortTickets.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Filter tickets based on priority levels
  const urgent = newSortedTickets?.filter((obj) => obj.priority === 4);
  const high = newSortedTickets?.filter((obj) => obj.priority === 3);
  const medium = newSortedTickets?.filter((obj) => obj.priority === 2);
  const low = newSortedTickets?.filter((obj) => obj.priority === 1);
  const no_priority = newSortedTickets?.filter((obj) => obj.priority === 0);

  // Render components for each priority level
  return (
    <>
      {/* Render component for tickets with no priority */}
      <div className='grid-col'>
        <div className='grid-col-head'>
          <div>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90'></i>
            <span style={{ margin: '0 7px', fontSize: '1.1rem' }}>No priority</span>
            <span>{no_priority?.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp'></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp'></i>
          </div>
        </div>
        {/* Render cards for tickets with no priority or a message if none */}
        {no_priority?.length !== 0 ?
          no_priority?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />) :
          <span style={{ color: '#545454', fontSize: '0.8rem' }}>No one with no priority</span>
        }
      </div>

      {/* Render component for urgent priority */}
      <div className='grid-col'>
        <div className='grid-col-head'>
          <div>
            <i style={{ color: '#fc7840' }} className='bx bxs-message-alt-error'></i>
            <span style={{ margin: '0 7px', fontSize: '1.1rem' }}>Urgent</span>
            <span>{urgent?.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp'></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp'></i>
          </div>
        </div>
        {/* Render cards for urgent priority or a message if none */}
        {urgent?.length !== 0 ?
          urgent?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />) :
          <span style={{ color: '#545454', fontSize: '0.8rem' }}>No one with urgent priority</span>
        }
      </div>

      {/* Render component for high priority */}
      <div className='grid-col'>
        <div className='grid-col-head'>
          <div>
            <i className='bx bx-signal-3'></i>
            <span style={{ margin: '0 7px', fontSize: '1.1rem' }}>High</span>
            <span>{high?.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp'></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp'></i>
          </div>
        </div>
        {/* Render cards for high priority or a message if none */}
        {high?.length !== 0 ?
          high?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />) :
          <span style={{ color: '#545454', fontSize: '0.8rem' }}>No one with high priority</span>
        }
      </div>

      {/* Render component for medium priority */}
      <div className='grid-col'>
        <div className='grid-col-head'>
          <div>
            <i className='bx bx-signal-2'></i>
            <span style={{ margin: '0 7px', fontSize: '1.1rem' }}>Medium</span>
            <span>{medium?.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp'></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp'></i>
          </div>
        </div>
        {/* Render cards for medium priority or a message if none */}
        {medium?.length !== 0 ?
          medium?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />) :
          <span style={{ color: '#545454', fontSize: '0.8rem' }}>No one with medium priority</span>
        }
      </div>

      {/* Render component for low priority */}
      <div className='grid-col'>
        <div className='grid-col-head'>
          <div>
            <i className='bx bx-signal-1'></i>
            <span style={{ margin: '0 7px', fontSize: '1.1rem' }}>Low</span>
            <span>{low?.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp'></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp'></i>
          </div>
        </div>
        {/* Render cards for low priority or a message if none */}
        {low?.length !== 0 ?
          low?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />) :
          <span style={{ color: '#545454', fontSize: '0.8rem' }}>No one with low priority</span>
        }
      </div>
    </>
  );
}
