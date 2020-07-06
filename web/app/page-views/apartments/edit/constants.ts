import { required, numeric, decimal } from 'vuelidate/lib/validators'

export const UPDATE_ITEM_VALIDATIONS = {
  name: {
    required
  },
  floorAreaSize: {
    required,
    decimal
  },
  numberOfRooms: {
    required,
    numeric
  },
  pricePerMonth: {
    required,
    decimal
  },
  latitude: {
    required,
    decimal
  },
  longitude: {
    required,
    decimal
  }
}
