import { BasePolicy } from '../../../common/base-policy';

export class ApartmentUserPolicy extends BasePolicy {
  public canCreate(): boolean {
    return false
  }

  public canRead(): boolean {
    return true
  }

  public canUpdate(): boolean {
    return false
  }

  public canDelete(): boolean {
    return false
  }
}
