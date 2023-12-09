// pages/TeamDetailsPage.js
import React from 'react';
import Team from '../components/Team';

const TeamDetails = ({ teamMembers }) => {
  return (
    <div>
      <h2>Team Details Page</h2>
      <Team teamMembers={teamMembers} />
    </div>
  );
};

export default TeamDetails;
