import { BotLoginRequest } from '../schema/bot'
import { Context } from 'elysia'

export const botLogin = async ({
  body,
}: Context<{ body: BotLoginRequest }>) => {

  //write code here

  return {
    success: true,
    data: body,
  }
}
