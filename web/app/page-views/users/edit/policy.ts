import { User } from '../../users/shared/interfaces'
import { USER_ADMIN } from '../../users/shared/constants'

export const canDelete = (user: User, targetUser: User): boolean => {
  return user.id != targetUser.id && user.role === USER_ADMIN
}