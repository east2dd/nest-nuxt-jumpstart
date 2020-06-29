import Vue from "vue";
window.Vue = Vue;

import { BootstrapVue } from "bootstrap-vue";
import vClickOutside from "v-click-outside";
import Vuelidate from "vuelidate";
import * as VueGoogleMaps from "vue2-google-maps";
import VueSweetalert2 from "vue-sweetalert2";

Vue.prototype.$isDev = process.env.MIX_APP_ENV !== "production";
Vue.config.devtools = Vue.prototype.$isDev;
Vue.config.debug = Vue.prototype.$isDev;
Vue.config.silent = !Vue.prototype.$isDev;

Vue.use(BootstrapVue);
Vue.use(vClickOutside);
Vue.use(Vuelidate);
Vue.use(VueSweetalert2);
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
        libraries: "places",
    },
    installComponents: true,
});
