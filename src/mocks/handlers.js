import { rest } from 'msw'
import auth from 'services/auth'

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
]