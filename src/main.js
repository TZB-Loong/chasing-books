// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import {post,fetch,put,patch} from './util/http';
import Qs from 'qs';
import {LoadingPlugin } from 'vux'; //全局注册
import vuex from 'vuex'; //导入vuex框架
import store from './store'; //导入store 实例;
Vue.config.productionTip = false

/* eslint-disable no-new */


new Vue({ //一个vue实例
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

/* 全局注册 */

Vue.prototype.$post  = post; //axios post 请求
Vue.prototype.$fetch  = fetch; //axios get 请求
Vue.prototype.$patch  = patch;
Vue.prototype.$put  = put;
Vue.prototype.$qs = Qs;

Vue.use(vuex); //导入vuex 插件(store 数据管理)
Vue.use(LoadingPlugin); //使用loadingPlugin 插件
