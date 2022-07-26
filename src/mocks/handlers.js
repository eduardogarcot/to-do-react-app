import { rest } from 'msw'
import auth from 'services/auth'
import apiServices from 'services/fakeServices';

export const handlers = [
  // Login Request
  rest.post('/login', (req, res, ctx) => {
    const {username, password} = req.body;
    const response = auth.fakeLoginService(username,password);
    if (response.exist) return res(
      ctx.status(200),
      ctx.json(response)
    )
    else return res(ctx.status(401));
  }),
  // Request for Obtain all Task related to a specific Project
  rest.get('/:project_id/tasks', (req, res, ctx) => {
    const {authorization} = req.headers._headers;
    const {project_id} = req.params;
    if (authorization !== 'asdaS13rfnalsdKVdfh13fdvaeriAsDFA213Q') return res(ctx.status(401));
    else {
      const response = apiServices.getTasksByProject(project_id);
      return res(
        ctx.status(200),
        ctx.json(response)
      );
    }
  }),
  // Request for Obtain all Tasks
  rest.get('/tasks', (req, res, ctx) => {
    const {authorization} = req.headers._headers;
    if (authorization !== 'asdaS13rfnalsdKVdfh13fdvaeriAsDFA213Q') return res(ctx.status(401));
    else {
      const response = apiServices.getTasks();
      return res(
        ctx.status(200),
        ctx.json(response)
      );
    }
  }),
  // Request to Obtain all Projects related to a specific User
  rest.get('/projects', (req, res, ctx) => {
    const {authorization} = req.headers._headers;
    if (authorization !== 'asdaS13rfnalsdKVdfh13fdvaeriAsDFA213Q') return res(ctx.status(401));
    else {
      const response = apiServices.getProjects();
      return res(
        ctx.status(200),
        ctx.json(response)
      );
    }
  }),
  // Request to Obtain Project Data by Id
  rest.get('/project/:id', (req, res, ctx) => {
    const {authorization} = req.headers._headers;
    const {id} = req.params;
    console.log('id', id);
    if (authorization !== 'asdaS13rfnalsdKVdfh13fdvaeriAsDFA213Q') return res(ctx.status(401));
    else {
      const response = apiServices.getProjectById(id);
      return res(
        ctx.status(200),
        ctx.json(response)
      );
    }
  }),
  // Request to Obtain Current Project Data by Account Id
  rest.get('/user/project/:id', (req, res, ctx) => {
    const {authorization} = req.headers._headers;
    const {id} = req.params;
    console.log('id', id);
    if (authorization !== 'asdaS13rfnalsdKVdfh13fdvaeriAsDFA213Q') return res(ctx.status(401));
    else {
      const response = apiServices.getCurrentProjectByAccount(id);
      return res(
        ctx.status(200),
        ctx.json(response)
      );
    }
  }),
]