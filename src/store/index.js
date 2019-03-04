import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

import booksshelf_store from './modules/booksShelf_store';
export default new vuex.Store({
  modules:{
    bookShelf:booksshelf_store,
  }
})
