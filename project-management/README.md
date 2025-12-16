# Project Management Application

A full-stack project management system built with Node.js/Express backend and React frontend.

## Build Status

✅ **Complete** - Both backend and frontend successfully built and tested

## Quick Start

### Backend
```bash
cd project-management/backend
npm install
npm start
# Server runs on http://localhost:4000
```

### Frontend
```bash
cd project-management/frontend
npm install
npm start  # Development server on port 3000
npm run build  # Production build
```

## Features

### Backend (Express.js)
- RESTful API for project management
- Project CRUD operations (Create, Read, Update, Delete)
- Task management within projects
- Statistics endpoints
- CORS enabled for frontend communication
- In-memory database (demo)

### Frontend (React)
- **Dashboard**: Real-time statistics and metrics
- **Projects Page**: Browse, filter, and manage projects
- **Task Management**: Kanban-style columns (To Do, In Progress, Done)
- **Create Project Modal**: Form-based project creation
- **Responsive Design**: Mobile-friendly interface

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Tasks
- `GET /api/projects/:id/tasks` - Get project tasks
- `POST /api/projects/:id/tasks` - Add task
- `PUT /api/projects/:id/tasks/:taskId` - Update task
- `DELETE /api/projects/:id/tasks/:taskId` - Delete task

### Statistics
- `GET /api/stats` - Get system statistics

## Technologies

- **Backend**: Node.js, Express.js, CORS
- **Frontend**: React 19, CSS Modules, Fetch API
- **Build Tool**: Create React App

## Project Structure

```
project-management/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── styles/
    │   ├── App.js
    │   └── App.css
    ├── build/
    └── package.json
```
