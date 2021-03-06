import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);
import booksshelf_store from './modules/booksShelf_store';
import ranking_store from './modules/ranking_store';
import booksDetail_store from './modules/booksDetail_store';
import chapter_store from './modules/chapter_store';
import common from './modules/common'; //组件module
import themList_store from './modules/themList_store';
import category_store from './modules/category_store';
import comprehensive from './modules/comprehensive_store';

export default new vuex.Store({
  modules:{
    bookShelf:booksshelf_store,
    rangking:ranking_store,
    detail:booksDetail_store,
    common,
    chapter:chapter_store,
    them:themList_store,
    category:category_store,
    comprehensive
  }
})
