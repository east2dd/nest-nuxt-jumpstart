<script lang="ts">
import Vue from 'vue'
import ApartmentForm from '../shared/form.vue'
import { Apartment } from '../shared/interfaces'
import { CREATE_ITEM_VALIDATIONS } from './constants'

export default Vue.extend({
  components: { ApartmentForm },
  data() {
    return {
      item: { latitude: 0, longitude: 0, description: "" } as Apartment,
      validations: CREATE_ITEM_VALIDATIONS
    }
  },

  methods: {
    createApartment(item: Apartment) {

      this.$store.dispatch('apartments/createApartment', item).then(() => {
        this.openList()
      })
    },
    openList() {
      this.$router.push('/apartments')
    }
  }
})
</script>

<template>
  <b-row>
    <b-col sm="12" md="6">
      <ApartmentForm
        title="NEW APARTMENT"
        :isEditMode=false
        :apartment="item"
        :validationRules="validations"
        :submitAction="createApartment"
      />
    </b-col>
  </b-row>
</template>
<style lang="scss" scoped></style>
