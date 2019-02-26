// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {post,fetch,put,patch} from './util/http'
import Qs from 'qs'
import { axios } from 'axios';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.prototype.$post  = post;
Vue.prototype.$fetch  = fetch;
Vue.prototype.$patch  = patch;
Vue.prototype.$put  = put;
Vue.prototype.$qs = Qs;
Vue.prototype.$axios = axios;
