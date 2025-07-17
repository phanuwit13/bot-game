import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
import { botRoutes } from './routes/bot'

const app = new Elysia({ prefix: '/api' })
  .use(
    cors({
      origin: `*`,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  )
  .use(
    swagger({
      path: '/docs',
      documentation: {
        info: {
          title: 'Bot Game Documentation',
          version: '1.0.0',
        },
        tags: [{ name: 'Bot', description: 'Bot endpoints' }],
      },
    })
  )
  .group('/v1', (app) => app.group('/bot', (app) => app.use(botRoutes)))
  .listen(8080)

console.log(
  `🦊 Bot Game is running at ${app.server?.hostname}:${app.server?.port}`
)
