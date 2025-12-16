const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (for demo purposes)
let projects = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Redesign company website',
    status: 'in-progress',
    priority: 'high',
    createdAt: new Date('2025-01-01'),
    dueDate: new Date('2025-02-15'),
    owner: 'John Doe',
    tasks: [
      { id: 1, name: 'Design mockups', status: 'completed', priority: 'high' },
      { id: 2, name: 'Frontend development', status: 'in-progress', priority: 'high' },
      { id: 3, name: 'Backend integration', status: 'not-started', priority: 'medium' }
    ]
  },
  {
    id: 2,
    name: 'Mobile App Launch',
    description: 'Launch iOS and Android app',
    status: 'in-progress',
    priority: 'high',
    createdAt: new Date('2024-12-01'),
    dueDate: new Date('2025-03-01'),
    owner: 'Jane Smith',
    tasks: [
      { id: 4, name: 'App development', status: 'in-progress', priority: 'high' },
      { id: 5, name: 'QA testing', status: 'in-progress', priority: 'high' },
      { id: 6, name: 'App store submission', status: 'not-started', priority: 'medium' }
    ]
  },
  {
    id: 3,
    name: 'Database Optimization',
    description: 'Optimize database performance',
    status: 'not-started',
    priority: 'medium',
    createdAt: new Date('2025-01-10'),
    dueDate: new Date('2025-02-28'),
    owner: 'Mike Johnson',
    tasks: []
  }
];

let nextProjectId = 4;
let nextTaskId = 7;

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Get all projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Get single project
app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  res.json(project);
});

// Create project
app.post('/api/projects', (req, res) => {
  const { name, description, priority, owner, dueDate } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Project name is required' });
  }
  
  const newProject = {
    id: nextProjectId++,
    name,
    description: description || '',
    status: 'not-started',
    priority: priority || 'medium',
    createdAt: new Date(),
    dueDate: dueDate ? new Date(dueDate) : null,
    owner: owner || 'Unknown',
    tasks: []
  };
  
  projects.push(newProject);
  res.status(201).json(newProject);
});

// Update project
app.put('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  
  const { name, description, status, priority, owner, dueDate } = req.body;
  if (name) project.name = name;
  if (description) project.description = description;
  if (status) project.status = status;
  if (priority) project.priority = priority;
  if (owner) project.owner = owner;
  if (dueDate) project.dueDate = new Date(dueDate);
  
  res.json(project);
});

// Delete project
app.delete('/api/projects/:id', (req, res) => {
  const index = projects.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Project not found' });
  }
  
  const deleted = projects.splice(index, 1);
  res.json(deleted[0]);
});

// Get tasks for project
app.get('/api/projects/:id/tasks', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  res.json(project.tasks);
});

// Add task to project
app.post('/api/projects/:id/tasks', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  
  const { name, priority, assignee } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Task name is required' });
  }
  
  const newTask = {
    id: nextTaskId++,
    name,
    status: 'not-started',
    priority: priority || 'medium',
    assignee: assignee || 'Unassigned'
  };
  
  project.tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update task
app.put('/api/projects/:id/tasks/:taskId', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  
  const task = project.tasks.find(t => t.id === parseInt(req.params.taskId));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  const { name, status, priority, assignee } = req.body;
  if (name) task.name = name;
  if (status) task.status = status;
  if (priority) task.priority = priority;
  if (assignee) task.assignee = assignee;
  
  res.json(task);
});

// Delete task
app.delete('/api/projects/:id/tasks/:taskId', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  
  const index = project.tasks.findIndex(t => t.id === parseInt(req.params.taskId));
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  const deleted = project.tasks.splice(index, 1);
  res.json(deleted[0]);
});

// Get statistics
app.get('/api/stats', (req, res) => {
  const stats = {
    totalProjects: projects.length,
    completedProjects: projects.filter(p => p.status === 'completed').length,
    inProgressProjects: projects.filter(p => p.status === 'in-progress').length,
    totalTasks: projects.reduce((sum, p) => sum + p.tasks.length, 0),
    completedTasks: projects.reduce((sum, p) => sum + p.tasks.filter(t => t.status === 'completed').length, 0)
  };
  res.json(stats);
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
  console.log(`API available at http://localhost:${port}/api`);
});
