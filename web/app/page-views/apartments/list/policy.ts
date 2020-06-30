import { User } from '../../users/shared/interfaces'
import { USER_REALTOR, USER_ADMIN } from '../../users/shared/constants';
import { Apartment } from '../shared/interfaces';

export const canEdit = (user: User, apartment: Apartment): boolean => {
  if(user.role === USER_ADMIN) return true

  return user.role === USER_REALTOR && apartment.userId === user.id
}

export const canNew = (user: User): boolean => {
  return [USER_REALTOR, USER_ADMIN].includes(user.role)
}
