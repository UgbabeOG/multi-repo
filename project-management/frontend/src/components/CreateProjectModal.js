import React, { useState } from 'react';
import './CreateProjectModal.css';

export default function CreateProjectModal({ onClose, onCreate }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    owner: '',
    priority: 'medium',
    dueDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Project name is required');
      return;
    }
    onCreate(formData);
    setFormData({
      name: '',
      description: '',
      owner: '',
      priority: 'medium',
      dueDate: ''
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Create New Project</h2>
          <button className="btn-close" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Project Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter project name"
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Project description"
              rows="4"
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Owner</label>
              <input
                type="text"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                placeholder="Project owner"
              />
            </div>

            <div className="form-group">
              <label>Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
