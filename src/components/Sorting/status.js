import React from 'react';
import Card from '../cards';

// Status component takes three props: filterr, tickets, and users
export default function Status({ filterr, tickets, users }) {
  // Create a copy of tickets array for sorting
  let newSortedTickets;
  let tempSortTickets = [...tickets];

  // Sorting logic based on the ordering specified in filterr
  if (filterr?.ordering === "priority") {
    newSortedTickets = tempSortTickets.sort((a, b) => b.priority - a.priority);
  } else if (filterr?.ordering === "title") {
    newSortedTickets = tempSortTickets.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Filter tickets based on status
  const backlog = newSortedTickets?.filter((obj) => obj.status === "Backlog");
  const todo = newSortedTickets?.filter((obj) => obj.status === "Todo");
  const inprogress = newSortedTickets?.filter((obj) => obj.status === "In progress");
  const done = newSortedTickets?.filter((obj) => obj.status === "Done");
  const canceled = newSortedTickets?.filter((obj) => obj.status === "Canceled");

  // Render components for each status
  return (
    <>
      {/* Render component for backlog status */}
      <div className='grid-col'>
        <div className='grid-col-head'>
          <div>
            <i style={{ color: '#ff5f56' }} className='bx bxs-error-circle'></i>
            <span style={{ margin: '0 7px', fontSize: '1.1rem' }}>Backlog</span>
            <span>{backlog?.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp'></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp'></i>
          </div>
        </div>
        {/* Render cards for backlog status or a message if none */}
        {backlog?.length !== 0 ?
          backlog?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />) :
          <span style={{ color: '#545454', fontSize: '0.8rem' }}>Nothing is in backlog</span>
        }
      </div>

      {/* Render component for todo status */}
      <div className='grid-col'>
        <div className='grid-col-head'>
          <div>
            <i style={{ color: '#e2e2e2' }} className='bx bx-circle'></i>
            <span style={{ margin: '0 7px', fontSize: '1.1rem' }}>Todo</span>
            <span>{todo?.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp'></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp'></i>
          </div>
        </div>
        {/* Render cards for todo status or a message if none */}
        {todo?.length !== 0 ?
          todo?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />) :
          <span style={{ color: '#545454', fontSize: '0.8rem' }}>Nothing todo</span>
        }
      </div>

      {/* Render component for in-progress status */}
      <div className='grid-col'>
        <div className='grid-col-head'>
          <div>
            <i style={{ color: '#f1ca4b' }} className='bx bx-loader-circle'></i>
            <span style={{ margin: '0 7px', fontSize: '1.1rem' }}>In Progress</span>
            <span>{inprogress?.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp'></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp'></i>
          </div>
        </div>
        {/* Render cards for in-progress status or a message if none */}
        {inprogress?.length !== 0 ?
          inprogress?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />) :
          <span style={{ color: '#545454', fontSize: '0.8rem' }}>Nothing is in progress</span>
        }
      </div>

      {/* Render component for done status */}
      <div className='grid-col'>
        <div className='grid-col-head'>
          <div>
            <i style={{ color: '#5e6ad2' }} className='bx bxs-check-circle'></i>
            <span style={{ margin: '0 7px', fontSize: '1.1rem' }}>Done</span>
            <span>{done?.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp'></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp'></i>
          </div>
        </div>
        {/* Render cards for done status or a message if none */}
        {done?.length !== 0 ?
          done?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />) :
          <span style={{ color: '#545454', fontSize: '0.8rem' }}>Nothing is done</span>
        }
      </div>

      {/* Render component for canceled status */}
      <div className='grid-col'>
        <div className='grid-col-head'>
          <div>
            <i style={{ color: '#94a2b3' }} className='bx bxs-x-circle'></i>
            <span style={{ margin: '0 7px', fontSize: '1.1rem' }}>Canceled</span>
            <span>{canceled?.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp'></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp'></i>
          </div>
        </div>
        {/* Render cards for canceled status or a message if none */}
        {canceled?.length !== 0 ?
          canceled?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />) :
          <span style={{ color: '#545454', fontSize: '0.8rem' }}>Nothing is canceled</span>
        }
      </div>
    </>
  );
}
