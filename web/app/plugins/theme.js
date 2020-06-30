import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import vClickOutside from 'v-click-outside'
import VueMask from 'v-mask'
import Vuelidate from 'vuelidate'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueSweetalert2 from 'vue-sweetalert2'
import Notifications from 'vue-notification'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

Vue.use(Notifications)
Vue.use(BootstrapVue)
Vue.use(vClickOutside)
Vue.use(VueMask)
Vue.use(Vuelidate)
Vue.use(VueSweetalert2)
Vue.component('VueSlider', VueSlider)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_MAP_KEY,
    libraries: 'places'
  },
  installComponents: true
})
