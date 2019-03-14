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
    },{
      path:'/chapterDetail',
      name:'chapterDetail',
      component:resolve => require(['../components/bookshelf/chapterDetails.vue'],resolve),
      meta:{title:'章节详情'}
    },{
      path:'/themList',
      name:'themList',
      component:resolve=>require(['../components/themeSheet/themeList.vue'],resolve),
      meta:{title:'主题书单'}
    },{
      path:'/themDetails',
      name:'themList',
      component:resolve =>require(['../components/themeSheet/themeDetails.vue'],resolve),
      meta:{title:'书单详情'}
    },
    {
      path:'/categoryList',
      name:'categoryList',
      component:resolve =>require(['../components/category/categoryList.vue'],resolve),
      meta:{title:'分类列表'}
    },
    {
      path:'/categoryDetail',
      name:'categoryDetail',
      component:resolve =>require(['../components/category/categoryDetail.vue'],resolve),
      meta:{title:'单一分类详情'}
    },
    {
      path:'/communityIndex',
      name:'communityIndex',
      component:resolve =>require(['../components/community/communityIndex.vue'],resolve),
      meta:{title:'追书社区'}
    }
  ]
})
