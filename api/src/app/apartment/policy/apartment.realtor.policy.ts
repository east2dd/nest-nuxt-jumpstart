import { BasePolicy } from '../../../common/base-policy';

export class ApartmentRealtorPolicy extends BasePolicy {
  public canCreate(): boolean {
    return true
  }

  public canRead(): boolean {
    return true
  }

  public canUpdate(): boolean {
    return true
  }

  public canDelete(): boolean {
    return true
  }
}
