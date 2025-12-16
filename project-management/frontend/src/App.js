import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavClick={setCurrentPage} />
      <main className="main-content">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'project-detail' && <ProjectDetail projectId={selectedProjectId} />}
        {currentPage === 'team' && <div className="page"><h1>Team Management (Coming Soon)</h1></div>}
        {currentPage === 'settings' && <div className="page"><h1>Settings (Coming Soon)</h1></div>}
      </main>
    </div>
  );
}
