// UserCard.js
import React from 'react';
import './UserCard.css'; // Import your CSS file for styling

const UserCard = ({ user, onAddToTeam }) => {
  const handleAddToTeam = () => {
    // Pass the user to the onAddToTeam function
    onAddToTeam(user);
  };
  return (
    <div className="user-card">
      <img className="user-avatar" src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <div className="user-details">
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
        <p>Domain: {user.domain}</p>
        <p>Available: {user.available ? 'Yes' : 'No'}</p>
        <button onClick={() => handleAddToTeam} className="add-to-team-button">
          Add to Team
        </button>
      </div>
    </div>
  );
};

export default UserCard;

