import React from 'react';
import { storageRead } from '../../utils/storage';

const DashboardHeader = () => {

  const name = storageRead('profileinfo').firstname
  return (
    <div className="dash-header">
      <h1> Dashboard</h1>
      <p>Welcome {name}! Get some fitness in and achieve your fitness dreams!</p>
    </div>
  );
};

export default DashboardHeader;
