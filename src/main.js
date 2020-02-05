import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'
import routes from './routes'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);
const router = new VueRouter({routes});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
