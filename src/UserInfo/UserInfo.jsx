// UserInfo.js

import React, { useState, useEffect, useRef } from 'react';
// import { useHistory } from 'react-router-dom';

import './UserInfo.css';

function UserInfo() {
  const [isUserInfoVisible, setUserInfoVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: 'John Doe',
    email: 'john.doe@example.com',
    lastLogin: '2022-01-01 12:30 PM', // Add your logic to get the last login time
  });

  const dropdownRef = useRef(null);
  // const history = useHistory();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserInfoVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleUserInfo = () => {
    // Toggle visibility
    setUserInfoVisible(!isUserInfoVisible);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
    // You may want to redirect the user to the login page after logout
    // history.push('/login'); // Redirect to the login page

    // Hide the dropdown when logging out
    setUserInfoVisible(false);
  };

  return (
    <div className="user-info-container">
      <div className="user-info-button" onClick={toggleUserInfo}>
        User Info
      </div>
      {isUserInfoVisible && (
        <div className="user-info-dropdown" ref={dropdownRef}>
          <p>Username: {userInfo.username}</p>
          <p>Email: {userInfo.email}</p>
          <hr />
          <p>Current Date: {new Date().toLocaleDateString()}</p>
          <p>Last Login: {userInfo.lastLogin}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
