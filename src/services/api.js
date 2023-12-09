// services/api.js
import axios from 'axios';

// // Update this URL to point to your backend server
// const API_BASE_URL = 'http://localhost:3001/api';

// export const fetchUsers = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/users`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     throw error;
//   }
// };

// Add other necessary API functions
// services/api.js
const BASE_URL = 'http://localhost:3001/api';

export const fetchUsers = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/users?search=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
};
