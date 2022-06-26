import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import Board from 'App/Models/Board'
import User from 'App/Models/User'

export default class UserPolicy extends BasePolicy {
  public async invoke(user: User) {
    return user.isAdm
  }
}
