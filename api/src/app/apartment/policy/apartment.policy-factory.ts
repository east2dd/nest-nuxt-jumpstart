import { User } from '../../user/user.entity';
import { CLIENT_ROLE, REALTOR_ROLE, ADMIN_ROLE } from '../../../common/roles';
import { ApartmentClientPolicy } from './apartment.client.policy';
import { ApartmentRealtorPolicy } from './apartment.realtor.policy';
import { ApartmentAdminPolicy } from './apartment.admin.policy';
import { ApartmentGuestPolicy } from './apartment.guest.policy';
import { ApartmentPolicy } from './apartment.policy';

export class ApartmentPolicyFactory {
  public static getPolicy(user: User): ApartmentPolicy {
    if (user.role == CLIENT_ROLE ) {
      return new ApartmentClientPolicy(user)
    }

    if (user.role == REALTOR_ROLE ) {
      return new ApartmentRealtorPolicy(user)
    }

    if (user.role == ADMIN_ROLE ) {
      return new ApartmentAdminPolicy(user)
    }

    return new ApartmentGuestPolicy(user)
  }
}
