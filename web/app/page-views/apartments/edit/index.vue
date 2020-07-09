<script lang="ts">
import Vue from 'vue'
import Swal from "sweetalert2";
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
      Swal.fire({
        title: "Are you sure to delete this apartment?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f46a6a",
        cancelButtonColor: "#34c38f",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$store
            .dispatch('apartments/deleteApartment', this.item.id)
            .then(() => {
              this.openList()
            })
        }
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
