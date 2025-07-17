import { Elysia } from 'elysia'
import { botLogin } from '../services/bot'
import { botLoginRequestSchema } from '../schema/bot'

export const botRoutes = new Elysia().post('/login', botLogin, {
  body: botLoginRequestSchema,
  detail: {
    tags: ['Bot'],
    description: 'Bot login',
    summary: 'Bot Login',
  },
})
