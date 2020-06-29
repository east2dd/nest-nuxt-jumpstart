import { User } from '../user.entity';
import { CLIENT_ROLE, REALTOR_ROLE, ADMIN_ROLE } from '../../../common/roles';
import { UserClientPolicy } from './user.client.policy';
import { UserRealtorPolicy } from './user.realtor.policy';
import { UserAdminPolicy } from './user.admin.policy';
import { UserGuestPolicy } from './user.guest.policy';
import { UserPolicy } from './user.policy';

export class UserPolicyFactory {
  public static getPolicy(user: User): UserPolicy {
    if (user.role == CLIENT_ROLE ) {
      return new UserClientPolicy(user)
    }

    if (user.role == REALTOR_ROLE ) {
      return new UserRealtorPolicy(user)
    }

    if (user.role == ADMIN_ROLE ) {
      return new UserAdminPolicy(user)
    }

    return new UserGuestPolicy(user)
  }
}
