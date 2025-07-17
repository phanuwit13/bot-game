import { Static, t } from 'elysia'

export const botLoginRequestSchema = t.Object({
  name: t.String(),
  email: t.String(),
  phoneNumber: t.String(),
  username: t.String(),
  password: t.String(),
})

export type BotLoginRequest = Static<typeof botLoginRequestSchema>