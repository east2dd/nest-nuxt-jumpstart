import { required, numeric } from 'vuelidate/lib/validators'

export const VALIDATION_UPDATE_ITEM_OPTIONS = {
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
