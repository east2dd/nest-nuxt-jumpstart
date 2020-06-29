import { BasePolicy } from '../../../common/base-policy';

export class UserRealtorPolicy extends BasePolicy {
  public canCreate(): boolean {
    return false
  }

  public canRead(): boolean {
    return false
  }

  public canUpdate(): boolean {
    return false
  }

  public canDelete(): boolean {
    return false
  }
}
