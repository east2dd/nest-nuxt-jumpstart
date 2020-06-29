import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ApartmentPolicy } from './policy/apartment.policy';
import { ApartmentPolicyFactory } from './policy/apartment.policy-factory';
import { User } from '../user/user.entity';

@Injectable()
export class ApartmentGuard implements CanActivate {
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

  protected getPolicy(user: User) : ApartmentPolicy {
    return ApartmentPolicyFactory.getPolicy(user)
  }
}
