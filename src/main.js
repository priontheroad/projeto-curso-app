import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import Vuelidate from 'vuelidate';
import router from '../src/router/router';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuelidate)

Vue.use(VueAxios, axios);

new Vue({
  vuetify,
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
