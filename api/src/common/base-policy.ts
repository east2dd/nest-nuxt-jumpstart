import { User } from '../app/user/user.entity';
export class BasePolicy {
  constructor(protected user: User) { }
}
