import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project, onDelete }) {
  const completedTasks = project.tasks.filter(t => t.status === 'completed').length;
  const progress = project.tasks.length > 0 
    ? Math.round((completedTasks / project.tasks.length) * 100)
    : 0;

  return (
    <div className="project-card">
      <div className="card-header">
        <h3>{project.name}</h3>
        <button className="btn-delete" onClick={() => onDelete(project.id)}>×</button>
      </div>
      
      <p className="card-description">{project.description}</p>
      
      <div className="card-meta">
        <span className={`status ${project.status}`}>{project.status}</span>
        <span className={`priority ${project.priority}`}>{project.priority}</span>
      </div>

      <div className="progress-mini">
        <div className="progress-bar-small">
          <div className="progress-fill-small" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="progress-text-small">{completedTasks}/{project.tasks.length} tasks</span>
      </div>

      <div className="card-owner">
        <strong>Owner:</strong> {project.owner}
      </div>

      {project.dueDate && (
        <div className="card-due-date">
          <strong>Due:</strong> {new Date(project.dueDate).toLocaleDateString()}
        </div>
      )}
    </div>
  );
}
