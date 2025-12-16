import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import '../styles/ProjectDetail.css';

export default function ProjectDetail({ projectId }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newTaskName, setNewTaskName] = useState('');

  useEffect(() => {
    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  const fetchProject = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/projects/${projectId}`);
      const data = await response.json();
      setProject(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching project:', error);
      setLoading(false);
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTaskName.trim()) return;

    try {
      const response = await fetch(`http://localhost:4000/api/projects/${projectId}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newTaskName })
      });
      if (response.ok) {
        fetchProject();
        setNewTaskName('');
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleUpdateTask = async (taskId, updates) => {
    try {
      const response = await fetch(`http://localhost:4000/api/projects/${projectId}/tasks/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      if (response.ok) {
        fetchProject();
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await fetch(`http://localhost:4000/api/projects/${projectId}/tasks/${taskId}`, {
        method: 'DELETE'
      });
      fetchProject();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!project) return <div className="error">Project not found</div>;

  const completedTaskCount = project.tasks.filter(t => t.status === 'completed').length;
  const progress = project.tasks.length > 0 
    ? Math.round((completedTaskCount / project.tasks.length) * 100)
    : 0;

  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>{project.name}</h1>
        <span className={`status-badge ${project.status}`}>{project.status}</span>
        <span className={`priority-badge ${project.priority}`}>{project.priority}</span>
      </div>

      <div className="project-info">
        <p className="description">{project.description}</p>
        <div className="meta">
          <div className="meta-item">
            <strong>Owner:</strong> {project.owner}
          </div>
          <div className="meta-item">
            <strong>Created:</strong> {new Date(project.createdAt).toLocaleDateString()}
          </div>
          {project.dueDate && (
            <div className="meta-item">
              <strong>Due:</strong> {new Date(project.dueDate).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>

      <div className="progress-section">
        <h3>Progress</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">{completedTaskCount} of {project.tasks.length} tasks completed ({progress}%)</p>
      </div>

      <div className="tasks-section">
        <h2>Tasks</h2>
        <form onSubmit={handleAddTask} className="add-task-form">
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="Add a new task..."
            className="task-input"
          />
          <button type="submit" className="btn-primary">Add Task</button>
        </form>

        {project.tasks.length === 0 ? (
          <div className="no-tasks">No tasks yet. Create one to get started!</div>
        ) : (
          <TaskList 
            tasks={project.tasks}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeleteTask}
          />
        )}
      </div>
    </div>
  );
}
