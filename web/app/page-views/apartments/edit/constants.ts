import { required, numeric, decimal, between } from 'vuelidate/lib/validators'

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
    decimal,
    between (value: number) {
      return between(-90, 90)(value)
    }
  },
  longitude: {
    required,
    decimal,
    between (value: number) {
      return between(-180, 180)(value)
    }
  },
  state: {
    required,
    numeric,
    between (value: number) {
      return between(0, 1)(value)
    }
  }
}
