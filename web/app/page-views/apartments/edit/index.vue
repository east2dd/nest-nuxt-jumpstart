<script lang="ts">
import Vue from 'vue'
import ApartmentForm from '../shared/form.vue'
import { Apartment } from '../shared/interfaces'
import { UPDATE_ITEM_VALIDATIONS } from './constants'

export default Vue.extend({
  components: { ApartmentForm },
  data() {
    return {
      validations: UPDATE_ITEM_VALIDATIONS
    }
  },
  computed: {
    item(): Apartment {
      return Object.assign({}, this.$store.state.apartments.item)
    }
  },
  created() {
    this.fetchItem()
  },
  methods: {
    fetchItem() {
      this.$store.dispatch('apartments/getApartment', this.$route.params.id)
    },
    updateApartment(item: Apartment) {
      this.$store.dispatch('apartments/updateApartment', item).then(() => {
        this.openList()
      })
    },
    deleteItem() {
      if (!confirm('Do you want to delete this item?')) return

      this.$store
        .dispatch('apartments/deleteApartment', this.item.id)
        .then(() => {
          this.openList()
        })
    },
    openList() {
      this.$router.push('/apartments')
    },
  }
})
</script>

<template>
  <b-row>
    <b-col sm="12" md="6">
      <ApartmentForm
        title="EDIT APARTMENT"
        :isEditMode="true"
        :apartment="item"
        :validationRules="validations"
        :submitAction="updateApartment"
        :deleteAction="deleteItem"
      />
    </b-col>
  </b-row>
</template>

<style lang="scss" scoped></style>
