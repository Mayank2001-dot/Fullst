// pages/Home.js
import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../services/api';
import TeamDetails from './TeamDetails';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    domains: [],
    genders: [],
    availabilities: [],
  });
  const [teamMembers, setTeamMembers] = useState([]);

  // Sample options for domains, genders, and availabilities
  const yourDomainOptions = ['IT', 'Finance', 'Marketing'];
  const yourGenderOptions = ['Male', 'Female', 'Non-Binary'];
  const yourAvailabilityOptions = ['Yes', 'No'];

  useEffect(() => {
    // Fetch users from the backend when the component mounts
    const fetchData = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
        setFilteredUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (query) => {
    try {
      // Fetch users based on the search query from the server
      const searchResults = await fetchUsers(query);
      setFilteredUsers(searchResults);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleFilterSelect = (filterCategory, value) => {
  // Toggle selected filter
  setSelectedFilters((prevFilters) => {
    const updatedFilters = { ...prevFilters };
    if (updatedFilters[filterCategory].includes(value)) {
      updatedFilters[filterCategory] = updatedFilters[filterCategory].filter((filter) => filter !== value);
    } else {
      updatedFilters[filterCategory] = [...updatedFilters[filterCategory], value];
    }
    return updatedFilters;
  });

  // Apply filters to users
  applyFiltersToUsers({ ...selectedFilters, [filterCategory]: value });
};

const applyFiltersToUsers = (filters) => {
  // Implement logic to filter users based on the selected filters
  // For simplicity, I'll assume the filter logic here; adjust as needed
  const filteredUsers = users.filter((user) => {
    return (
      (filters.domains.length === 0 || filters.domains.includes(user.domain)) &&
      (filters.genders.length === 0 || filters.genders.includes(user.gender)) &&
      (filters.availabilities.length === 0 || filters.availabilities.includes(user.availability))  // Fix: use 'user.available' instead of 'user.availability'
    );
  });

  setFilteredUsers(filteredUsers);
};

  const handleFilterClear = () => {
    // Clear all selected filters
    setSelectedFilters({
      domains: [],
      genders: [],
      availabilities: [],
    });

    // Reset to show all users
    setFilteredUsers(users);
  };

  const handleAddToTeam = (user) => {
    // Handle adding user to team (if needed)
    console.log('Added to team:', user);
    setTeamMembers((prevMembers) => [...prevMembers, user]);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <h1>Fullst</h1>
          </a>
          <SearchBar onSearch={handleSearch} />
        </div>
      </nav>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <Filter
              domains={yourDomainOptions}
              genders={yourGenderOptions}
              availabilities={yourAvailabilityOptions}
              selectedFilters={selectedFilters}
              onFilterSelect={handleFilterSelect}
              onFilterClear={handleFilterClear}
            />
          </div>
          <div className="col-md-9">
            <UserList users={filteredUsers} onAddToTeam={handleAddToTeam} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
          {/* <Link to="/team-details">View Team Details</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
