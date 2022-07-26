const getTasks = () => {
  const tasks = require('./mocks/tasks.json');
  return tasks;
}

const getTasksByProject = (project_id) => {
  const allTasks = require('./mocks/tasks.json');
  const tasks = allTasks.filter(task => task.project_id === project_id);
  return tasks;
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

const getCurrentProjectByAccount = (id) => {
  const users = require('./mocks/users.json');
  const {currentProjectId} = users.find(user => user._id === id);
  const project = getProjectById(currentProjectId);
  return project; 
};

const exportCollection = {
  getTasks,
  getTasksByProject,
  getTaskById,
  getProjects,
  getProjectById,
  getCurrentProjectByAccount,
}




export default exportCollection;