import { rest } from 'msw'
import auth from 'services/auth'
import apiServices from 'services/fakeServices';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const {username, password} = req.body;
    const response = auth.fakeLoginService(username,password);
    if (response.exist) return res(
      ctx.status(200),
      ctx.json(response)
    )
    else return res(ctx.status(401));
  }),
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
  })
]