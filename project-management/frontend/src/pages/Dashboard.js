import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/stats');
      const data = await response.json();
      setStats(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching stats:', error);
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Projects</h3>
          <p className="stat-number">{stats?.totalProjects || 0}</p>
        </div>
        <div className="stat-card in-progress">
          <h3>In Progress</h3>
          <p className="stat-number">{stats?.inProgressProjects || 0}</p>
        </div>
        <div className="stat-card completed">
          <h3>Completed</h3>
          <p className="stat-number">{stats?.completedProjects || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p className="stat-number">{stats?.totalTasks || 0}</p>
        </div>
        <div className="stat-card completed">
          <h3>Completed Tasks</h3>
          <p className="stat-number">{stats?.completedTasks || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Active Users</h3>
          <p className="stat-number">5</p>
        </div>
      </div>
    </div>
  );
}
