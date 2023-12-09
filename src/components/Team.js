// components/Team.js
import React from 'react';

const Team = ({ teamMembers }) => {
  return (
    <div>
      <h4>Team:</h4>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>{`${member.first_name} ${member.last_name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
