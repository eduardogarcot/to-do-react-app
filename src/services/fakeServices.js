const getTasks = () => {
  const tasks = require('./mocks/tasks.json');
  return tasks;
}

const getTasksByProject = (project_id) => {
  return [];
}

const getTaskById = (id) => {
  return {};
}

const getProjects = () => {
  const projects = require('./mocks/projects.json');
  return projects;
}

const getProjectById = (id) => {
  const projects = require('./mocks/projects.json');
  const project = projects.find(project => project.id === id);
  return project;
}

const exportCollection = {
  getTasks,
  getTasksByProject,
  getTaskById,
  getProjects,
  getProjectById
}




export default exportCollection;