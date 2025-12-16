import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import CreateProjectModal from '../components/CreateProjectModal';
import '../styles/Projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/projects');
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  const handleCreateProject = async (projectData) => {
    try {
      const response = await fetch('http://localhost:4000/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData)
      });
      if (response.ok) {
        fetchProjects();
        setShowModal(false);
      }
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await fetch(`http://localhost:4000/api/projects/${id}`, {
          method: 'DELETE'
        });
        fetchProjects();
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.status === filter);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>Projects</h1>
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          + New Project
        </button>
      </div>

      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'in-progress' ? 'active' : ''} 
          onClick={() => setFilter('in-progress')}
        >
          In Progress
        </button>
        <button 
          className={filter === 'not-started' ? 'active' : ''} 
          onClick={() => setFilter('not-started')}
        >
          Not Started
        </button>
        <button 
          className={filter === 'completed' ? 'active' : ''} 
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="no-projects">No projects found</div>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onDelete={handleDeleteProject}
            />
          ))}
        </div>
      )}

      {showModal && (
        <CreateProjectModal 
          onClose={() => setShowModal(false)}
          onCreate={handleCreateProject}
        />
      )}
    </div>
  );
}
