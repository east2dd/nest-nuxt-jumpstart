<script>
import Vue from 'vue'
import simplebar from 'simplebar-vue'
import { mapState } from "vuex";

export default Vue.extend({
  components: { simplebar },
  computed: {
    ...mapState(["auth"])
  },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu()
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar()
    }
  }
})
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <div class="navbar-brand-box">
          <a href="/" class="logo">
            TEST
          </a>
        </div>

        <button
          id="vertical-menu-btn"
          type="button"
          class="btn btn-sm px-3 font-size-16 header-item"
          @click="toggleMenu"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>
      </div>

      <div class="d-flex">
        <b-dropdown
          right
          menu-class="dropdown-menu-lg p-0"
          toggle-class="header-item noti-icon"
          variant="black"
        >
          <simplebar style="max-height: 230px;">
          </simplebar>
        </b-dropdown>
      </div>
    </div>
  </header>
</template>
