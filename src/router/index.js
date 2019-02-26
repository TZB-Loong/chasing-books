import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/index',
      meta: {title: '首页'}
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['../components/Index.vue'], resolve),
      meta: {title: '首页'}
    }
  ]
})
