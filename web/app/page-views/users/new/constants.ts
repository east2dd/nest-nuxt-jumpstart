import { required, numeric } from 'vuelidate/lib/validators'

export const CREATE_ITEM_VALIDATIONS = {
  email: {
    required
  },
  firstName: {
    required
  },
  lastName: {
    required
  },
  role: {
    required
  }
}
