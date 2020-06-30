import { required, numeric } from 'vuelidate/lib/validators'

export const UPDATE_ITEM_VALIDATIONS = {
  name: {
    required
  },
  floorAreaSize: {
    required,
    numeric
  },
  numberOfRooms: {
    required,
    numeric
  },
  pricePerMonth: {
    required,
    numeric
  },
  latitude: {
    required,
    numeric
  },
  longitude: {
    required,
    numeric
  }
}
