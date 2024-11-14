// src/Home.js
import React from 'react';
import DashboardMenuBar from './components/DashboardMenuBar';

const Home = () => {
  return (
    <div className="flex items-center p-2 min-h-screen dashboard_bg">
      <DashboardMenuBar />
    </div>
  );
};

export default Home;
