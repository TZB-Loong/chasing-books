

//公共组件的module

import {querbookList} from '../../services/api'
export default{
  state:{
    bookList:[], //主题书单
  },
  mutations:{
    bookListSave(state,payload){
      Object.assign(state,{
        bookList:payload
      })
    }
  },
  actions:{
    async querbookList({commit,dispatch},payload){
      let response = await querbookList(payload);
      if(response.status==200){
        commit('bookListSave',response.data)
      }
    }
  }

}
