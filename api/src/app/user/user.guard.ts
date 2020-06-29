import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { UserPolicy } from './policy/user.policy';
import { UserPolicyFactory } from './policy/user.policy-factory';
import { User } from './user.entity';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    private action: 'canCreate' | 'canRead' | 'canUpdate' | 'canDelete'
  ) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest()

    if(!this.isAuthorized(request.user)) {
      throw new UnauthorizedException()
    }

    return true
  }

  protected isAuthorized(user: User): boolean {
    return this.getPolicy(user)[this.action]()
  }

  protected getPolicy(user: User) : UserPolicy {
    return UserPolicyFactory.getPolicy(user)
  }
}
