<script lang="ts">
import Vue from 'vue'
import ApartmentForm from '../shared/form.vue'
import { Apartment } from '../shared/interfaces'
import { CREATE_ITEM_VALIDATIONS } from './constants'

export default Vue.extend({
  components: { ApartmentForm },
  data() {
    return {
      item: {} as Apartment,
      validations: CREATE_ITEM_VALIDATIONS
    }
  },

  methods: {
    createApartment() {

      this.$store.dispatch('apartments/createApartment', this.item).then(() => {
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
        isEditMode=false
        :item="item"
        :validationRules="validations"
        :submitAction="createApartment"
      />
    </b-col>
  </b-row>
</template>
<style lang="scss" scoped></style>
