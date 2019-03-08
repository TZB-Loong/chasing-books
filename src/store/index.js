import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);
import booksshelf_store from './modules/booksShelf_store';
import ranking_store from './modules/ranking_store';
import booksDetail_store from './modules/booksDetail_store';

export default new vuex.Store({
  modules:{
    bookShelf:booksshelf_store,
    rangking:ranking_store,
    detail:booksDetail_store
  }
})
