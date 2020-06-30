import { required, numeric } from 'vuelidate/lib/validators'

export const CREATE_ITEM_VALIDATIONS = {
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

export const GOOGLE_MAP_OPTIONS = {
  disableDefaultUI: true,
  scrollwheel: false,
  navigationControl: false,
  mapTypeControl: false,
  scaleControl: false,
  draggable: false,
}