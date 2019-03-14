

import {querycategoryList,querycategoryDetail} from '../../services/api';

export default{
  state:{
    categoryList:{},
    categoryDetail:{}
  },
  mutations:{
    categoryListSave(state,payload){
      Object.assign(state,{
        categoryList:payload
      })
    },
    categoryDetailSave(state,payload){
      Object.assign(state,{
        categoryDetail:payload
      })
    }
  },
  actions:{
    async querycategoryList({commit,dispatch},payload){ //分类列表
      let response = await querycategoryList(payload)
      if(response.status==200){
        commit('categoryListSave',response.data)
      }
    },
    async querycategoryDetail({commit,dispatch},payload){
      let response = await querycategoryDetail(payload)
      if(response.status==200){
        commit('categoryDetailSave',response.data)
      }
    }
  }
}
