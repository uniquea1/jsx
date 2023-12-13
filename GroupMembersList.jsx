import React from 'react';
import './App.css';
const GroupMembersList = () => {
  // Sample array of group members
  const groupMembers = [
    'abraham',
    'abenezer',
    'meron',
    'abebe',
    'selam',
    'yohnas',
    'sami',
    'nati',
    'abel',
    'sasu',
  ];

  return (
    <div className='one'>
      <h1>Group Members</h1>
      <ul>
        {groupMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupMembersList;
