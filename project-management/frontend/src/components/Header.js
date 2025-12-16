import React from 'react';
import './Header.css';

export default function Header({ currentPage, onNavClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">ProjectHub</h1>
        <nav className="nav">
          <button 
            className={`nav-item ${currentPage === 'dashboard' ? 'active' : ''}`}
            onClick={() => onNavClick('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`nav-item ${currentPage === 'projects' ? 'active' : ''}`}
            onClick={() => onNavClick('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-item ${currentPage === 'team' ? 'active' : ''}`}
            onClick={() => onNavClick('team')}
          >
            Team
          </button>
          <button 
            className={`nav-item ${currentPage === 'settings' ? 'active' : ''}`}
            onClick={() => onNavClick('settings')}
          >
            Settings
          </button>
        </nav>
      </div>
    </header>
  );
}
