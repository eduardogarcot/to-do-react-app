import mocks from "utils/mocks";

const getTasks = () => {
  return mocks.TASKS;
}

const getTasksByProject = (project_id) => {
  return [];
}
const getTaskById = (id) => {
  return {};
}

const getProjects = () => {
  return [];
}

const getProjectById = (id) => {
  return {};
}

const exportCollection = {
  getTasks,
  getTasksByProject,
  getTaskById
}




export default exportCollection;