import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import vClickOutside from 'v-click-outside'
import VueMask from 'v-mask'
import Vuelidate from 'vuelidate'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueSweetalert2 from 'vue-sweetalert2'
import Notifications from 'vue-notification'

Vue.use(Notifications)
Vue.use(BootstrapVue)
Vue.use(vClickOutside)
Vue.use(VueMask)
Vue.use(Vuelidate)
Vue.use(VueSweetalert2)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE',
    libraries: 'places'
  },
  installComponents: true
})
