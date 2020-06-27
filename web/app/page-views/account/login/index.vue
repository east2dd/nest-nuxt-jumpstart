<script lang="ts">
import Vue from 'vue'
import Form from './form.vue'

export default Vue.extend({
  components: {
    Form
  }
})
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6 col-xl-5">
      <div class="card overflow-hidden">
        <div class="bg-soft-primary">
          <div class="row">
            <div class="col-7">
              <div class="text-primary p-4">
                <h5 class="text-primary">Welcome</h5>
                <p>Sign in</p>
              </div>
            </div>
            <div class="col-5 align-self-end">
              <img src="/images/profile-img.png" alt class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="card-body pt-0">
          <div class="p-2">
            <Form />
          </div>
        </div>
      </div>

      <div class="mt-5 text-center">
        <p>
          Don't have an account ?

          <nuxt-link to="/account/register" class="font-weight-medium text-primary">
            Register
          </nuxt-link>
        </p>
        <p>© {{ new Date().getFullYear() }}</p>
      </div>
    </div>
  </div>
</template>
