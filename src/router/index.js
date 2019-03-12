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
    },{
      path:'/bookshelf',
      name:'bookshelf',
      component:resolve => require(['../components/bookshelf/Bookshelf.vue'],resolve),
      meta:{title:'排行榜'}
    },{
      path:'/rang',
      name:'ranking',
      component:resolve => require(['../components/bookshelf/ranking.vue'],resolve),
      meta:{title:'排行榜详情'}
    },
    {
      path:'/bookDetail',
      name:'bookDetail',
      component:resolve => require(['../components/bookshelf/bookDetails.vue'],resolve),
      meta:{title:'书籍详情'}
    },{
      path:'/chapter',
      name:'chapter',
      component:resolve=> require(['../components/bookshelf/chapterList.vue'],resolve),
      meta:{title:'章节列表'}
    }
  ]
})
