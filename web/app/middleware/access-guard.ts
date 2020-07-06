import { User } from '../page-views/users/shared/interfaces'
import {
  USER_CLIENT,
  USER_REALTOR,
  USER_ADMIN
} from '../page-views/users/shared/constants'

const DEFAULT_PAGE_NAME = 'apartments'
const DEFAULT_PAGE_URL = '/apartments'

enum Pages {
  apartments = 'apartments',
  apartmentsIdEdit = 'apartments-id-edit',
  apartmentsNew = 'apartments-new',
  users = 'users',
  usersIdEdit = 'users-id-edit',
  usersNew = 'users-new'
}

const PAGE_ALLOWED_USERS = {
  [Pages.apartments]: [USER_CLIENT, USER_REALTOR, USER_ADMIN],
  [Pages.apartmentsIdEdit]: [USER_REALTOR, USER_ADMIN],
  [Pages.apartmentsNew]: [USER_REALTOR, USER_ADMIN],
  [Pages.users]: [USER_ADMIN],
  [Pages.usersIdEdit]: [USER_ADMIN],
  [Pages.usersNew]: [USER_ADMIN]
}

const isAccessible = (user: User, route: Pages): boolean => {
  return PAGE_ALLOWED_USERS[route].includes(user.role)
}

const isAuthenticated = (store: any): boolean => {
  return !!store.$auth.user
}

export default function({ store, redirect, route }) {
  if (!isAuthenticated(store)) return
  if (isAccessible(store.$auth.user, route.name)) return
  if (route.name === DEFAULT_PAGE_NAME) return

  return redirect(DEFAULT_PAGE_URL)
}
