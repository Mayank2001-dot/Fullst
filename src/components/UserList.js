// UserList.js
import React, { useState } from 'react';
import UserCard from './UserCard';
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 20;
  const totalPageCount = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPageCount));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    for (let i = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2)); i <= Math.min(totalPageCount, currentPage + Math.floor(maxPagesToShow / 2)); i++) {
      pageNumbers.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
          {i}
        </Pagination.Item>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      <div className="user-list">
        {/* Render user cards based on current page */}
        {users.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage).map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination>
          <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 1} />
          {renderPageNumbers()}
          <Pagination.Next onClick={handleNextPage} disabled={currentPage === totalPageCount} />
        </Pagination>
      </div>
    </div>
  );
};

export default UserList;


