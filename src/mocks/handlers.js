import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),
]