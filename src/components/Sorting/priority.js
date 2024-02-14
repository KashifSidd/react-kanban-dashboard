import React from 'react';
import Card from '../cards';

/**
 * Priority component displays tickets grouped by different priority levels.
 * @param {Object} filterr - The current filter object.
 * @param {Array} tickets - The array of tickets.
 * @param {Array} users - The array of users.
 * @returns {JSX.Element} - JSX representing the Priority component.
 */
export default function Priority({ filterr, tickets, users }) {
  // Create a copy of tickets array for sorting
  let newSortedTickets = [...tickets].sort((a, b) =>
    filterr?.ordering === 'priority' ? b.priority - a.priority : a.title.localeCompare(b.title)
  );

  // Priority levels and their corresponding icons
  const priorityLevels = [
    { level: 'No priority', icon: 'bx bx-dots-vertical-rounded bx-rotate-90' },
    { level: 'Urgent', icon: 'bx bxs-message-alt-error', color: '#fc7840' },
    { level: 'High', icon: 'bx bx-signal-3' },
    { level: 'Medium', icon: 'bx bx-signal-2' },
    { level: 'Low', icon: 'bx bx-signal-1' },
  ];

  return (
    <>
      {/* Iterate over each priority level and render corresponding components */}
      {priorityLevels.map(({ level, icon, color }) => (
        <div key={level} className='grid-col'>
          <div className='grid-col-head'>
            <div>
              {/* Display priority level icon and count */}
              {icon && <i style={{ color }} className={icon}></i>}
              <span style={{ margin: '0 7px', fontSize: '1.1rem' }}>{level}</span>
              <span>{newSortedTickets?.filter((obj) => obj.priority === getPriorityValue(level)).length}</span>
            </div>
            <div>
              {/* Additional actions/icons for the priority level */}
              <i className='bx bx-plus bx-rotate-90 curp'></i>
              <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp'></i>
            </div>
          </div>
          {/* Render cards for the current priority level or a message if none */}
          {newSortedTickets?.filter((obj) => obj.priority === getPriorityValue(level)).length !== 0 ? (
            newSortedTickets
              ?.filter((obj) => obj.priority === getPriorityValue(level))
              .map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />)
          ) : (
            <span style={{ color: '#545454', fontSize: '0.8rem' }}>No one with {level.toLowerCase()}</span>
          )}
        </div>
      ))}
    </>
  );

  /**
   * Helper function to get the numerical value of priority based on the priority level.
   * @param {string} level - Priority level.
   * @returns {number} - Numeric value representing the priority.
   */
  function getPriorityValue(level) {
    const priorityMap = {
      Urgent: 4,
      High: 3,
      Medium: 2,
      Low: 1,
      'No priority': 0,
    };

    return priorityMap[level] || 0;
  }
}