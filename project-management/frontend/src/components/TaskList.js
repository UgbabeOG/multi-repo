import React, { useState } from 'react';
import './TaskList.css';

export default function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  const [editingId, setEditingId] = useState(null);
  const [editStatus, setEditStatus] = useState('');

  const handleStatusChange = (taskId, newStatus) => {
    onUpdateTask(taskId, { status: newStatus });
    setEditingId(null);
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Delete this task?')) {
      onDeleteTask(taskId);
    }
  };

  const groupedTasks = {
    'not-started': tasks.filter(t => t.status === 'not-started'),
    'in-progress': tasks.filter(t => t.status === 'in-progress'),
    'completed': tasks.filter(t => t.status === 'completed')
  };

  return (
    <div className="task-list">
      {['not-started', 'in-progress', 'completed'].map(status => (
        <div key={status} className="task-column">
          <h3 className={`column-title ${status}`}>
            {status === 'not-started' ? 'To Do' : status === 'in-progress' ? 'In Progress' : 'Done'}
            <span className="task-count">{groupedTasks[status].length}</span>
          </h3>
          
          {groupedTasks[status].length === 0 ? (
            <div className="empty-column">No tasks</div>
          ) : (
            <div className="tasks">
              {groupedTasks[status].map(task => (
                <div key={task.id} className={`task-item ${task.priority}`}>
                  <div className="task-content">
                    <input 
                      type="checkbox" 
                      checked={task.status === 'completed'}
                      onChange={() => handleStatusChange(task.id, task.status === 'completed' ? 'in-progress' : 'completed')}
                      className="task-checkbox"
                    />
                    <span className={`task-name ${task.status === 'completed' ? 'completed' : ''}`}>
                      {task.name}
                    </span>
                  </div>
                  
                  <div className="task-actions">
                    <select 
                      value={task.status}
                      onChange={(e) => handleStatusChange(task.id, e.target.value)}
                      className="status-select"
                    >
                      <option value="not-started">To Do</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Done</option>
                    </select>
                    
                    <button 
                      className="btn-delete-task" 
                      onClick={() => handleDeleteTask(task.id)}
                      title="Delete task"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
